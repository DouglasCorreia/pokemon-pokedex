import logo from '../../assets/drf-logo-white.png';

function Footer() {
    return (
        <>
            <footer className="bg-red-500 py-4">
                <div className="container">
                    <div className="flex items-center flex-wrap justify-between">
                        <div className="w-full lg:w-1/2">
                            <h4 className="block leading-none text-center lg:text-left text-white font-semibold">Módulo React</h4>
                            <p className="block leading-none text-center lg:text-left text-white text-sm mt-2">Consumindo dados de uma API</p>
                        </div>

                        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                            <p className="flex items-center flex-wrap justify-center lg:justify-end leading-none sm:text-right text-white text-sm">
                                <span className="w-full lg:w-max text-center lg:text-right mb-4 lg:mb-0">Desenvolvido por:</span>
                                
                                <a href="https://douglas-rocha-portfolio.vercel.app/" target="_blank" rel="noopener noreferer">
                                    <img
                                        src={ logo }
                                        alt='Logo da DRF - Doug Rock Front-end'
                                        loading='lazy' 
                                        className='w-full h-auto max-w-14'
                                        width='56'
                                        height='58'
                                    />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;