import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Slider} from "../Slider";
import Carousel from "../Carousel";
import Section from "../Section";


export default function Community(props) {

    const [sliderItems, setSliderItems] = useState([]);
    const [sliderStyles, setSliderStyles] = useState("community"); // this allows the styles in index.css to be applied

    useEffect(() => {

        let items = props.content.images.map((item, index) => {

            return (
                <img
                    key={index}
                    src={item.fields.file.url}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                />
            );
        })

        setSliderItems(items);

    }, []);

    const [carouselComponents, setCarouselComponents] = useState([]);

    useEffect(() => {


        let components = props.content.images.map((item, index) => {

            return (
                <img
                    key={index}
                    src={item.fields.file.url}
                    className={'w-full h-full object-cover rounded-md'}
                    alt={item.fields.file.url}
                />
            );
        })

        setCarouselComponents(components);

    }, [])

    return (

        <Section>
                    <div className={'w-full'}>
                        <h1 className="text-[36px] md:text-[56px] font-light mb-3 leading-none">
                            {props.content.title}
                        </h1>
                        <p className="text-[16px] md:text-[20px] leading-8">
                            {props.content.subtitle}
                        </p>
                    </div>

                    <div className={"w-full"}>
                        <Carousel elements={sliderItems}
                                  spaceBetween={10}
                                  slidesPerView={1}
                                  loop={true}
                                  autoplay={true}
                                  pagination={true}
                                  freeMode={true}
                                  breakpoints={{
                                               768: {
                                                   slidesPerView: 2,
                                                   spaceBetween: 10,
                                               },
                                               1024: {
                                                   slidesPerView: 3,
                                                   spaceBetween: 10,
                                               }
                                           }}/>
                    </div>

        </Section>


    )
}