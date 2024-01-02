import {BsArrowRight} from "react-icons/bs"
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CTA from "../CTA";

export default function AboutCTA(props) {

    const buttonStyles = [

        {
            text: 'text-black',
            background: 'bg-vm-yellow',
            ring: ''
        },
        {
            text: 'text-black',
            background: 'bg-white',
            ring: 'ring-1 ring-black'
        }
    ]
    return (

        <CTA props={props}
             backgroundColor={'vm-yellow'}
             textColor={'vm-yellow'}
             buttons={buttonStyles}
        />
    )
}
