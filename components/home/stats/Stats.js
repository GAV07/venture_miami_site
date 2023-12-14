import Image from "next/image"
import {useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Dropdown from "./Dropdown";
import Chart from "./Chart";
import {BiSolidQuoteAltLeft} from "react-icons/bi";
import StatsComponent from "../../StatsComponent";

export default function Stats(props) {

    return (
        <div className={"w-full m-auto pt-20"}>

            <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-10"}>
                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>

                        <StatsComponent title={props.content.header.fields.title} subtitle={props.content.header.fields.subtitle} stats={props.content.stats} />

                </div>
            </div>
        </div>
    )

}
