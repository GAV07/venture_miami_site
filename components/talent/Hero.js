import {AiFillCheckCircle} from 'react-icons/ai'
import * as React from "react";
import {useEffect, useState} from "react";
import {Slider} from "../Slider";

export function Hero(props) {

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[90%] m-auto xl:w-[85%]"}>
                <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                    <h1 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">
                        {props.content.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                        {props.content.subtitle}
                    </p>
                </div>
            </div>
        </div>

    )
}