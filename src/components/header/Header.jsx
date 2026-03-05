import logo from '../../assets/logo-pokemon.png';

function Header () {
    return(
        <>
            <header className='absolute top-0 left-0 z-10 w-full py-4'>
                <div className='container'>
                    <div className='header-logo w-full'>
                        <img
                            src={ logo }
                            alt='Logo do pokémon'
                            fetchPriority='high'
                            className='w-full h-auto max-w-52 block mx-auto'
                            width='208'
                            height='76'
                         />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;