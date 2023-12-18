import {BsArrowRight} from "react-icons/bs"
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CTA(props) {
    console.log(props.content.image.fields.file.url);
    useEffect(() => {

        Aos.init({duration: 200});
    }, []);

    const buttonStyles = [

        {
            text: 'text-white',
            background: 'bg-vm-blue',
            ring: ''
        },
        {
            text: 'text-black',
            background: 'bg-white',
            ring: 'ring-1 ring-black'
        }
    ]
    return (

        /*        <div className={"w-full m-auto pt-16"}>

                    <div className={"w-[90%] m-auto xl:w-[85%]"}>

                        <div className={`rounded-[8px] relative right-0 flex justify-between items-center z-[2] w-full ease-in duration-300`}>

                            <img
                                src={props.content.image.fields.file.url}
                                className={`rounded-[8px] absolute top-0 left-0 w-full object-cover max-h-full h-full`}
                            />


                            {/!*<div className="absolute top-0 left-0 w-full h-full">
                                <div className="w-full h-full bg-black bg-opacity-40"></div>
                            </div>*!/}
                            <div className="rounded-[8px] absolute top-0 left-0 w-full h-full">
                                <div className="rounded-[8px] w-full h-full bg-gradient-to-b from-vm-blue to-transparent bg-opacity-40"></div>
                            </div>

                            <div className="relative z-[1] font-bold flex flex-col justify-center items-center ml-auto mr-auto md:p-[80px] p-6">
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
                </div>*/





        <div className="w-full pt-20">

            <div className={'w-[95%] mx-auto'}>

                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>

                    <div className={'flex flex-col gap-y-10 md:flex-row md:gap-y-0'}>
                        {/* content */}
                        <div className={'lg:w-1/2 md:w-2/3 h-full aspect-video'}>
                            <div className={'w-[80%]'}>
                                <p className="mt-2 text-[56px] font-bold tracking-tight text-vm-blue">{props.content.title}</p>
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
                            <div className={'absolute top-0 left-0 w-full h-full bg-gradient-to-t from-vm-blue to-vm-transparent opacity-[75%]'}></div>
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
