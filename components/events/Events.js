import React, {useEffect, useState} from "react";
import {BsArrowRight, BsArrowRightShort} from "react-icons/bs";
import Carousel from "../Carousel";
import Section from "../Section";
import DateManager from "../../services/DateManager";

export default function EventsInfo(props) {

    const [events, setEvents] = useState([]);
    const [sliderItems, setSliderItems] = useState([]);

    useEffect(() => {

        let filteredEvents = props.content.filter((event) => {
            // filter only the events we want to show
            return event && (Object.keys(event.fields).length > 0 && event.fields.Show === "Yes")
        })

        setEvents(filteredEvents);

        let items = filteredEvents.map((event) => {

            const date = event.fields.Date;

            const dateManager = new DateManager(date);
            let monthName = dateManager.getMonthName(date);
            let day = dateManager.getDay(date);
            let fullDate = dateManager.getFullDate();

            return (

                <div className={`relative w-full aspect-[1/1]`}>
                    <a
                        href={`/events/${event.fields.Name.trim().toLowerCase().split(" ").join("-")}`}
                        className={`w-full aspect-[1/1] overflow-hidden block`}>
                        <img
                            src={event.fields.Image}
                            className={"object-cover h-full w-full rounded-[0px]"}
                        />
                    </a>
                    <div
                        className={"absolute top-[10px] right-[10px] p-[3x] bg-white text-center w-[56px] h-[56px] flex flex-col justify-center items-center"}>
                        <p className={"upper text-[14px] leading-[14px]"}>{monthName}</p>
                        <p className={"text-[26px] leading-[26px]"}>{day}</p>
                    </div>
                    <a
                        href={`/events/${event.fields.Name.trim().toLowerCase().split(" ").join("-")}`}
                        className={"block mt-[10px] flex flex-col justify-center items-start space-y-[2px]"}>
                        <p className={"md:text-[18px] text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis w-full text-darkGray"}>{event.fields.Name}</p>
                        <p className={"md:text-[14px] text-[12px] text-black"}>{fullDate}</p>
                    </a>
                </div>

            )
        })

        setSliderItems(items);

    }, [])


    return (

        <>
            {
                props.content.length <= 0 ?

                    (
                        <Section>
                            <div className={"flex flex-col justify-center items-start space-y-10"}>
                                <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                                    Looks like there aren't any news</h1>
                            </div>
                        </Section>
                    )
                    :
                    (

                        <>
                            {
                                (events.length > 0) && (

                                    <Section>
                                        {/* FEATURED EVENT SECTION */}
                                        <div
                                            className="flex justify-between items-start flex-col gap-y-10 gap-x-10 pb-20 md:flex-row md:gap-y-0">
                                            <div className="md:w-1/2 w-full text-[2.5rem]">
                                                <div
                                                    className="md:w-[80%] w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start">
                                                    <p className="font-bold text-vm-blue text-[12px]">Featured Event</p>
                                                    <p className="text-black text-[2.25rem] font-light">{events[0].fields.Name}</p>
                                                    <p className="text-black text-[1rem]">{events[0].fields.Description}</p>
                                                    <div className="flex justify-start items-center w-full gap-x-[30px]">
                                                        <a
                                                            href={`/events/${events[0].fields.Name.trim().toLowerCase().split(" ").join("-")}`}
                                                            className="text-[14px] text-vm-blue font-[500] border-solid border-[1.5px] border-vm-blue px-[10px] py-[4px] rounded-full flex items-center gap-x-[7px]">
                                                            <span>Go to event</span> <BsArrowRightShort color={"#3F47FF"}
                                                                                                        size={20}/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-1/2 w-full mx-auto aspect-[1/1]">
                                                {<img
                                                    src={events[0].fields.Image}
                                                    alt=""
                                                    className="w-full h-full rounded-[2px] object-cover"
                                                />}
                                            </div>
                                        </div>
                                    </Section>
                                )
                            }

                            {/* LIST OF EVENTS */}
                            <Section>
                                <h1 className="mt-0 text-[36px] md:text-[56px] font-light mb-3">
                                    More Events
                                </h1>
                                <div className="mx-auto w-full">
                                    <Carousel elements={sliderItems} spaceBetween={15} slidesPerView={3}/>
                                </div>
                                <a href="/events/all"
                                   className="max-w-max text-[14px] text-vm-blue flex items-center space-x-[20px]">
                                    <span>View all events</span>
                                    <BsArrowRight size={14}/>
                                </a>
                            </Section>
                        </>
                    )
            }

        </>

    )

}