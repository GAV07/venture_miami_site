import {AiFillCheckCircle} from 'react-icons/ai'
import * as React from "react";
import {useEffect, useState} from "react";
import {Slider} from "../Slider";
import StyleManager from "../../services/StyleManager";
import Hero from "../Hero";

export function InitiativesHero(props) {

    return (

    <Hero
        title={props.content.title}
        subtitle={props.content.subtitle}
        imageURL={props.content.backgroundImage?.fields.file.url}
    />

    )
}