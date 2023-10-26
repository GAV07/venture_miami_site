import {Slider} from "../Slider";
import {useEffect, useState} from "react";

export function Partnerships(props) {

    // temporary until we get images in the DB
    const images = [

        <div className="h-[100px] w-[250px] m-auto">
            <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                alt="SavvyCal"

            />
        </div>,
        <div className="h-[100px] w-[250px] m-auto">
            <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                alt="Tuple"

            />
        </div>,
        <div className="h-[100px] w-[250px] m-auto">
            <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                alt="Reform"

            />
        </div>,
        <div className="h-[100px] w-[250px] m-auto">
            <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                alt="Transistor"

            />
        </div>

    ]

    const [sliderItems, setSliderItems] = useState([]);
    const [sliderStyles, setSliderStyles] = useState("partners"); // this allows the styles in index.css to be applied

    useEffect(()=>{

        let items = props.content.images.map((image, index)=>{

            let componentObj = {
                type: (

                    <div className="h-[100px] w-[250px] m-auto">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={image.fields.file.url}
                            alt="Transistor"

                        />
                    </div>
                )
            }

            return componentObj;
        })

        setSliderItems(items);

    }, [])
    return (
        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>

                <div className={"overflow-hidden m-auto bg-[#161A1D] rounded-[16px]"}>

                    <div className="font-bold flex flex-col justify-center items-center ml-auto mr-auto p-[80px]">
                        <h2 className="text-white text-[36px] text-center">
                            {props.content.title}
                        </h2>
                        <p className="text-[#9CA6B6] text-[18px] text-center">
                            {props.content.subtitle}
                        </p>
                    </div>

                    <Slider items={sliderItems} styles={sliderStyles} showButtons={false}/>

                </div>
            </div>
        </div>
    )
}