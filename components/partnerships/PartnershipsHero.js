import React, {useEffect, useState} from "react";
import Hero from "../Hero";
import Carousel from "../Carousel";

export default function PartnershipsHero(props) {

    const [sliderItems, setSliderItems] = useState([]);

    useEffect(() => {

        let items = props.content.gallery.map((image, index) => {


            return (
                    <img
                        // src={'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                        src={image.fields.file.url}
                        alt=""
                        className="w-full h-full object-cover"
                    />
            );
        })

        setSliderItems(items);

    }, []);


    return (

        <Hero title={props.content.heroSection.title}
              subtitle={props.content.heroSection.subtitle}
              buttons={props.content.heroSection.buttons}
              content={
                           <Carousel elements={sliderItems}
                                     loop={true}
                                     autoplay={true}/>
                       }
        />


)

}