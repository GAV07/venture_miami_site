import React, {useState} from "react";
import {BsArrowRight} from "react-icons/bs";

export default function AllEvents(props) {

    const [events, setEvents] = useState(props.content);


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

    return (

        <div className={"w-full m-auto pt-20"}>

            <div className={"w-[95%] mx-auto"}>

                <div className={"w-full m-auto flex flex-col gap-y-20"}>

                    {
                        events.map((event) => {

                            return (

                                <div
                                    className="space-x-0 w-full flex flex-col justify-center items-center sm:flex-row sm:space-x-[70px] sm:justify-between sm:items-start">
                                    <div className={`basis-[35%] relative w-full aspect-[1/1]`}>
                                        <img
                                            src={"https://images.squarespace-cdn.com/content/v1/6269cd93d85e045a6b7d5ab0/1696355400403-DK3IMYZAP6QAE4BKZMLV/DSC05708.jpg?format=500w"}
                                            className={`object-cover w-full h-full rounded-[0px]`}
                                        />
                                        <div
                                            className={"absolute top-[10px] right-[10px] p-[3x] bg-white text-center w-[56px] h-[56px] flex flex-col justify-center items-center"}>
                                            <p className={"upper text-[14px] leading-[14px]"}>{getMonthName(event.fields.Date.split("/")[0], "long")}</p>
                                            <p className={"text-[26px] leading-[26px]"}>{event.fields.Date.split("/")[1]}</p>
                                        </div>
                                    </div>


                                    <div
                                        className={'basis-[65%]'}>
                                        <div
                                            className={"w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                            <p className={'text-darkGray text-[32px] font-bold'}>{event.fields.Name}</p>
                                            <p className={'text-lightGray text-[14px]'}>{event.fields.Time}</p>
                                            <p className={'text-lightGray text-[16px]'}>{event.fields.Description}</p>
                                            <div
                                                className={"flex flex-col justify-center items-start w-full space-y-[30px]"}>
                                                <a href={`/events/${event.fields.Name.trim().toLowerCase().split(" ").join("-")}`}
                                                   className={"max-w-max rounded-none mt-auto h-full text-[14px] bg-white py-[10px] px-[30px] text-darkGray ring-1 ring-black uppercase"}>Event
                                                    details</a>
                                                <a href={`${event.fields.URL}`}
                                                   className={"max-w-max rounded-none mt-auto h-full text-[14px] bg-vm-blue py-[10px] px-[30px] text-white uppercase"}>Go
                                                    to event</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}