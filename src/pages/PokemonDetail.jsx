import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemon } from "../services/pokemonDetail";
import pokemonDetailCache from "../services/pokemonDetailCache";
import PokemonDetailType from "../components/details/PokemonDetailType";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PokemonDetailSubtitleSection from "../components/details/PokemonDetailSubtitleSection";
import PokemonDetailSwiper from "../components/details/PokemonDetailSwiper";

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
            <div className="page-pokemon-detail">
                <div className='min-h-140 bg-linear-to-r from-red-500 via-thunderbird-800 to-thunderbird-800 flex flex-col justify-end items-center relative px-4 pt-24 pb-10'>
                    <h1 className='block leading-none font-bold text-white text-center text-3xl sm:text-6xl lg:text-7xl capitalize'>{ pokemon.name }</h1>

                    <div className="block w-full">
                        {
                            pokemon.sprites != null > 0 && (
                                <img
                                    src={
                                        pokemon.sprites?.other?.dream_world?.front_default
                                        ? pokemon.sprites?.other?.dream_world?.front_default
                                        : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` }
                                    alt={`Imagem do pokémon ${pokemon.name}`}
                                    fetchPriority='high' 
                                    className='w-full h-auto mx-auto max-w-75 mt-10'
                                    width='300'
                                    height='289'
                                />
                            )
                        }
                    </div>
                </div>

                <div className="bg-white py-10">
                    <div className="container">
                        <PokemonDetailType
                            types={ pokemon.types }
                        />

                        <div className="grid grid-cols-2">
                            <div className="col-span-2 lg:col-span-1">
                                <PokemonDetailSubtitleSection
                                    title="Sprites do pokémon"
                                />

                                <PokemonDetailSwiper
                                    pokemon={pokemon}
                                    front={pokemon.sprites?.front_default}
                                    back={pokemon.sprites?.back_default}
                                    nextArrow="swiper-button-normal-next"
                                    prevArrow="swiper-button-normal-prev"
                                />
                            </div>

                            <div className="col-span-2 lg:col-span-1 mt-8 lg:mt-0">
                                <PokemonDetailSubtitleSection
                                    title="Sprites do pokémon em modo shiny"
                                />

                                <PokemonDetailSwiper
                                    pokemon={pokemon}
                                    front={pokemon.sprites?.front_shiny}
                                    back={pokemon.sprites?.back_shiny}
                                    nextArrow="swiper-button-shiny-next"
                                    prevArrow="swiper-button-shiny-prev"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonDetail;