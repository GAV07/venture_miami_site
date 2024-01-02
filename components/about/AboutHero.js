import Values from "./Values.js";
import Community from "./Community";
import {Achievements} from "./Achievements";
import StyleManager from "../../services/StyleManager";
import {useEffect, useState} from "react";
import * as React from "react";
import Hero from "../Hero";

export function AboutHero(props) {

    return (
        <Hero
            title={props.content.title}
            subtitle={props.content.subtitle}
            imageURL={props.content.backgroundImage?.fields.file.url}
        />

    )
}
