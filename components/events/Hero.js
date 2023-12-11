import React from "react";
import HeroComponent from "../HeroComponent";

export default function Hero(props){

    return (

/*        <div className={`relative right-0 flex justify-between items-center z-[2] w-full ease-in duration-300
            
            lg:min-h-[70vh]
            min-h-[58vh]
        
        `}>

            <img
                src={props.content.backgroundImage.fields.file.url}
                className={`absolute top-0 left-0 w-full object-cover
                   max-h-full h-full

                `}
            />

            <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full h-full bg-black bg-opacity-40"></div>
            </div>

            <div className={"relative z-[10] w-full mt-auto p-[50px]"}>
                <h2 className="text-white lg:text-[5em] md:text-[3em] text-[2.2em] font-[800] leading-[1em] uppercase">
                    {props.content.title}
                </h2>
            </div>

        </div>*/
        <HeroComponent
            title={props.content.title}
            subtitle={props.content.subtitle}
            imageURL={props.content.backgroundImage.fields.file.url}
        />
    )
}