import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Slider} from "../Slider";


export default function Community() {

    const images = [

        <img
            src={'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'}
            alt=""
            className="w-full h-full object-cover rounded-[24px]"
        />,
        <img
            src={'https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60'}
            alt=""
            className="w-full h-full object-cover rounded-[24px]"
        />,
        <img
            src={'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60'}
            alt=""
            className="w-full h-full object-cover rounded-[24px]"
        />,
        <img
            src={'https://images.unsplash.com/photo-1565813086292-604790c8a97b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60'}
            alt=""
            className="w-full h-full object-cover rounded-[24px]"
        />

    ]

    const [sliderItems, setSliderItems] = useState([]);
    const [sliderStyles, setSliderStyles] = useState("community"); // this allows the styles in index.css to be applied

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

                {/* CONTENT */}
                        <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                            <h1 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">
                                Our Community
                            </h1>
                            <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                                Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta
                                rerum quidem
                                minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.
                            </p>
                        </div>

            </div>

            {/* IMAGES */}
            <div className={"rounded-xl h-[800px] mt-16"}>
                <Slider items={sliderItems} styles={sliderStyles} buttonPosition={'bottom'}/>
            </div>
        </div>


    )
}