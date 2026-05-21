'use client'
import Image from 'next/image';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    const slides = [
        {
            title: "IdeaVault - Startup Idea Sharing Platform",
            image: "/images/banner1.webp",
            description: "A collaborative platform where innovators share startup ideas, receive community feedback, and refine concepts through meaningful discussions.",
            btnTitle: "Share Ideas",
            btnLink: "/add-idea"
        },
        {
            title: "Where Innovation Meets Community",
            image: "/images/banner2.webp",
            description: "Discover trending startup ideas, connect with creative thinkers, and collaborate to shape concepts into possibilities.",
            btnTitle: "Explore Ideas",
            btnLink: "/ideas"
        },
        {
            title: "Turn Ideas Into Impact",
            image: "/images/banner3.avif",
            description: "Share innovative startup concepts, gather valuable community feedback, and refine ideas through meaningful discussions.",
            btnTitle: "Get Started",
            btnLink: "/add-idea"
        }
    ]
    return (
        <div className="relative overflow-hidden  h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center  shadow-2xl">
            <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination, Autoplay]} spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper">
                {
                    slides.map((slide, ind) => <SwiperSlide key={ind} >
                        <div className='absolute inset-0 bg-black/40 z-10'></div>
                        <div className='absolute inset-0 w-full h-full z-0'>
                            <Image src={slide.image} alt={slide.title} fill priority={ind === 0} className='object-cover object-center' />
                        </div>
                        <div className="absolute inset-0 z-20 flex justify-center items-center">
                            <div className="max-w-4xl px-8 md:px-16 lg:px-24">
                                <span className="inline-block px-4 py-1 mb-4 text-sm font-medium tracking-wider uppercase bg-white/10 text-blue-200 rounded-full backdrop-blur-sm border border-white/20">
                                    Startup Innovation Hub
                                </span>

                                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                                    {slide.title}
                                </h2>

                                <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-8">
                                    {slide.description}
                                </p>

                                {slide.btnTitle && (
                                    <button className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:scale-105">
                                        {slide.btnTitle}
                                    </button>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Banner;