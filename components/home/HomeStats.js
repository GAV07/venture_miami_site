import Image from "next/image"
import {useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Dropdown from "./charts/Dropdown";
import Chart from "./charts/Chart";
import {BiSolidQuoteAltLeft} from "react-icons/bi";
import Stats from "../Stats";
import Section from "../Section";

export default function HomeStats(props) {

    return (
        <Section>
            <Stats title={props.content.header.fields.title} subtitle={props.content.header.fields.subtitle}
                   stats={props.content.stats}/>

        </Section>
    )

}
