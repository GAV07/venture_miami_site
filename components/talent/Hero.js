import {AiFillCheckCircle} from 'react-icons/ai'
import * as React from "react";
import {useEffect, useState} from "react";
import {Slider} from "../Slider";
import StyleManager from "../../services/StyleManager";
import HeroComponent from "../HeroComponent";

export function Hero(props) {

    return (

    <HeroComponent
        title={props.content.title}
        subtitle={props.content.subtitle}
        imageURL={props.content.backgroundImage.fields.file.url}
    />

    )
}