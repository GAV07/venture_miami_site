import React from "react";
import Hero from "../Hero";

export default function NewsHero(props){

    return (

        <Hero

            title={props.content.title}
            subtitle={props.content.subtitle}
            imageURL={props.content.backgroundImage?.fields.file.url}
        />
    )
}