import pokeball from '../../assets/pokeball.png';

function Hero (props) {
    return(
        <>
            <div className='min-h-140 bg-linear-to-r from-red-500 via-thunderbird-800 to-thunderbird-800 flex flex-col justify-center items-center relative px-4'>
                <h1 className='block leading-none font-bold text-white text-center text-3xl sm:text-6xl lg:text-7xl'>{ props.title }</h1>

                <h2 className='block mt-3 sm:mt-4 font-medium text-white text-center text-lg sm:text-xl'>{ props.text }</h2>

                <img
                    src={ pokeball }
                    alt='Imagem da pokébola'
                    fetchPriority='high' 
                    className='w-full h-auto max-w-75 absolute left-1/2 -translate-1/2 top-full animate-slide-in'
                    width='300'
                    height='306'
                />
            </div>
        </>
    )
}

export default Hero;