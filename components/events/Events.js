import React, {useEffect, useState} from "react";
import {Slider} from "../Slider";
import {BsArrowRight} from "react-icons/bs";

export default function EventsInfo(props) {

    const [events, setEvents] = useState([]);
    const [sliderItems, setSliderItems] = useState([]);

    function getMonthName(monthNumber, format = "short") {
        const monthsShort = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const monthsLong = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let monthArray = [];

        if (format === "short") {
            monthArray = monthsShort;
        } else if (format === "long") {
            monthArray = monthsLong;
        } else {
            return "Invalid Format";
        }

        if (monthNumber >= 1 && monthNumber <= 12) {
            const monthName = monthArray[monthNumber - 1];
            return monthName;
        } else {
            return "Invalid Month";
        }
    }

    useEffect(()=>{

         let sortedEvents = props.content.filter((event)=>{
             return( Object.keys(event.fields).length > 0 && event.fields.Show === "Yes" ) && event
         }).sort((event1, event2)=>{
             return new Date(event1.fields.Date) - new Date(event2.fields.Date)
         });

         setEvents(sortedEvents);

         let items = sortedEvents.map((event)=>{

             let monthNumber = event.fields.Date.split("/")[0];
             let date = event.fields.Date.split("/")[1];

             let componentObj = {

                 type: <div className={`relative max-w-[470px] w-full max-h-[500px]`}>
                     <a
                         href={`/events/${event.fields.Name.trim().toLowerCase().split(" ").join("-")}`}
                         className={`w-full max-h-[445px] overflow-hidden block`}>
                         <img
                             src={"https://images.squarespace-cdn.com/content/v1/6269cd93d85e045a6b7d5ab0/1696355400403-DK3IMYZAP6QAE4BKZMLV/DSC05708.jpg?format=500w"}
                             className={"object-cover h-full w-full rounded-[0px]"}
                         />
                     </a>
                     <div className={"absolute top-[10px] right-[10px] p-[3x] bg-white text-center w-[56px] h-[56px] flex flex-col justify-center items-center"}>
                         <p className={"upper text-[14px] leading-[14px]"}>{getMonthName(monthNumber, "short")}</p>
                         <p className={"text-[26px] leading-[26px]"}>{date}</p>
                     </div>
                     <a
                         href={`/events/${event.fields.Name.trim().toLowerCase().split(" ").join("-")}`}
                         className={"block mt-[10px] flex flex-col justify-center items-start space-y-[2px]"}>
                         <p className={"md:text-[18px] text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis w-full text-darkGray"}>{event.fields.Name}</p>
                         <p className={"md:text-[14px] text-[12px] text-lightGray"}>{getMonthName(monthNumber,"long")} {date}, {new Date().getFullYear()}</p>
                     </a>
                 </div>

             }

             return componentObj
         })

        setSliderItems(items);

    }, [])

    return (
        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[90%] m-auto xl:w-[85%]"}>

                {/* FEATURED EVENT SECTION */}
                {
                    events.length > 0 && (

                        <div
                            className="mt-16 mb-[45px] md:mb-[140px] space-x-0 w-full overflow-hidden flex flex-col-reverse justify-center items-center md:flex-row md:space-x-[70px] md:justify-between md:items-center">

                            <div
                                className={'w-full py-4 lg:basis-[480px] lg:space-x-0 md:flex-row md:justify-center md:items-center xs:basis-1/2'}>
                                <div
                                    className={"w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                    <p className={'text-[12px] font-bold text-vm-blue'}>Featured Event</p>
                                    <p className={'text-darkGray text-[20px] md:text-[24px] font-bold'}>{events[0].fields.Name}</p>
                                    <p className={'text-lightGray text-[14px] md:text-[18px]'}>{events[0].fields.Description}</p>
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
                                    // src={events[0].fields.URL}
                                    src={"https://images.squarespace-cdn.com/content/v1/6269cd93d85e045a6b7d5ab0/1696355400403-DK3IMYZAP6QAE4BKZMLV/DSC05708.jpg?format=500w"}
                                    loading="lazy" width={"100%"}
                                    alt=""
                                    className={"rounded-[10px] h-full object-cover w-full"}
                                />
                            </div>
                        </div>
                    )
                }



                {/*<div className={"rounded-xl h-[800px] mt-16"}>
                    <Slider items={sliderItems} styles={"events"} buttonPosition={'bottom'}/>
                </div>*/}
            </div>


            {/* LIST OF EVENTS */}
            <div className={"mx-auto w-[90%]"}>
                <div className={"max-w-[656px]"}>
                    <h1 className="text-[36px] md:text-[44px] font-bold text-darkGray mb-[40px]">
                        More Events
                    </h1>
                </div>
                <Slider items={sliderItems} styles={"events"} buttonPosition={"bottom"}/>
                <a href={"/events/all"} className={"max-w-max text-[14px] text-vm-blue flex items-center space-x-[20px]"}><span>View all events</span> <BsArrowRight size={14}/></a>
            </div>
        </div>

    )

}