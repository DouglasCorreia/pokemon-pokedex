import { useEffect, useRef, useState, useMemo } from "react";
import { getPokemons } from "../services/pokemonsList";
import { getAllPokemons } from "../services/pokemonAll";
import PokemonSpot from './spots/PokemonSpot';
import SearchBar from "./search/SearchBar";
import PokemonCount from "./PokemonCount";
import { motion } from "framer-motion";
import ButtonShowMore from "./buttons/ButtonShowMore";

function PokemonList({ search, setSearch }) {
    const [pokemons, setPokemons] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemonsCount, setPokemonsCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const hasFetched = useRef(false);
    const limit = 24;
    
    useEffect(() => {
        if (hasFetched.current) return;

        hasFetched.current = true;

        loadPokemons();
        loadAllPokemons();
    }, []);

    useEffect(() => {
        loadPokemons(true);
    }, [search]);

    const filteredPokemons = useMemo(() => {
        if (search.length === 0) return [];

        return allPokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, allPokemons]);

    const loadAllPokemons = async () => {
        try {
            const response = await getAllPokemons();

            setAllPokemons(response.data.results);

        } catch (error) {
            console.error("Erro na busca, carregando lista completa:", error);
        }
    }

    const loadPokemons = async (reset = false, offsetParameter) => {
        if (loading && search.length === 0) return;

        setLoading(true);

        try {
            if (search.length > 0) {
                if (allPokemons.length === 0) return;

                const filtered = filteredPokemons;

                setPokemons(filtered.slice(0, limit));
                setOffset(0);
                setPokemonsCount(filtered.length);
            } else {
                const currentOffset = reset ? 0 : (offsetParameter ? offsetParameter : offset);
                const result = await getPokemons(limit, currentOffset);

                setPokemons((prev) => reset ? result.data.results : [...prev, ...result.data.results]);
                setOffset(currentOffset + limit);
                setPokemonsCount(result.data.count);
            }
        } catch (error) {
            console.error("Erro na busca, carregando lista completa:", error);

            setPokemons([]);
            setOffset(0);
            setPokemonsCount(0);

        } finally {
            setLoading(false);
        }
    };

    const getPokemonId = (url) => {
        return url.split("/pokemon/")[1].replaceAll("/", "");
    };

    return (
        <div className="col-span-12">
            <div className="flex max-sm:flex-wrap items-center justify-between gap-4 mb-8">
                <PokemonCount
                    count={pokemonsCount}
                />

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
            </div>

            {pokemons.length > 0 && (
                <ul className="grid grid-cols-12 gap-4">
                    {pokemons.map((pokemon, index) => {
                        const id = pokemon.url ? getPokemonId(pokemon.url) : pokemon.id;

                        return (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: (index % limit) * 0.05 }}
                                viewport={{ once: true, amount: 0.1 }}
                                className="col-span-6 sm:col-span-4 lg:col-span-3 bg-white rounded-lg transition-transform duration-200 lg:hover:-translate-y-3"
                            >
                                <PokemonSpot id={id} />
                            </motion.li>
                        );
                    })}
                </ul>
            )}

            {pokemonsCount > pokemons.length && (
                <ButtonShowMore
                    loading={loading}
                    search={search}
                    onClick={() => loadPokemons(false, offset)}
                />
            )}

            {pokemons.length === 0 && (
                <>
                    <p className="block leading-none text-gray-950 font-bold text-center text-xl">Ops, nenhum pokémon encontrado!</p>
                    <p className="block leading-none text-gray-950 font-normal text-center text-lg mt-4">Faça uma nova busca novamente ou clique no botão abaixo para apresentar todos os pokémons</p>

                    <button
                        onClick={() => {
                            setInputValue("");
                            setSearch("");
                        }}
                        className="btn bg-red-600 hover:bg-red-700"
                    >
                        Apresentar todos os pokémons
                    </button>
                </>
            )}
        </div>
    );
}

export default PokemonList;