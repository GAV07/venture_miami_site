import Values from "./Values.js";
import Community from "./Community";
import {Achievements} from "./Achievements";
import StyleManager from "../../services/StyleManager";
import {useEffect, useState} from "react";
import * as React from "react";
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
