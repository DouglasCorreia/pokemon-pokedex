import { useEffect, useState } from "react";
import { getPokemon } from "../../services/pokemonDetail";
import { Link } from "react-router-dom";

function PokemonSpot({id}) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);

        const { data } = await getPokemon(id);

        setPokemon(data);

      } catch (error) {
        console.error(error);

      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return(
    <>
      <div className="pokemon-spot shadow-lg p-3 rounded-lg">
        {
          loading ?
            <Link
              to={`/pokemon/${pokemon.id}`}
            >
              <div className="pokemon-image min-h-28 flex items-center justify-center relative">
                <div className="bg-gray-300 w-20 h-20 animate-pulse"></div>
              </div>

              <div className="pokemon-content mt-4">
                <div className="bg-gray-300 w-16 h-4 animate-pulse"></div>
              </div>
            </Link>
          :
            <Link
              to={`/pokemon/${pokemon.id}`}
            >
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
            </Link>
        }
      </div>
    </>
  );
}

export default PokemonSpot;