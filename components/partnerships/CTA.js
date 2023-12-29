import {Slider} from "../Slider";
import React, {useEffect, useState} from "react";
import StyleManager from "../../services/StyleManager";
import HeroComponent from "../HeroComponent";
import CarouselComponent from "../CarouselComponent";

export default function CTA(props) {

    const [sliderItems, setSliderItems] = useState([]);
    // const [sliderStyles, setSliderStyles] = useState("max-h-[615px]"); // this allows the styles in index.css to be applied
    const [sliderStyles, setSliderStyles] = useState("partnerships"); // this allows the styles in index.css to be applied

    useEffect(() => {

        let items = props.content.gallery.map((image, index) => {


            return (
                    <img
                        // src={'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                        src={image.fields.file.url}
                        alt=""
                        // className="w-[95%] sm:w-[80%] sm:px-0 m-auto h-full object-cover rounded-[24px]"
                        className="w-full h-full object-cover"
                    />
            );
        })

        setSliderItems(items);

    }, []);


    const [styles, setStyles] = useState(null);

    const styleManager = new StyleManager();

    useEffect(() => {

        setStyles(styleManager.getStyles());

    }, []);

    const [carouselComponents, setCarouseComponents] = useState([]);

    useEffect(() => {


        let components = props.content.gallery.map((item, index) => {

            return(

                <img
                    key={index}
                    src={item.fields.file.url}
                    className={'w-full h-full object-cover'}
                    alt={item.fields.file.url}
                />


            );
        })

        setCarouseComponents(components);

    }, [])


    let sliderImages = (
        <div className={`relative w-full aspect-[1/1]`}>
                <Slider items={sliderItems} styles={sliderStyles} buttonPosition={'side'}/>
        </div>
    )
    return (

        /*        <div className={`w-full m-auto pt-64 pb-8 ${styles && `${'bg-'+styles.backgroundColor} ${'text-'+styles.textColor.color}` }`}>

                    <div className={"w-[95%] m-auto xl:w-[85%]"}>
                        <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                            <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                                {props.content.heroSection.title}
                            </h1>
                            <p className="text-[16px] md:text-[20px] leading-8 mb-[24px]">
                                {props.content.heroSection.subtitle}
                            </p>
                            <div className={"flex justify-around items-center w-full"}>
                                {
                                    props.content.heroSection.buttons.map((button, index)=>{

                                        return (

                                            <a key={index} href={button.fields.url} className={"cursor-pointer text-[14px] md:text-[16px] px-[20px] py-[12px] rounded-full text-white bg-vm-blue font-semibold"}>{button.fields.text}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className={"w-[95%] h-full mx-auto mt-24 flex flex-col space-y-[20px]"}>

                            <div className={"rounded-xl"}>
                                <Slider items={sliderItems} styles={sliderStyles} buttonPosition={'side'}/>
                            </div>
                        </div>

                    </div>

                </div>*/

        <HeroComponent title={props.content.heroSection.title}
                       subtitle={props.content.heroSection.subtitle}
                       buttons={props.content.heroSection.buttons}
                       content={
                           <CarouselComponent elements={sliderItems}
                                              loop={true}
                                              autoplay={true}/>
                       }
        />


)

}