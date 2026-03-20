function PokemonDetailType({types}) {
    return (
        <>
            <ul className="flex flex-wrap items-center gap-3">
                { types && types.map((type, index) => {
                    return(
                        <li key={index} className={`leading-none py-2 px-4 rounded-xs text-${type.type.name}-600 font-semibold bg-${type.type.name}-300`}>{type.type.name}</li>
                    );
                })}
            </ul>
        </>
    )
}

export default PokemonDetailType;