import {BsArrowRight} from "react-icons/bs"
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function CTA(props) {

    useEffect(() => {

        Aos.init({duration: 200});
    }, []);

    const textColor = [
        "text-white",
        "text-black"
    ];
    const bgColor = [
        "bg-[#007afc]",
        "bg-white"
    ]
    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>
                <div className={"m-auto bg-[#161A1D] rounded-[16px]"}>

                    <div className="font-bold flex flex-col justify-center items-center ml-auto mr-auto p-[80px]">
                        <h2 className="text-white text-[36px] text-center">
                            {props.content.title}
                        </h2>
                        <p className="text-[#9CA6B6] text-[18px] text-center">
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
