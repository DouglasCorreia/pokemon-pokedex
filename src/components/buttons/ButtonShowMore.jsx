function ButtonShowMore({ loading, search, onClick }) {
    return (
        <>
            <button
                onClick={onClick}
                disabled={loading || search.length > 0}
                className={`btn ${
                    loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                }`}
            >
                {loading ? "Carregando..." : search.length > 0 ? "Busca ativa" : "Ver mais"}
            </button>
        </>
    )
}

export default ButtonShowMore;