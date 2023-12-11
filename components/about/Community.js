import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Slider} from "../Slider";
import CarouselComponent from "../CarouselComponent";


export default function Community(props) {

    const [sliderItems, setSliderItems] = useState([]);
    const [sliderStyles, setSliderStyles] = useState("community"); // this allows the styles in index.css to be applied

    useEffect(()=>{

        let items = props.content.images.map((item, index)=>{

            let componentObj = {
                type: (
                    <img
                        src={item.fields.file.url}
                        alt=""
                        className="w-full h-full object-cover rounded-[24px]"
                    />
                )
            }

            return componentObj;
        })

        setSliderItems(items);

    }, []);

    const [carouselComponents, setCarouselComponents] = useState([]);

    useEffect(()=>{


        let components = props.content.images.map((item)=>{

            return (
                <img
                    src={item.fields.file.url}
                    className={'w-full h-full object-cover'}
                    alt={item.fields.file.url}
                />
            );
        })

        setCarouselComponents(components);

    }, [])

    return (

        <div className={"w-full m-auto pt-20"}>

            <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-10"}>
                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>
                    <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                        {props.content.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] leading-8">
                        {props.content.subtitle}
                    </p>
                </div>

                <div className={"w-full"}>
                    <CarouselComponent components={carouselComponents} styles={'xl:h-[700px] lg:h-[600px] md:h-[500px] h-[400px]'}/>
                </div>
            </div>


            {/* IMAGES */}
            {/*<div className={"rounded-xl mt-16"}>
                <Slider items={sliderItems} styles={sliderStyles} buttonPosition={'bottom'}/>
            </div>*/}

            {/*<div className={"rounded-xl mt-16"}>
                <CarouselComponent/>
            </div>*/}

        </div>


    )
}