import {Events} from "./Events";
import {Socials} from "./Socials";
import React, {useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {Slider} from "../../Slider";


export function EventsAndSocialFeeds(props) {

    const [sliderItems, setSliderItems] = useState([]);
    const [sliderStyles, setSliderStyles] = useState('events');

    useEffect(() => {


        let items = props.content
            .filter((item) => {
                return item.fields.Show === "Yes"
            }) // filter only the ones we want to show
            .sort((item1, item2) => {
                return item1.fields.Date > item2.fields.Date
            }) // sort by date
            .slice(0, 4) // only keep 4 items
            .map((item, index) => { // display the 4 items

                let componentObj = {
                    type: <div key={index} className={"w-[95%] mx-auto h-[95%] my-auto shadow-md shadow-slate-200 rounded-[10px] h-full flex flex-col"}>
                        <div className={"h-full h-[60%]"}>
                            <img
                                src={'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                                alt=""
                                className="rounded-t-[10px]"
                            />
                        </div>

                        <div className={"flex flex-col justify-center items-center px-[24px] py-[32px] bg-white w-full h-[40%] rounded-b-[10px]"}>
                            <p className={"self-start text-[16px] font-bold px-[8px] py-[4px] rounded-[4px] bg-[#eff7ff] text-[#007AFC] mb-[8px]"}>{item.fields.Date}</p>
                            <p className={"text-[20px] text-center font-bold text-[#0e1012]"}>{item.fields.Name}</p>
                            <p className={"text-[16px] text-center text-[#566171]"}>{item.fields.Description}</p>
                        </div>
                    </div>
                }
                return componentObj;

            })

        setSliderItems(items);

    }, [])

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>
                <div className={"w-full m-auto flex flex-col"}>

                    {/* EVENT */}
                    <div
                        className="mb-[140px] space-x-0 w-full overflow-hidden flex flex-col-reverse justify-center items-center md:flex-row md:space-x-[70px] md:justify-between md:items-stretch">

                        <div
                            className={'w-full py-4 lg:basis-[480px] lg:space-x-0 md:flex-row md:justify-center md:items-center xs:basis-1/2'}>
                            <div
                                className={"w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                <p className={'text-black text-[24px] font-bold'}>Bring location to life with beautiful
                                    maps</p>
                                <p className={'text-[#A0AABA] text-[18px]'}>Use Mapbox APIs and SDKs, ready-made map
                                    styles, and live updating data to build customizable maps for web, mobile,
                                    automotive and AR.</p>
                                <p>
                                    <a className={"cursor-pointer text-[14px] md:text-[16px] px-[20px] py-[12px] rounded-full text-white bg-[#007afc] font-semibold"}>View events</a>
                                </p>
                            </div>
                        </div>

                        <div className={"relative lg:basis-[730px] xs:basis-1/2 "}>
                            <Slider items={sliderItems} styles={sliderStyles}/>
                        </div>
                    </div>

                    {/* SOCIALS */}
                    <div
                        className="mb-[140px] space-x-0 w-full overflow-hidden flex flex-col justify-center items-center md:flex-row md:space-x-[70px] md:justify-between md:items-stretch">

                        <div className={"lg:basis-[730px] xs:basis-1/2 "}>
                            <div className={"h-full w-full"}>
                                <Socials/>
                            </div>

                        </div>

                        <div
                            className={'w-full py-4 lg:basis-[480px] lg:space-x-0 md:flex-row md:justify-center md:items-center xs:basis-1/2'}>
                            <div
                                className={"w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                <p className={'text-black text-[24px] font-bold'}>Optimize routing with customized
                                    navigation </p>
                                <p className={'text-[#A0AABA] text-[18px]'}>Advanced routing engines, accurate
                                    traffic-aware travel times, and intuitive turn-by-turn directions for mobile and
                                    automotive.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}