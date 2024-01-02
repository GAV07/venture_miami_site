import React from "react";
import TimelineComponent from "../TimelineComponent";
import Section from "../Section";

export function Achievements(props) {

    return (

        <Section>

            {/* CONTENT */}

            <div className={'w-full'}>
                <h1 className="text-[36px] md:text-[56px] font-light mb-3 leading-none">
                    {props.content.title}
                </h1>
                <p className="text-[16px] md:text-[20px] leading-8">
                    {props.content.subtitle}
                </p>
            </div>

            {/* IMAGES */}
            <div className={"w-full grid grid-cols-1 lg:grid-cols-2 mx-auto gap-y-4 gap-x-4"}>

                {
                    props.content.stats.map((stat, index) => {

                        return (

                            <div key={index}
                                 className={"relative p-[30px] bg-vm-blue h-full min-h-[500px] max-w-full rounded-[10px]"}>
                                <img
                                    src={stat.fields.image.fields.file.url}
                                    className={`rounded-[8px] absolute top-0 left-0 w-full object-cover max-h-full h-full z-0`}
                                />
                                <div className="relative z-[1]">
                                    <div className={"mb-[32px] flex flex-col space-y-3"}>
                                        <p className={"text-white font-[18px] font-bold"}>{stat.fields.title}</p>
                                    </div>
                                    <div>
                                        <p className={"text-white text-[28px]"}>{stat.fields.statistic}</p>
                                    </div>
                                </div>
                                <div className="absolute rounded-[8px] top-0 left-0 w-full h-full">
                                    <div
                                        className="rounded-[8px] w-full h-full bg-gradient-to-b from-vm-blue"></div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            {/*<TimelineComponent />*/}
        </Section>
    )
}