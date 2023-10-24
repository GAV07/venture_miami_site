import {Events} from "./Events";
import {Socials} from "./Socials";
import React, {useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {Slider} from "../../Slider";
import Swipe from "../../Swipe";


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
                    type:
                    // <div key={index} className={"w-full h-full shadow-md shadow-slate-200 rounded-[8px] flex flex-col"}>
                    // <div key={index} className={"w-full h-full object-cover rounded-[24px] shadow-md"}>
                    //     <div className={"h-full h-[60%]"}>
                    //         <img
                    //             src={'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                    //             alt=""
                    //             className="rounded-t-[10px]"
                    //         />
                    //     </div>
                    //
                    //     <div className={"flex flex-col justify-center items-center px-[24px] py-[32px] bg-white w-full h-[40%] rounded-b-[10px]"}>
                    //         <p className={"self-start text-[16px] font-bold px-[8px] py-[4px] rounded-[4px] bg-[#eff7ff] text-[#007AFC] mb-[8px]"}>{item.fields.Date}</p>
                    //         <p className={"text-[20px] text-center font-bold text-[#0e1012]"}>{"item.fields.Name"}</p>
                    //         <p className={"text-[16px] text-center text-[#566171]"}>{"item.fields.Description"}</p>
                    //     </div>
                    // </div>


                    <span className={"w-full h-full flex flex-col shadow-md rounded-[12px]"}>

                        <div className={"basis-1/2 h-[100px]"}>
                            {<img
                                src={'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                                alt=""
                                className="w-full h-full object-cover rounded-t-[10px]"
                            />}
                        </div>


                        {/*<span className={"flex flex-col h-[60%] px-[24px] py-[32px] bg-white w-full h-[40%] rounded-b-[10px]"}>*/}
                        {/*    <p className={"self-start text-[16px] font-bold px-[8px] py-[4px] rounded-[4px] bg-[#eff7ff] text-[#007AFC] mb-[8px] max-w-max"}>{item.fields.Date}</p>*/}
                        {/*    <p className={"text-[20px] text-center font-bold text-[#0e1012]"}>{item.fields.Name}</p>*/}
                        {/*    <p className={"text-[16px] text-center text-[#566171]"}>{item.fields.Description}</p>*/}
                        {/*</span>*/}
                    </span>
                }
                return componentObj;

            })

        setSliderItems(items);

    }, [])


    /*
                                    <img
                                src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio).webp"
                                // src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/651e8557b730b61ff947f814_homepage__search-p-1080.png"
                                // loading="lazy" width="730"
                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 42vw, 53vw"
                                alt=""
                                // srcSet="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio)-p-500.webp 500w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio)-p-800.webp 800w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio)-p-1080.webp 1080w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio).webp 1460w"
                            />

    */
    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[90%] m-auto xl:w-[85%]"}>

                <div className={"w-full m-auto flex flex-col"}>

                    {/* EVENT */}
                    <div
                        className="mb-[45px] md:mb-[140px] space-x-0 w-full overflow-hidden flex flex-col-reverse justify-center items-center md:flex-row md:space-x-[70px] md:justify-between md:items-center">

                        <div
                            className={'w-full py-4 lg:basis-[480px] lg:space-x-0 md:flex-row md:justify-center md:items-center xs:basis-1/2'}>
                            <div
                                className={"w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                <p className={'text-black text-[24px] font-bold'}>Business Development</p>
                                <p className={'text-[#A0AABA] text-[18px]'}>Whether you’re a founder, funder or individual interested in relocating to the City of Miami, we'll provide you with concierge-level support to make your transition seamless.</p>
                                <div className={"flex justify-start items-center w-full space-x-[30px]"}>
                                    <a href={"/resources"} className={"text-[14px] md:text-[16px] text-vm-blue font-semibold"}>Get started</a>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`w-full relative lg:basis-[730px] md:basis-1/2 max-h-[530px]
                            min-[1270px]:h-[530px] 
                                min-[1207px]:h-[493px] 
                            min-[1144px]:h-[457px] 
                                min-[1081px]:h-[420px] 
                            min-[1019px]:h-[384px] 
                                min-[952px]:h-[347px] 
                            min-[893px]:h-[311px] 
                                min-[830px]:h-[274px] 
                            min-[768px]:h-[235px]
                            
                            min-[767px]:h-[515px]
                                min-[639px]:h-[460px]
                            min-[510px]:h-[405px]
                                min-[381px]:h-[370px]
                            min-[288px]:h-[345px]                         
                            `}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1652109348316-2ec63fa43632?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fDRrJTIwaGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                                loading="lazy" width={"100%"}
                                alt=""
                                className={"rounded-[1.5rem] h-full object-cover w-full"}
                            />
                        </div>
                    </div>

                    <div
                        className="mb-[45px] md:mb-[140px] space-x-0 w-full overflow-hidden flex flex-col justify-center items-center md:flex-row md:space-x-[70px] md:justify-between md:items-stretch">

                        <div className={"relative lg:basis-[730px] xs:basis-1/2 max-h-[530px] mx-auto"}>
                            <img
                                src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio).webp"
                                loading="lazy" width="730"
                                alt=""
                            />
                        </div>

                        <div
                            className={'w-full py-4 lg:basis-[480px] lg:space-x-0 md:flex-row md:justify-center md:items-center xs:basis-1/2'}>
                            <div
                                className={"w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                <p className={'text-black text-[24px] font-bold'}>Opportunities for Miamians</p>
                                <p className={'text-[#A0AABA] text-[18px]'}>We connect our local talent with the businesses, career opportunities, and the resources they need to succeed.</p>
                                <div className={"flex justify-start items-center w-full space-x-[30px]"}>
                                    <a href={"/resources"} className={"text-[14px] md:text-[16px] text-vm-blue font-semibold"}>Get started</a>
                                </div>
                            </div>
                        </div>

                    </div>





{/*                    <div
                        className="mb-[45px] space-x-0 w-full overflow-hidden flex flex-col justify-center items-center md:flex-row md:space-x-[70px] md:justify-between md:items-stretch">

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

                    </div>*/}

                </div>

            </div>
        </div>
    )
}