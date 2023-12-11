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
        imageURL={"https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    />

    )
}