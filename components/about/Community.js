import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Slider} from "../Slider";


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

    }, [])

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>

                {/* CONTENT */}
                        <div className={" mx-auto w-[80%] m-auto text-center"}>
                            <h1 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">
                                {props.content.title}
                            </h1>
                            <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                                {props.content.subtitle}
                            </p>
                        </div>

            </div>

            {/* IMAGES */}
            <div className={"rounded-xl mt-16"}>
                <Slider items={sliderItems} styles={sliderStyles} buttonPosition={'bottom'}/>
            </div>
        </div>


    )
}