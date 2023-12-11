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


        <div className={"w-full m-auto pt-20"}>             
        <div className="relative h-[700px] lg:h-[500px] w-full">
            <img className="h-full w-full object-cover"
                 src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                 {/*src={props.content.image.fields.file.url}/>*/}

            <div
                className="absolute bottom-0 h-1/2 w-full lg:top-0 lg:h-full lg:w-1/2 flex flex-col items-end justify-center">


                <div
                    // className="p-[24px] bg-vm-blue w-full h-full text-black mix-blend-screen">
                    className="p-[24px] w-full h-full text-vm-blue bg-white">
                    <p className="W-1/2 text-left text-[40px] font-extrabold">{props.content.title}</p>

                </div>

                <div className={'p-[24px] h-full w-full bg-white'} >

                    <div className={'text-black'}>
                        <p className="text-[16px] text-left">
                            {props.content.subtitle}
                        </p>
                    </div>
                    <div
                        className="mt-10 flex items-center justify-start gap-x-6">

                        {
                            props.content.buttons.map((button, index) => {

                                return (
                                    <button key={index}
                                            className={`rounded-full ${buttonStyles[index].text} ${buttonStyles[index].background} ${buttonStyles[index].ring} px-4 py-2 text-sm font-semibold shadow-sm`}>
                                        <a href={button.fields.url}
                                           className={"flex justify-between items-center w-full gap-x-5"}>
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
           {/* <div
                className="absolute top-0 flex h-full w-1/2 items-end justify-center bg-white text-black mix-blend-lighten">
                <p className="W-1/2 p-[10px] text-left text-2xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">{props.content.title}</p>

            </div>*/}

        </div>
        </div>
    )
}
