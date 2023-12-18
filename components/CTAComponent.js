import {BsArrowRight} from "react-icons/bs"
import React, {useEffect, useState} from "react";


export default function CTAComponent({props, buttons, backgroundColor, textColor}) {
    console.log(props.content.image.fields.file.url);

    const [buttonStyles, setButtonStyles] = useState(buttons);

    return (


        <div className="w-full pt-20">

            <div className={'w-[95%] mx-auto'}>

                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>

                    <div className={'flex flex-col gap-y-10 md:flex-row md:gap-y-0'}>
                        {/* content */}
                        <div className={'lg:w-1/2 md:w-2/3 h-full aspect-video'}>
                            <div className={'w-[80%]'}>
                                <p className={`mt-2 text-[56px] font-bold tracking-tight text-${textColor}`}>{props.content.title}</p>
                                <p className="mt-6 text-base leading-7 text-black">
                                    {props.content.subtitle}
                                </p>
                                <div className="mt-8 flex justify-start items-center gap-x-3">
                                    {
                                        props.content.buttons.map((button, index) => {

                                            return (
                                                <button key={index}
                                                        className={`rounded-md px-3.5 py-2.5 text-sm ${buttonStyles[index].text} ${buttonStyles[index].background} ${buttonStyles[index].ring}  text-sm font-semibold shadow-sm max-w-max`}>
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

                        {/* image */}
                        <div className={'mt-0 md:mt-4 relative lg:w-1/2 md:w-1/3 aspect-video'}>
                            <img
                                className="h-full w-full object-cover"
                                // src={props.content.image.fields.file.url}
                                src={"https://images.openai.com/blob/f4d87b7b-fd37-4b6c-8bff-5cc6b8073c7e/stangel-2022-0470.jpg?trim=0,94,214,1079&width=2000"}
                                alt=""
                            />
                            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-${backgroundColor} to-vm-transparent opacity-[75%]`}></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        /*        <div className="relative w-full pt-20">

                    <div className={'relative w-full mx-auto max-h-max py-0 sm:py-10 sm:aspect-[0] aspect-[1/1]'}>
                        <img
                            className="absolute top-0 left-0 h-full w-full object-cover"
                            // src={props.content.image.fields.file.url}
                            src={"https://images.openai.com/blob/f4d87b7b-fd37-4b6c-8bff-5cc6b8073c7e/stangel-2022-0470.jpg?trim=0,94,214,1079&width=2000"}
                            alt=""
                        />

                        <div className={'relative z-[10] w-[95%] mx-auto'}>
                                    <p className="mt-2 text-[56px] font-bold tracking-tight text-white">{props.content.title}</p>
                                    <p className="mt-6 text-base leading-7 text-white">
                                        {props.content.subtitle}
                                    </p>
                                    <div className="mt-8 flex justify-start items-center gap-x-3">
                                        {
                                            props.content.buttons.map((button, index) => {

                                                return (
                                                    <button key={index}
                                                            className={`rounded-md px-3.5 py-2.5 text-sm ${buttonStyles[index].text} ${buttonStyles[index].background} ${buttonStyles[index].ring}  text-sm font-semibold shadow-sm max-w-max`}>
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

                        <div className={'absolute top-0 left-0 w-full h-full bg-gradient-to-b from-vm-blue to-vm-transparent opacity-[75%]'}></div>

                    </div>
                </div>*/


    )
}
