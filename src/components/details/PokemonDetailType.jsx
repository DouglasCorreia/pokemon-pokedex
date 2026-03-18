function PokemonDetailType({types}) {
    return (
        <>
            <div className="w-full mb-8">
                <h2 className="block leading-none capitalize font-bold text-xl text-gray-950 mb-3.5">Tipo</h2>

                <ul className="flex flex-wrap items-center gap-3">
                    { types && types.map((type, index) => {
                        return(
                            <li key={index} className={`leading-none text-gray-600 py-2 px-4 rounded-lg text-white font-medium background-type-${type.type.name}`}>{type.type.name}</li>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}

export default PokemonDetailType;