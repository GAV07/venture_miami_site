import {Events} from "./Events";
import {Socials} from "./Socials";
import React, {useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {Slider} from "../../Slider";
import Swipe from "../../Swipe";
import {BsArrowRightShort} from 'react-icons/bs'

export default function Info(props) {
    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[90%] m-auto xl:w-[85%]"}>

                <div className={"w-full m-auto flex flex-col"}>

                    {
                        props.content.contentBlock.map((block, index)=>{

                            return(
                                <div
                                    key={index}
                                    className={`mb-[45px] md:mb-[140px] gap-x-0 w-full overflow-hidden flex flex-col-reverse justify-center items-center md:gap-x-[70px] md:justify-between md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                                    <div
                                        className={'w-full py-4 lg:basis-[480px] lg:gap-x-0 md:flex-row md:justify-center md:items-center xs:basis-1/2'}>
                                        <div
                                            className={"w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                            <p className={'text-darkGray text-[32px] font-bold'}>{block.fields.title}</p>
                                            <p className={'text-lightGray text-[15px]'}>{block.fields.subtitle}</p>
                                            <div className={"flex justify-start items-center w-full gap-x-[30px]"}>
                                                <a href={"/business"} className={"text-[14px] text-vm-blue font-[500] border-solid border-[1.5px] border-vm-blue px-[10px] py-[4px] rounded-full flex items-center gap-x-[7px]"}><span>Get Started</span> <BsArrowRightShort color={"#3F47FF"} size={20}/></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`w-full relative lg:basis-[730px] md:basis-1/2 max-h-[530px]
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
                                            src={block.fields.images[0].fields.file.url}
                                            loading="lazy" width={"100%"}
                                            alt=""
                                            className={"rounded-[1.5rem] h-full object-cover w-full"}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}