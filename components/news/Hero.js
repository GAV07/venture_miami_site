import React from "react";
import HeroComponent from "../HeroComponent";

export default function Hero(props){

    return (

        <HeroComponent
            title={"From Venture Miami"}
            subtitle={"Stay up-to-date with all"}
            // imageURL={'https://images.ctfassets.net/y0vtnt98mulh/3pQ6jfYvBTBGtILn3JfNB1/8d48dc7445ca6ab85a7f1cee3aafd095/TSS-058.jpg'}
            // imageURL={props.content.backgroundImage.fields.file.url}
        />
    )
}