import Image from "next/image"
import {useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Dropdown from "./Dropdown";
import Chart from "./Chart";
import {BiSolidQuoteAltLeft} from "react-icons/bi";
import StatsComponent from "../../StatsComponent";
import Section from "../../Section";

export default function Stats(props) {

    return (
        <Section>
            <StatsComponent title={props.content.header.fields.title} subtitle={props.content.header.fields.subtitle}
                            stats={props.content.stats}/>

        </Section>
    )

}
