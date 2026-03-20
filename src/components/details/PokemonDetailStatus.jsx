function PokemonDetailStatus({stats}) {
    return (
        <>
            {
                stats?.map((stat, index) => {
                    return (
                        <div className="flex flex-wrap items-center gap-2">
                            <p key={index} className="block leading-none text-gray-500 font-medium capitalize">{ stat.stat.name }</p>

                            <div className="w-full h-2 bg-gray-200 relative">
                                <div style={{ width: `${stat.base_stat}%`, maxWidth: `100%` }} className={`bg-red-600 h-2`}></div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default PokemonDetailStatus;