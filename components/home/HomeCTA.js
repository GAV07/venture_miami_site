import {BsArrowRight} from "react-icons/bs"
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CTA from "../CTA";

export default function HomeCTA(props) {

    const buttonStyles = [

        {
            text: 'text-white',
            background: 'bg-vm-blue',
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
             backgroundColor={'vm-blue'}
             textColor={'vm-blue'}
             buttons={buttonStyles}
        />
    )
}
