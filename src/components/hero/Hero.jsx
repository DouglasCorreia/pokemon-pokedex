import pokeball from '../../assets/pokeball.png';

function Hero (props) {
    return(
        <>
            <div className='min-h-[560px] bg-gradient-to-r from-red-500 via-thunderbird-800 to-thunderbird-800 flex flex-col justify-center items-center relative'>
                <h1 className='block leading-none font-bold text-white text-7xl'>{ props.title }</h1>

                <p className='block mt-4 font-medium text-white text-xl'>{ props.text }</p>

                <img
                    src={ pokeball }
                    alt='Imagem da pokébola'
                    fetchPriority='high' 
                    className='w-full h-auto max-w-[300px] absolute left-1/2 -translate-1/2 top-full animate-slide-in'
                    width='300'
                    height='306'
                />
            </div>
        </>
    )
}

export default Hero;