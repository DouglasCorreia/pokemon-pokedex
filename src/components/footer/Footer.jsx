function Footer() {
    return (
        <>
            <footer className="bg-red-500 py-4">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h4 className="block leading-none text-white font-semibold">Módulo React</h4>
                            <p className="block leading-none text-white text-sm mt-2">Consumindo dados de uma API</p>
                        </div>

                        <p className="block leading-none text-center sm:text-right text-white text-sm">Desenvolvido por: <a href="https://github.com/DouglasCorreia" target="_blank" rel="noopener noreferer">Douglas Rocha</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;