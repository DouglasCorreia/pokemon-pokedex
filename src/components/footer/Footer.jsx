import logo from '../../assets/drf-logo-white.png';

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

                        <p className="flex items-center leading-none text-center sm:text-right text-white text-sm">
                            Desenvolvido por:
                            
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
            </footer>
        </>
    )
}

export default Footer;