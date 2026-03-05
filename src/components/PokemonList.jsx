import { useEffect, useRef, useState } from "react";
import { getPokemons } from "../services/pokemonsList";
import { searchPokemon } from "../services/pokemonSearch";
import PokemonSpot from './PokemonSpot';
import SearchBar from "./search/SearchBar";
import PokemonCount from "./PokemonCount";
import { motion } from "motion/react";

function PokemonList({ search, setSearch }) {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonsCount, setPokemonsCount] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const hasFetched = useRef(false);
    const limit = 24;
    
    // Carregar lista inicial uma vez
    useEffect(() => {
        if (hasFetched.current) return;

        hasFetched.current = true;

        loadPokemons(0);
    }, []);

    // Buscar pokémon quando search muda
    useEffect(() => {
        if (search.length > 0) {
            setPokemons([]);
            loadPokemons(0);
        }
    }, [search]);

    const loadPokemons = async (currentOffset) => {
        setLoading(true);

        try {
            if (search.length > 0) {
                // Busca simples - sempre retorna 1 ou 0 resultados, sem paginação
                    const result = await searchPokemon(search);

                if (result) {
                    setPokemons([result.data]);
                } else {
                    setPokemons([]);
                }
            } else {
                // Lista paginada
                const result = await getPokemons(limit, currentOffset);

                setPokemons((prev) => [...prev, ...result.data.results]);
                setOffset(currentOffset + limit);
                setPokemonsCount(result.data.count);
            }
        } catch (error) {
            console.error("Erro na busca, carregando lista completa:", error);

        } finally {
            setLoading(false);
        }
    };

    const loadPokemonsReset = async (currentOffset) => {
        try {
            const result = await getPokemons(limit, currentOffset);

            setPokemons((prev) => [...prev, ...result.data.results]);
            setOffset(currentOffset + limit);

        } catch (error) {
            console.error("Erro na busca, carregando lista completa:", error);

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
                />
            </div>

            {
                pokemons.length > 0 && (
                    <>
                        <ul className="grid grid-cols-12 gap-4">
                            {pokemons.map((pokemon, index) => {
                                const id = pokemon.url ? getPokemonId(pokemon.url) : pokemon.id;

                                return (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="col-span-6 sm:col-span-4 lg:col-span-3 bg-white rounded-lg"
                                    >
                                        <PokemonSpot id={id} />
                                    </motion.li>
                                );
                            })}
                        </ul>

                        {/* Desabilita o botão quando estiver buscando */}
                        <button
                            onClick={() => loadPokemons(offset)}
                            disabled={loading || search.length > 0}
                            className={`flex items-center justify-center mx-auto mt-10 h-12 px-6 rounded-lg font-medium cursor-pointer shadow-xl ${
                                loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                            }`}
                        >
                            {loading ? "Carregando..." : search.length > 0 ? "Busca ativa" : "Ver mais"}
                        </button>
                    </>
            )}

            {
                pokemons.length === 0 && (
                    <>
                        <p className="block leading-none text-gray-950 font-bold text-center text-xl">Ops, nenhum pokémon encontrado!</p>
                        <p className="block leading-none text-gray-950 font-normal text-center text-lg mt-4">Faça uma nova busca novamente ou clique no botão abaixo para apresentar todos os pokémons</p>

                        <button
                            onClick={loadPokemonsReset}
                            className="flex items-center justify-center mx-auto mt-10 h-12 px-6 rounded-lg font-medium cursor-pointer shadow-xl bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                        >
                            Apresentar todos os pokémons
                        </button>
                    </>
            )}
        </div>
    );
}

export default PokemonList;