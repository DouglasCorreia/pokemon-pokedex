function PokemonDetailType({types}) {
    return (
        <>
            <ul className="flex flex-wrap items-center gap-3">
                { types && types.map((type, index) => {
                    return(
                        <li
                            key={index}
                            className={`leading-none py-2 px-4 rounded-xs font-semibold background-type-${type.type.name}`}
                        >
                            {type.type.name}
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default PokemonDetailType;