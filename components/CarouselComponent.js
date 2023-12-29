import React, {useEffect, useState} from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';

export default function CarouselComponent({
                                              elements,
                                              slidesPerView=1,
                                              spaceBetween=0,
                                              loop=false,
                                              autoplay=false,
                                              pagination=false,
                                              navigation=false,
                                              freeMode=false,
                                              breakpoints={},
                                              centeredSlides=false
                                          }) {

    const modules = [Navigation];

    const addModules = ()=>{

        if( pagination ){ modules.push(Pagination) }
        if( autoplay ){ modules.push(Autoplay) }
        if( freeMode ){ modules.push(FreeMode) }

    }
    addModules();

    return (

        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            loop={loop}
            centeredSlides={centeredSlides}
            freeMode={freeMode}
            pagination={{
                dynamicBullets: true,
                clickable: true
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={navigation}
            modules={modules}
            breakpoints={breakpoints

                /*{
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50
                },
            }*/}
            className="mySwiper"
        >

            {
                elements.map((element, index)=>{
                    return <SwiperSlide key={index}>{element}</SwiperSlide>
                })
            }
        </Swiper>
    );
}
