
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

function PokemonDetailSwiper({pokemon, front, back, nextArrow, prevArrow}) {
    return (
        <>
            {
                pokemon.sprites != null > 0 && (
                    <div className="relative">
                        <button className={`${prevArrow} m-0! bg-transparent text-gray-950! absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 fill-transparent! size-8!"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
                        </button>

                        <button className={`${nextArrow} m-0! bg-transparent text-gray-950! absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fill-transparent! size-8!"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                        </button>

                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                nextEl: `.${nextArrow}`,
                                prevEl: `.${prevArrow}`,
                                clickable: true
                            }}
                            loop={true}
                            pagination={{ clickable: true }}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                            }}
                            className="max-w-36"
                        >
                            <SwiperSlide>
                                <img
                                    src={ front }
                                    alt='Imagem da pokébola'
                                    loading="lazy" 
                                    className='w-full h-auto mx-auto max-w-24'
                                    width='96'
                                    height='96'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={ back }
                                    alt='Imagem da pokébola'
                                    loading="lazy" 
                                    className='w-full h-auto mx-auto max-w-24'
                                    width='96'
                                    height='96'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                )
            }
        </>
    )
}

export default PokemonDetailSwiper;