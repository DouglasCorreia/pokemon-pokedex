import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemon } from "../services/pokemonDetail";
import pokemonDetailCache from "../services/pokemonDetailCache";

function PokemonDetail () {
    const [pokemon, setPokemon] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchPokemon = async () => {
            if(pokemonDetailCache.has(id)){
                setPokemon(pokemonDetailCache.get(id));

                return;
            }

            try {
                const { data } = await getPokemon(id);
        
                pokemonDetailCache.set(id, data);
                setPokemon(data);
        
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchPokemon();
      }, [id]);

    return (
        <>
            <h1 className="text-gray-950">Página de detalhe do pokémon { pokemon.name }</h1>
            <p className="text-gray-950">{ id }</p>
        </>
    )
}

export default PokemonDetail;