import { useEffect, useRef, useState } from "react";
import { getPokemon } from "../services/pokemonDetail";

function PokemonSpot({id}) {
  const [pokemon, setPokemon] = useState([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;

    hasFetched.current = true;

    const fetchPokemon = async () => {
      try {
        const { data } = await getPokemon(id);

        setPokemon(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemon();
  }, []);

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return(
    <>
      <div className="pokemon-spot shadow-xl p-3 rounded-lg">
        <div className="pokemon-image min-h-28 flex items-center justify-center relative">
          <img
            src={imageUrl}
            alt={pokemon.name}
            className="w-full max-w-40 h-auto max-h-28 mx-auto object-contain block"
            loading="lazy"
            width="100"
            height="100"
          />

          <ul className="pokemon-types absolute top-0 right-0 flex flex-col gap-2.5">
            {pokemon.types && pokemon.types.map((type, index) => {
                return(
                  <li key={index}><i className={`type-icon ${type.type.name}`}></i></li>
                );
              })}
          </ul>
        </div>

        <div className="pokemon-content mt-4">
          <span className="block leading-none capitalize font-medium text-sm text-gray-600">Nº {String(pokemon.id).padStart(4, '0')}</span>
          
          <h3 className="block leading-none capitalize font-bold text-xl text-gray-600 mt-2">{pokemon.name}</h3>
        </div>
      </div>
    </>
  );
}

export default PokemonSpot;