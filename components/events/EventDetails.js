import React, {useEffect, useState} from "react";

import {BsArrowLeft, BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import Link from "next/link";
import DateManager from "../../services/DateManager";

export default function EventDetails(props) {

    const [events, setEvent] = useState(props.content.sortedEvents);
    const [index, setIndex] = useState(props.content.index);

    let date = events[index].fields.Date;

    const dateManager = new DateManager(date);

    let time = events[index].fields.Time;
    let weekDay = events[index].fields.Day;
    let currentFullDate = dateManager.getFullDate();


    let convertToDashes = (title) => {

        return title.trim().toLowerCase().split(" ").join("-")
    }

    return (

        <div className={"w-[95%] mx-auto flex flex-col gap-y-10 pt-20"}>

            <a href={"/events/all"}
                  className={"mt-[30px] max-w-max text-[14px] text-white ring-1 ring-[#161A1D] bg-[#161A1D] flex items-center space-x-[20px] py-[10px] px-[30px]"}><BsArrowLeft
                size={14}/><span>All events</span></a>

            <div
                className={"flex flex-col justify-center items-center space-y-[30px] sm:flex-row sm:items-center min-h-[500px] sm:space-x-[40px] sm:space-y-0"}>

                <div className={"flex flex-col basis-[30%] space-y-[20px] w-full"}>
                    <h2 className={"font-bold text-[30px]"}>{events[index].fields.Name}</h2>
                    <div>
                        <h2 className={"text-[14px]"}>{currentFullDate}</h2>
                        <div className={'flex items-center gap-x-2'}>
                            <p className={"text-[14px]"}>{weekDay}</p>
                            <span>|</span>
                            <p className={"text-[14px]"}>{time}</p>
                        </div>
                    </div>
                    <h2 className={"text-[14px]"}>{events[index].fields.Location}</h2>
                </div>

                <div className={"flex flex-col basis-[70%] space-y-[10px] h-full"}>
                    <p className={"text-[18px]"}>{events[index].fields.Description}</p>
                    <Link href={`${events[index].fields.URL}`}
                          className={"max-w-max rounded-none mt-auto h-full text-[14px] bg-vm-blue py-[10px] px-[30px] text-white uppercase"}>Got
                        to event</Link>
                </div>

            </div>

            <div className={"w-full flex justify-between items-center"}>

                {/*IF PREVIOUS EVENT EXISTS*/}
                <div>

                    {
                        index - 1 >= 0 && (


                            <a href={`/events/${convertToDashes(events[index - 1].fields.Name)}`}
                                  className={"flex items-center space-x-[10px]"}
                            >

                                <BsChevronLeft/>
                                <div>
                                    <h2 className={"text-[14px] text-start"}>{new DateManager(events[index - 1].fields.Date).getFullDate()}</h2>

                                    <p className={"text-[12px]"}>

                                        {events[index - 1].fields.Name}

                                    </p>
                                </div>
                            </a>

                        )
                    }
                </div>


                {/*IF NEXT EVENT EXISTS*/}
                <div>

                    {
                        index + 1 < events.length && (


                            <a
                                href={`/events/${convertToDashes(events[index + 1].fields.Name)}`}
                                className={"flex items-center space-x-[10px]"}
                            >

                                <div>
                                    <h2 className={"text-[14px] text-end"}>{new DateManager(events[index + 1].fields.Date).getFullDate()}</h2>

                                    <p className={"text-[12px]"}>

                                        {events[index + 1].fields.Name}

                                    </p>
                                </div>
                                <BsChevronRight/>
                            </a>

                        )
                    }
                </div>
            </div>

        </div>
    )
}