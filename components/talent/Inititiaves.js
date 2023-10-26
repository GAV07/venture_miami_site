import {AiFillCheckCircle} from 'react-icons/ai'
import * as React from "react";
import {useEffect, useState} from "react";
import {Slider} from "../Slider";

export function Hero(props) {

    const [initiative, setInitiative] = useState(props.content.programs[0]);
    const [initiatives, setInitiatives] = useState(props.content.programs.map((program)=> program));
    const [sliderButtons, setSliderButtons] = useState([]); // these buttons go into the slider

    useEffect(()=>{

        let buttons = initiatives.map((init)=>{

            let componentObj = {
                type: <button key={init.fields.title} className={`text-[14px] md:text-[16px] px-[16px] py-[8px] rounded-full ${initiative === init ? 'bg-[#007afc] text-white' : 'bg-white ring-1 ring-black'} font-base`}
                              onClick={()=>{ setInitiative(init) }}
                >
                    {init.fields.title}
                </button>
            }
            return componentObj;

        })

        setSliderButtons(buttons);

    }, [])
    return (
        <div className={"w-full m-auto pt-16"}>

            <div className={"bg-[#15181b] pt-[140px] pb-[70px] px-[40px]"}>

                {/* CONTENT */}
                <div className={"max-w-[1200px] mx-auto text-center"}>

                    <h1 className="text-[36px] md:text-[36px] font-bold text-[white] mb-[16px]">
                        {props.content.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#9ba2b2] leading-8">
                        {props.content.subtitle}
                    </p>

                    <div className={"w-full min-h-[450px] mt-[56px] flex flex-col space-y-10"}>

                        <div className={""}>

                            {/*<div className={"block md:hidden"}>
                                <Slider items={sliderButtons} styles={"initiatives"} autplay={false}/>
                            </div>*/}
                            {/*<div className={"hidden md:block"}>*/}
                            {/*<div className={"relative w-full mx-auto rounded-[8px] flex justify-center flex-wrap space-x-[10px]"}>*/}
                            <div className={"relative w-full mx-auto rounded-[8px] flex flex-wrap justify-between items-center gap-x-[20px] gap-y-[20px]"}>
                                {
                                    initiatives.map((init)=>{

                                        return (

                                            // <button key={init.fields.title} className={`text-[13px] px-[12px] py-[8px] max-w-max rounded-full ${initiative === init ? 'bg-[#007afc] text-white' : 'text-[#9ba2b2]'}`}
                                            <button key={init.fields.title} className={`font-semibold mx-auto text-[13px] px-4 py-2 max-w-max rounded-full ${initiative === init ? 'bg-[#007afc] text-white' : 'text-black bg-white ring-1 ring-black'}`}
                                                    onClick={()=>{ setInitiative(init) }}
                                            >
                                                {init.fields.title}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div
                            className={"relative w-full mx-auto flex flex-col"}>
                            {

                                <div className={`space-x-0 w-full overflow-hidden flex flex-col-reverse justify-center  items-center lg:flex-row lg:space-x-[70px] lg:justify-between lg:items-center`}>

                                    <div className={`w-full py-4 lg:basis-[480px] lg:space-x-0 md:flex-row md:justify-center md:items-center xs:basis-1/2`}>
                                        <div className={"w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                            <p className={'text-white text-[24px] font-bold text-center'}>
                                                {initiative.fields.title}
                                            </p>
                                            <p className={'text-[#9ba2b2] text-[16px] text-center'}>
                                                {initiative.fields.description}
                                            </p>
                                            {
                                                initiative.fields.calloutTitle && (
                                                    // <p className={'w-full text-center bg-[#eff7ff] text-[#007afc] text-[14px] px-[4px] py-[8px] rounded-[4px]'}>
                                                    <p className={'w-full text-center bg-[#1d2023] text-vm-green text-[14px] px-[4px] py-[8px] rounded-[4px]'}>
                                                        {initiative.fields.calloutTitle}
                                                    </p>
                                                )
                                            }
                                            <ul
                                                role="list"
                                                // className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2"
                                                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7"
                                            >
                                                {initiative.fields.callouts.map((callout, index) => (
                                                    <li key={index} className="flex gap-x-3">
                                                        <AiFillCheckCircle className="text-green-300 h-7 w-5 flex-none" aria-hidden="true" />
                                                        <p className="ml-3 text-sm text-[#9ba2b2] ml-auto mr-auto">{callout.fields.text}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            {

                                                initiative.fields.button !== undefined &&
                                                <div className="rounded-full shadow max-w-max">
                                                    <a
                                                        href={initiative.fields.button.fields.url}
                                                        className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-[#007afc]"
                                                    >
                                                        {initiative.fields.button.fields.text}
                                                    </a>
                                                </div>
                                            }
                                        </div>

                                    </div>

                                    <div
                                        className={`relative lg:basis-[730px] md:basis-1/2 max-h-[530px]
                            min-[1270px]:h-[530px] 
                                min-[1207px]:h-[493px] 
                            min-[1144px]:h-[457px] 
                                min-[1081px]:h-[420px] 
                            min-[1019px]:h-[384px] 
                                min-[952px]:h-[347px] 
                            min-[893px]:h-[311px] 
                                min-[830px]:h-[274px] 
                            min-[768px]:h-[235px]
                            
                            min-[767px]:h-[515px]
                                min-[639px]:h-[460px]
                            min-[510px]:h-[405px]
                                min-[381px]:h-[370px]
                            min-[288px]:h-[345px]                         
                            `}
                                    >                                                {/*<img
                                src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio).webp"
                                // src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/651e8557b730b61ff947f814_homepage__search-p-1080.png"
                                // loading="lazy" width="730"
                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 42vw, 53vw"
                                alt=""
                                // srcSet="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio)-p-500.webp 500w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio)-p-800.webp 800w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio)-p-1080.webp 1080w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio).webp 1460w"
                            />*/}
                                        <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl">
                                            <source src="/videos/video.mp4" type="video/mp4"
                                                // sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 42vw, 53vw"
                                            />
                                        </video>
                                    </div>

                                </div>

                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}