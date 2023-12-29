import React, {useState} from "react";
import {BsArrowRight} from "react-icons/bs";
import Section from "../Section";
import DateManager from "../../services/DateManager";

export default function AllEvents(props) {

    const [events, setEvents] = useState(props.content);



    return (

        // <Section>
        <div className={"w-full m-auto flex flex-col gap-y-0"}>

            {
                events.map((event) => {

                    const date = event.fields.Date;

                    const dateManager = new DateManager(date);
                    let monthName = dateManager.getMonthName(date, 'long');
                    let day = dateManager.getDay(date);
                    let time = event.fields.Time;
                    let weekDay = event.fields.Day;
                    let fullDate = dateManager.getFullDate();

                    return (

                        <Section>
                            <div
                                className="space-x-0 w-full flex flex-col justify-center items-center sm:flex-row sm:space-x-[70px] sm:justify-between sm:items-start">
                                <div className={`basis-[35%] relative w-full aspect-[1/1]`}>
                                    <img
                                        src={event.fields.Image}
                                        className={`object-cover w-full h-full rounded-[0px]`}
                                    />
                                    <div
                                        className={"absolute top-[10px] right-[10px] p-[3x] bg-white text-center w-[56px] h-[56px] flex flex-col justify-center items-center"}>
                                        <p className={"upper text-[14px] leading-[14px]"}>{monthName}</p>
                                        <p className={"text-[26px] leading-[26px]"}>{day}</p>
                                    </div>
                                </div>


                                <div
                                    className={'basis-[65%]'}>
                                    <div
                                        className={"w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                        <p className={'text-darkGray text-[32px] font-bold'}>{event.fields.Name}</p>
                                        <div className={'flex items-center gap-x-2 text-[14px] leading-[14px] '}>
                                            <p className={''}>{weekDay}</p>
                                            <span>|</span>
                                            <p className={''}>{time}</p>
                                            <span>|</span>
                                            <p className={''}>{fullDate}</p>
                                        </div>
                                        <p className={'text-black text-[16px]'}>{event.fields.Description}</p>
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
                        </Section>
                    )
                })
            }

        </div>

        // </Section>
    )
}