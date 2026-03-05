import pokeicon from '../assets/icons/pokemon-icon.svg';

function PokemonCount ({count}) {
    return (
        <>
            <div className="w-full sm:w-1/2 lg:w-1/3">
                <p className="flex items-center gap-x-1 leading-none text-gray-950 my-4">
                    <img
                        src={ pokeicon }
                        alt="Ícone de uma pokebola"
                        className="size-5"
                        width="20"
                        height="20"
                        loading="lazy"
                    />
                    
                    <b className="text-thunderbird-500">{ count } </b> pokémons encontrados
                </p>
            </div>
        </>
    )
}

export default PokemonCount;