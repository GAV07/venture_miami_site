import {useEffect, useState} from "react";
import StyleManager from "../../services/StyleManager";
import HeroComponent from '../../components/HeroComponent'

export default function Hero(props) {

    const [styles, setStyles] = useState(null);

    const styleManager = new StyleManager();

    useEffect(()=>{

        setStyles(styleManager.getStyles());

    }, []);

    return (


        /*<div className={`w-full m-auto pt-64 pb-8 ${styles && `${'bg-'+styles.backgroundColor} ${'text-'+styles.textColor.color}` }`}>

            <div className={"w-[95%] m-auto"}>
                <div className={"mx-auto w-[80%] m-auto text-center"}>
                    <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                        {props.content.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] leading-8">
                        {props.content.subtitle}
                    </p>
                </div>

                <div className={`mt-24 w-full mx-auto
                
                     min-[1270px]:h-[820px] 
                        min-[1147px]:h-[749px]
                     min-[1024px]:h-[677px]
                        min-[896px]:h-[606px]
                     min-[768px]:h-[534px]
                        min-[704px]:h-[463px]
                     min-[640px]:h-[391px]
                        min-[560px]:h-[320px]
                     min-[480px]:h-[248px]
                `}>
                    <img
                        src={"https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl8ZW58MHx8MHx8fDA%3D"}
                        loading="lazy"
                        alt=""
                        className={`rounded-[2px] w-full h-full object-fit`}/>

                </div>
            </div>
        </div>*/

        <HeroComponent
            title={props.content.title}
            subtitle={props.content.subtitle}
            imageURL={props.content.backgroundImage.fields.file.url}
        />

    );
}
