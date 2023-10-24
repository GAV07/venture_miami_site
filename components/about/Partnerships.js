import {Slider} from "../Slider";
import {useEffect, useState} from "react";

export function Partnerships() {

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

        let items = images.map((item, index)=>{

            let componentObj = {
                type: item
            }

            return componentObj;
        })

        setSliderItems(items);

    })
    return (
        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>

                <div className={"m-auto bg-[#161A1D] rounded-[16px]"}>

                    <div className="font-bold flex flex-col justify-center items-center ml-auto mr-auto p-[80px]">
                        <h2 className="text-white text-[36px] text-center">
                            Venture Miami collaborates with diverse companies to drive innovation in Miami.
                        </h2>
                        <p className="text-[#9CA6B6] text-[18px] text-center">
                            Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit occaecat labore proident
                            cillum in nisi
                            adipisicing officia excepteur tempor deserunt.
                        </p>
                    </div>

                    <Slider items={sliderItems} styles={sliderStyles} showButtons={false}/>

                </div>
            </div>
        </div>
    )
}