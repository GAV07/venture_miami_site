import React, {useEffect, useState} from "react";
import {Slider} from "../Slider";
import {BsArrowRight, BsArrowRightShort} from "react-icons/bs";
import CarouselComponent from "../CarouselComponent";

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

    useEffect(() => {

        let sortedEvents = props.content.filter((event) => {
            return (Object.keys(event.fields).length > 0 && event.fields.Show === "Yes") && event
        }).sort((event1, event2) => {
            return new Date(event1.fields.Date) - new Date(event2.fields.Date)
        });

        setEvents(sortedEvents);

        let items = sortedEvents.map((event) => {

            let monthNumber = event.fields.Date.split("/")[0];
            let date = event.fields.Date.split("/")[1];

            let componentObj = {

                type: <div className={`relative w-full aspect-[1/1]`}>
                    <a
                        href={`/events/${event.fields.Name.trim().toLowerCase().split(" ").join("-")}`}
                        className={`w-full aspect-[1/1] overflow-hidden block`}>
                        <img
                            src={"https://images.squarespace-cdn.com/content/v1/6269cd93d85e045a6b7d5ab0/1696355400403-DK3IMYZAP6QAE4BKZMLV/DSC05708.jpg?format=500w"}
                            className={"object-cover h-full w-full rounded-[0px]"}
                        />
                    </a>
                    <div
                        className={"absolute top-[10px] right-[10px] p-[3x] bg-white text-center w-[56px] h-[56px] flex flex-col justify-center items-center"}>
                        <p className={"upper text-[14px] leading-[14px]"}>{getMonthName(monthNumber, "short")}</p>
                        <p className={"text-[26px] leading-[26px]"}>{date}</p>
                    </div>
                    <a
                        href={`/events/${event.fields.Name.trim().toLowerCase().split(" ").join("-")}`}
                        className={"block mt-[10px] flex flex-col justify-center items-start space-y-[2px]"}>
                        <p className={"md:text-[18px] text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis w-full text-darkGray"}>{event.fields.Name}</p>
                        <p className={"md:text-[14px] text-[12px] text-lightGray"}>{getMonthName(monthNumber, "long")} {date}, {new Date().getFullYear()}</p>
                    </a>
                </div>

            }

            return componentObj
        })

        setSliderItems(items);

    }, [])

    const [carouselComponents, setCarouselComponents] = useState([]);

    useEffect(() => {


        let sortedEvents = props.content.filter((event) => {
            return (Object.keys(event.fields).length > 0 && event.fields.Show === "Yes") && event
        }).sort((event1, event2) => {
            return new Date(event1.fields.Date) - new Date(event2.fields.Date)
        });

        setEvents(sortedEvents);

        let components = sortedEvents.map((event) => {

            let monthNumber = event.fields.Date.split("/")[0];
            let date = event.fields.Date.split("/")[1];

            let component = <div className={`relative basis-1/4 w-full h-full`}>
                <a
                    href={`/events/${event.fields.Name.trim().toLowerCase().split(" ").join("-")}`}
                    className={`w-full max-h-[445px] overflow-hidden block`}>
                    <img
                        src={"https://images.squarespace-cdn.com/content/v1/6269cd93d85e045a6b7d5ab0/1696355400403-DK3IMYZAP6QAE4BKZMLV/DSC05708.jpg?format=500w"}
                        className={"object-cover h-full w-full rounded-[0px]"}
                    />
                </a>
                <div
                    className={"absolute top-[10px] right-[10px] p-[3x] bg-white text-center w-[56px] h-[56px] flex flex-col justify-center items-center"}>
                    <p className={"upper text-[14px] leading-[14px]"}>{getMonthName(monthNumber, "short")}</p>
                    <p className={"text-[26px] leading-[26px]"}>{date}</p>
                </div>
                <a
                    href={`/events/${event.fields.Name.trim().toLowerCase().split(" ").join("-")}`}
                    className={"block mt-[10px] flex flex-col justify-center items-start space-y-[2px]"}>
                    <p className={"md:text-[18px] text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis w-full text-darkGray"}>{event.fields.Name}</p>
                    <p className={"md:text-[14px] text-[12px] text-lightGray"}>{getMonthName(monthNumber, "long")} {date}, {new Date().getFullYear()}</p>
                </a>
            </div>


            return component;
        })

        setCarouselComponents(components);

    }, [])

    return (
        <div className={"w-full m-auto pt-20"}>

            <div className={"w-[95%] m-auto"}>
                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>

                    {/* FEATURED EVENT SECTION */}
                    {
                        events.length > 0 && (
                            <div
                                className={`flex justify-between items-start flex-col gap-y-10 gap-x-10 pb-20 md:flex-row md:gap-y-0`}>


                                <div
                                    className={`md:w-1/2 w-full text-[2.5rem]`}>
                                    <div
                                        className={"md:w-[65%] w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                        <p className={'font-bold text-vm-blue text-[12px]'}>Featured Event</p>
                                        <p className={'text-black text-[2.25rem] font-light'}>{events[0].fields.Name}</p>
                                        <p className={'text-black text-[1rem]'}>{events[0].fields.Description}</p>

                                        <div className={"flex justify-start items-center w-full gap-x-[30px]"}>
                                            <a href={`/events/${events[0].fields.Name.trim().toLowerCase().split(" ").join("-")}`}
                                               className={"text-[14px] text-vm-blue font-[500] border-solid border-[1.5px] border-vm-blue px-[10px] py-[4px] rounded-full flex items-center gap-x-[7px]"}>
                                                <span>Go to event</span> <BsArrowRightShort color={"#3F47FF"}
                                                                                            size={20}/></a>
                                        </div>

                                    </div>


                                </div>

                                <div className={`md:w-1/2 w-full mx-auto aspect-[1/1]`}>
                                    {
                                        <img
                                            src={"https://images.squarespace-cdn.com/content/v1/6269cd93d85e045a6b7d5ab0/1696355400403-DK3IMYZAP6QAE4BKZMLV/DSC05708.jpg?format=500w"}
                                            alt=""
                                            className={'w-full h-full rounded-[2px] object-cover'}
                                        />
                                    }
                                </div>


                            </div>
                        )
                    }


                    {/*<div className={"rounded-xl h-[800px] mt-16"}>
                    <Slider items={sliderItems} styles={"events"} buttonPosition={'bottom'}/>
                </div>*/}
                </div>


                {/* LIST OF EVENTS */}
                <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-10"}>
                    <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>
                        <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                            More Events
                        </h1>
                    </div>
                    <div className={"mx-auto w-full"}>
                        <Slider items={sliderItems} styles={"events"} buttonPosition={"bottom"}/>
                        {/*<Slider items={sliderItems} styles={""} buttonPosition={"bottom"}/>*/}
                        {/*<CarouselComponent components={carouselComponents} styles={'flex justify-center items-center gap-x-10'}/>*/}
                    </div>
                    <a href={"/events/all"}
                       className={"max-w-max text-[14px] text-vm-blue flex items-center space-x-[20px]"}><span>View all events</span>
                        <BsArrowRight size={14}/></a>
                </div>
            </div>
        </div>

    )

}