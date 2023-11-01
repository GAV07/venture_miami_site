import {AiFillCheckCircle} from 'react-icons/ai'
import * as React from "react";
import {useEffect, useState} from "react";
import {Slider} from "../Slider";

export default function Initiatives(props) {


    console.log(props.content)

    const [initiative, setInitiative] = useState(props.content[0]); // gets the first initiative
    const [initiatives, setInitiatives] = useState(props.content.map((program)=> program)); // stores all the initiatives
    const [sliderButtons, setSliderButtons] = useState([]); // these buttons go into the slider

    useEffect(()=>{

        let buttons = initiatives.map((init)=>{

            let componentObj = {
                type: <button key={init.title} className={`text-[14px] md:text-[16px] px-[16px] py-[8px] rounded-full ${initiative === init ? 'bg-[#007afc] text-white' : 'bg-white ring-1 ring-black'} font-base`}
                              onClick={()=>{ setInitiative(init) }}
                >
                    {init.title}
                </button>
            }
            return componentObj;

        })

        setSliderButtons(buttons);

    }, [])
    return (
        <div className={"w-full m-auto"}>

            <div className={"bg-white pb-[70px] px-[40px]"}>

                {/* CONTENT */}
                <div className={"max-w-[1200px] mx-auto"}>

                    <div className={"w-full min-h-[450px] mt-[56px] flex flex-col space-y-10"}>

                        <div className={""}>

                            {/*<div className={"block md:hidden"}>
                                <Slider items={sliderButtons} styles={"initiatives"} autplay={false}/>
                            </div>*/}
                            {/*<div className={"hidden md:block"}>*/}
                            {/*<div className={"relative w-full mx-auto rounded-[8px] flex justify-center flex-wrap space-x-[10px]"}>*/}
                            <div className={"relative w-[80%] mx-auto rounded-[8px] flex flex-wrap items-center gap-x-[3px] gap-y-[20px]"}>
                                {
                                    initiatives.map((init)=>{

                                        return (

                                            // <button key={init.fields.title} className={`text-[13px] px-[12px] py-[8px] max-w-max rounded-full ${initiative === init ? 'bg-[#007afc] text-white' : 'text-[#9ba2b2]'}`}
                                            <button key={init.title} className={`font-semibold mx-auto text-[13px] px-4 py-2 max-w-max rounded-full ${initiative === init ? 'bg-[#007afc] text-white' : 'text-black bg-white ring-1 ring-black'}`}
                                                    onClick={()=>{ setInitiative(init) }}
                                            >
                                                {init.title}
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
                                            <p className={'text-black text-[24px] font-bold text-center'}>
                                                {initiative.title}
                                            </p>
                                            {/* <p className={'text-black text-[16px] text-center'}>
                                                {initiative.description}
                                            </p> */}
                                            {
                                                initiative.calloutTitle && (
                                                    // <p className={'w-full text-center bg-[#eff7ff] text-[#007afc] text-[14px] px-[4px] py-[8px] rounded-[4px]'}>
                                                    <p className={'w-full text-vm-blue text-[14px]'}>
                                                        {initiative.calloutTitle}
                                                    </p>
                                                )
                                            }
                                            <ul
                                                role="list"
                                                // className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2"
                                                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7"
                                            >
                                                {initiative.callouts.map((callout, index) => (
                                                    <li key={index} className="flex gap-x-3">
                                                        <AiFillCheckCircle className="text-green-300 h-7 w-5 flex-none" aria-hidden="true" />
                                                        <p className="text-sm text-[#9ba2b2] ">{callout.fields.text}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            {

                                                initiative.button !== undefined &&
                                                <div className="rounded-full shadow max-w-max">
                                                    <a
                                                        href={initiative.button.fields.url}
                                                        className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-[#007afc]"
                                                    >
                                                        {initiative.button.fields.text}
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
                                    >                                                
                                        <img
                                            className="w-full h-full object-cover rounded-xl"
                                            src={initiative.media.fields.file.url}
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 42vw, 53vw"
                                            alt=""
                                        />

                                        {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl">
                                            <source src="/videos/VM.mp4" type="video/mp4"
                                                // sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 42vw, 53vw"
                                            />
                                        </video> */}
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