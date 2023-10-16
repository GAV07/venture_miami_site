import {Slider} from "../Slider";
import {useEffect, useState} from "react";

export function Partnerships() {

    let number = 10;
    let width = 2500;

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
    const [sliderStyles, setSliderStyles] = useState("about"); // this allows the styles in index.css to be applied

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


        /*        <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Venture Miami collaborates with diverse companies to drive innovation in Miami.                </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                            Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit occaecat labore proident cillum in nisi
                            adipisicing officia excepteur tempor deserunt.
                        </p>

                        <div className={`w-[2500px] relative mt-6`}>

                            <div className={`animate-infinite-slider flex w-[calc(250px * 10)]`}>
                                <div className="h-[100px] w-[250px] m-auto">
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                                        alt="Transistor"

                                    />
                                </div>
                                <div className="h-[100px] w-[250px] m-auto">
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                                        alt="Reform"

                                    />
                                </div>
                                <div className="h-[100px] w-[250px] m-auto">
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                                        alt="Tuple"

                                    />
                                </div>
                                <div className="h-[100px] w-[250px] m-auto">
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                                        src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                                        alt="SavvyCal"

                                    />
                                </div>
                                <div className="h-[100px] w-[250px] m-auto">
                                    <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                    src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                                    alt="Statamic"
                                    width={158}
                                    height={48}
                                    />
                                </div>

                                {/!*copy*!/}
                                <div className="h-[100px] w-[250px] m-auto">
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                                        alt="Transistor"

                                    />
                                </div>
                                <div className="h-[100px] w-[250px] m-auto">
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                                        alt="Reform"

                                    />
                                </div>
                                <div className="h-[100px] w-[250px] m-auto">
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                                        alt="Tuple"

                                    />
                                </div>
                                <div className="h-[100px] w-[250px] m-auto">
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                                        src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                                        alt="SavvyCal"

                                    />
                                </div>
                                <div className="h-[100px] w-[250px] m-auto">
                                    <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                         src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                                         alt="Statamic"
                                         width={158}
                                         height={48}
                                    />
                                </div>
                            </div>
                        </div>

                       <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                            <div
                                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                                style={{
                                    clipPath:
                                        'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                                }}
                            />
                        </div>
                    </div>
                </div>*/
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