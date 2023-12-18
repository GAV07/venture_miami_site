import * as React from "react";
import HeroComponent from "../HeroComponent";

export default function Hero(props) {

    return (
        <HeroComponent
            title={props.content.title}
            subtitle={props.content.subtitle}
            imageURL={props.content.backgroundImage.fields.file.url}
        />

    )
}
