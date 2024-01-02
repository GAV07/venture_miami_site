import {Events} from "./Events";
import {Socials} from "./Socials";
import React, {useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {Slider} from "../../Slider";
import {BsArrowRightShort} from 'react-icons/bs'
import {BiSolidQuoteAltLeft} from "react-icons/bi";
import Section from "../../Section";
import ContentBlocks from "../../ContentBlocks";

export default function Info(props) {
    return (

        <Section>
            <ContentBlocks contentBlock={props.content.contentBlock}/>
        </Section>
    )
}