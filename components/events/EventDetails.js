import React, {useEffect, useState} from "react";

import {BsArrowLeft, BsChevronLeft, BsChevronRight} from 'react-icons/bs'

export default function EventDetails(props) {

    const [events, setEvent] = useState(props.content.sortedEvents);
    const [index, setIndex] = useState(props.content.index);

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

    let monthNumber = events[index].fields.Date.split("/")[0];
    let day = events[index].fields.Date.split("/")[1];

    return (

        <div className={"w-[90%] mx-auto flex flex-col"}>

            <a href={"/events/all"} className={"mt-[30px] max-w-max text-[14px] text-white ring-1 ring-[#161A1D] bg-[#161A1D] flex items-center space-x-[20px] py-[10px] px-[30px]"}><BsArrowLeft size={14}/><span>View all events</span></a>

            <div className={"flex flex-col justify-center items-center space-y-[30px] sm:flex-row sm:items-center min-h-[500px] sm:space-x-[40px] sm:space-y-0"}>

                <div className={"flex flex-col basis-[30%] space-y-[20px] w-full"}>
                    <h2 className={"font-bold text-[30px]"}>{events[index].fields.Name}</h2>
                    <div>
                        <h2 className={"text-[14px]"}>{getMonthName(monthNumber)} {day}, {new Date().getFullYear()}</h2>
                        <h2 className={"text-[14px]"}>{events[index].fields.Time}</h2>
                    </div>
                    <h2 className={"text-[14px]"}>{events[index].fields.Location}</h2>
                </div>

                <div className={"flex flex-col basis-[70%] space-y-[10px] h-full"}>
                    <p className={"text-[18px]"}>{events[index].fields.Description}</p>
                    <a href={`${events[index].fields.URL}`} className={"max-w-max rounded-none mt-auto h-full text-[14px] bg-[#007afc] py-[10px] px-[30px] text-white uppercase"}>View event</a>
                </div>

            </div>

            <div className={"w-full flex justify-between items-center"}>

                 {/*IF PREVIOUS EVENT EXISTS*/}
                <div>

                    {
                        index - 1 >= 0 && (


                            <a
                                href={`/events/${events[index - 1].fields.Name.trim().toLowerCase().split(" " ).join("-")}`}
                                className={"flex items-center space-x-[10px]"}
                            >
                                <BsChevronLeft/>
                                <div>
                                    <h2 className={"text-[14px] text-start"}>{getMonthName(events[index - 1].fields.Date.split("/")[0])} {events[index - 1].fields.Date.split("/")[1]}, {new Date().getFullYear()}</h2>

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
                                href={`/events/${events[index + 1].fields.Name.trim().toLowerCase().split(" " ).join("-")}`}
                                className={"flex items-center space-x-[10px]"}
                            >
                                <div>
                                    <h2 className={"text-[14px] text-end"}>{getMonthName(events[index + 1].fields.Date.split("/")[0])} {events[index + 1].fields.Date.split("/")[1]}, {new Date().getFullYear()}</h2>

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