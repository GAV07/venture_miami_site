import {BsArrowRight} from "react-icons/bs"
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CTA(props) {

    useEffect(() => {

        Aos.init({duration: 200});
    }, []);

    const textColor = [
        "text-white",
        "text-black"
    ];
    const bgColor = [
        "bg-vm-blue",
        "bg-white"
    ]
    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[90%] m-auto xl:w-[85%]"}>

                <div className={`rounded-[8px] relative right-0 flex justify-between items-center z-[2] w-full ease-in duration-300`}>

                    <img
                        src={'https://placekitten.com/1400'}
                        className={`rounded-[8px] absolute top-0 left-0 w-full object-cover
                   max-h-full h-full

                `}
                    />


                    {/*<div className="absolute top-0 left-0 w-full h-full">
                        <div className="w-full h-full bg-black bg-opacity-40"></div>
                    </div>*/}
                    <div className="rounded-[8px] absolute top-0 left-0 w-full h-full">
                        <div className="rounded-[8px] w-full h-full bg-gradient-to-b from-vm-blue to-red-200 bg-opacity-40"></div>
                    </div>

                    <div className="relative z-[1] font-bold flex flex-col justify-center items-center ml-auto mr-auto p-[80px]">
                        <h2 className="text-white text-[36px] text-center">
                            {props.content.title}
                        </h2>
                        <p className="text-white text-[18px] text-center">
                            {props.content.subtitle}
                        </p>
                        <div
                            className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start flex flex-col space-y-5 sm:flex-row sm:justify-stretch flex-1 sm:space-y-0">

                            {
                                props.content.buttons.map((button, index) => {

                                    return (
                                        <button key={index}
                                                className={`rounded-full ${textColor[index]} ${bgColor[index]} px-4 py-4 text-sm font-semibold shadow-sm hover:${bgColor[index]}/100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}>
                                            <a href={button.fields.url}
                                               className={"flex justify-between items-center w-full gap-x-10"}>
                                                <p>{button.fields.text}</p>
                                                <BsArrowRight size={20} fontWeight={20}/>
                                            </a>
                                        </button>

                                    );
                                })
                            }

                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}
