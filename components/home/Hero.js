import {useEffect, useState} from "react";
import Link from "next/link";
import {Link as ScrollLink} from "react-scroll";
import {Tooltip} from "react-tooltip";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {BiSolidQuoteAltLeft} from 'react-icons/bi'
import WistiaPlayer from "./Video";


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


    const buttonsOptions = [

        {
            color: "text-black",
            background: "bg-white"
        },
        {
            color: "text-white",
            background: "bg-black"

        }
    ];


    return (

            <div className={"relative right-0 md:p-[100px] p-[50px] flex justify-between items-center z-[2] w-full min-h-screen ease-in duration-300"}>

                {/* <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.8]">
                    <source src={props.video[0].fields.Media[0].url} type="video/mp4"/>
                </video>

                {/*<iframe src="https://drive.google.com/file/d/1dZ-FuIsN5quta6TWLVJWnJnhIXEAWKRI/preview" width="640" height="480" allow="autoplay"></iframe>*/}


                <WistiaPlayer
                    wrapper="wistia_wrapper"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#03a9f4] mix-blend-overlay">
                </div>

                <div className={"absolute left-0 bottom-10 z-[10]"}>
                    {/* <h2 className="text-white lg:text-[5em] md:text-[3em] sm:text-[2em] text-[2em] font-[800] leading-[1em] uppercase">
                        {props.content.title}
                    </h2> */}
                    {/* <p className="text-white lg:text-[1.1em] my-[20px] mx-[0px] font-[400] max-w-[700px]">
                        {props.content.subtitle}
                    </p> */}
                    <div className={"w-max flex md:flex-row flex-col ml-5 gap-x-2 gap-y-2 mt-[10px]"}>
                        {
                            props.content.buttons.map((button, index)=>{

                                return <a key={index} href={button.fields.url} className={`max-w-max rounded-full text-[14px] py-[10px] px-[30px] ${buttonsOptions[index].background} ${buttonsOptions[index].color} uppercase`}>{button.fields.text}</a>

                            })


                        }
                  </div>
                </div>

            </div>
        // </div>

    );
}
