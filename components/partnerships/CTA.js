import {Slider} from "../Slider";
import React, {useEffect, useState} from "react";

export default function CTA() {

    const images = [

        <img
            src={'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
            alt=""
            className="w-[95%] sm:w-[80%] sm:px-0 m-auto h-full object-cover rounded-[24px]"
        />,
        <img
            src={'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
            alt=""
            className="w-[95%] sm:w-[80%] sm:px-0 m-auto h-full object-cover rounded-[24px]"
        />,
        <img
            src={'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
            alt=""
            className="w-[95%] sm:w-[80%] sm:px-0 m-auto h-full object-cover rounded-[24px]"
        />,
        <img
            src={'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
            alt=""
            className="w-[95%] sm:w-[80%] sm:px-0 m-auto h-full object-cover rounded-[24px]"
        />

    ]

    const [sliderItems, setSliderItems] = useState([]);
    const [sliderStyles, setSliderStyles] = useState("max-h-[615px]"); // this allows the styles in index.css to be applied

    useEffect(()=>{

        let items = images.map((item, index)=>{

            let componentObj = {
                type: item
            }

            return componentObj;
        })

        setSliderItems(items);

    })

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>
                <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                    <h1 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">
                        Interested in partnering with us?
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue mb-[24px]">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                    </p>
                    <div className={"flex justify-around items-center w-full"}>
                        <a href={"#"} className={"cursor-pointer text-[14px] md:text-[16px] px-[20px] py-[12px] rounded-full text-white bg-[#007afc] font-semibold"}>Start a partnership</a>
                    </div>
                </div>

                <div className={"w-[95%] h-full mx-auto mt-24 flex flex-col space-y-[20px]"}>

                    <div className={"rounded-xl"}>
                        <Slider items={sliderItems} styles={sliderStyles} buttonPosition={'side'}/>
                    </div>
                </div>



            </div>

        </div>
    )

}