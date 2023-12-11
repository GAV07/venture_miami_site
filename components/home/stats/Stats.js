import Image from "next/image"
import {useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Dropdown from "./Dropdown";
import Chart from "./Chart";
import {BiSolidQuoteAltLeft} from "react-icons/bi";

export default function Stats(props) {

    return (
        <div className={"w-full m-auto pt-20"}>

            <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-10"}>
                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>

                    <p className={"w-full"}><BiSolidQuoteAltLeft size={50} color={"#3F47FF"}/></p>
                    <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                        {props.content.header.fields.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] leading-8">
                        {props.content.header.fields.subtitle}
                    </p>
                </div>

                <div className={"w-full mx-auto grid grid-cols-1 gap-x-[20px] md:grid-cols-3 pt-20"}>
                    {props.content.stats.map((info, index) => {
                        return (
                            <div key={index} className={"mb-[32px]  md:mr-[32px] w-full text-center"}>
                                <h3 className={"text-[24px] md:text-[28px] mb-[8px] leading-[32px] text-vm-blue font-bold"}>{info.fields.statistic}</h3>
                                <p className={"font-[16px] mb-[8px] leading-[24px]"}>{info.fields.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}
