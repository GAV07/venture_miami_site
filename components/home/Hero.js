import {useEffect, useState} from "react";
import Link from "next/link";
import {Link as ScrollLink} from "react-scroll";
import {Tooltip} from "react-tooltip";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {BiSolidQuoteAltLeft} from 'react-icons/bi'

export default function Hero(props) {

    const [heroText, setHeroText] = useState("Creating Opportunities for a Resilient Economy.");
    const [showCursor, setShowCursor] = useState(true);

    const removeCursor = ()=>{

        setShowCursor(false);
    }

    const [text] = useTypewriter({

        words: [heroText],
        loop: 1,
        delaySpeed: 150,
        onLoopDone: removeCursor
    })



    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>
                <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                    <h1 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">
                        Creating Opportunities for a Resilient Economy
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue mb-[24px]">
                        We’re building the platform to change the way people and businesses navigate miami's tech Ecosystem.
                    </p>
                    <div className={"flex justify-around items-center w-full"}>
                        <a href={"/resources"} className={"cursor-pointer text-[14px] md:text-[16px] px-[20px] py-[12px] rounded-full text-white bg-[#007afc] font-semibold"}>Explore our resources</a>
                        <a className={"cursor-pointer text-[14px] md:text-[16px] px-[20px] py-[12px] rounded-full text-white bg-[#007afc] font-semibold"}>Join our database</a>
                    </div>
                </div>

                <div className={"mt-24 flex flex-col space-y-[20px]"}>
                    <div className={"rounded-xl"}>
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl">
                            <source src="/videos/video.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>



            </div>

        </div>

/*        <div className={"w-screen h-screen"}>

            <div className={"absolute z-[1] top-0 left-0 w-screen h-screen"}>
                <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl">
                    <source src="/videos/video.mp4" type="video/mp4"/>
                </video>
                <div className="absolute top-0 left-0 w-full h-full z-20">
                    <div className="bg-gradient-to-b from-transparent via-transparent to-white w-full h-full"></div>
                </div>
            </div>

            <div className={"relative z-[2] h-[88vh] w-[60%] mx-auto max-h-[850px] min-h-[700px] flex flex-col items-center pt-[100px] text-center"}>
                <h1 className="mb-[24px] text-[80px] font-bold text-white text-center">
                    Creating Opportunities for a Resilient Economy
                </h1>
                <p className="max-w-[640px] text-[#9CA6B6] text-[20px] font-medium relative text-center mx-auto relative">
                    We’re building the platform to change the way people and businesses navigate miami's tech Ecosystem.
                </p>
                <div className={"flex justify-around items-center mt-[32px] mx-auto space-x-10"}>
                    <a href={"/resources"} className={"cursor-pointer text-[14px] md:text-[16px] px-[20px] py-[12px] rounded-full text-white bg-[#007afc] font-semibold"}>Explore our resources</a>
                    <a className={"cursor-pointer text-[14px] md:text-[16px] px-[20px] py-[12px] rounded-full text-white bg-transparent font-semibold border border-[#616d72]"}>Join our database</a>
                </div>
            </div>

        </div>*/


    );
}
