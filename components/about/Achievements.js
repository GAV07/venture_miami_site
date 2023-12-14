import React from "react";
import TimelineComponent from "../TimelineComponent";

export function Achievements(props) {

    return (

        <div className={"w-full m-auto pt-20"}>

            <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-10"}>

                {/* CONTENT */}
                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>
                    <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                        {props.content.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] leading-8">
                        {props.content.subtitle}
                    </p>
                </div>

                {/* IMAGES */}
                <div className={"w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-2 mx-auto gap-y-4 gap-x-4"}>

                    {
                        props.content.stats.map((stat, index)=>{

                            return (

                                <div key={index} className={"relative p-[30px] bg-vm-blue h-full min-h-[500px] max-w-full rounded-[10px]"}>
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
                                        <div className="rounded-[8px] w-full h-full bg-gradient-to-b from-vm-blue"></div>
                                    </div>

                                </div>
                            )
                        })
                    }

                    {/*  <div className={"p-[30px] bg-[#161a1d] h-full max-w-full rounded-[10px]"}>
                    <div className={"mb-[32px] flex flex-col space-y-3"}>
                        <p className={"text-white font-[18px] font-bold"}>User on the platform</p>
                        <p className={"text-[#9ba2b2] font-[15px] font-light"}>Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste.</p>
                    </div>
                    <div>
                        <p className={"text-[#007afc] text-[28px]"}>250k</p>
                    </div>
                </div>

                <div className={"p-[30px] bg-[#161a1d] h-full max-w-full rounded-[10px]"}>
                    <div className={"mb-[32px] flex flex-col space-y-3"}>
                        <p className={"text-white font-[18px] font-bold"}>User on the platform</p>
                        <p className={"text-[#9ba2b2] font-[15px] font-light"}>Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste.</p>
                    </div>
                    <div>
                        <p className={"text-[#007afc] text-[28px]"}>250k</p>
                    </div>
                </div>

                <div className={"p-[30px] bg-[#161a1d] h-full max-w-full rounded-[10px]"}>
                    <div className={"mb-[32px] flex flex-col space-y-3"}>
                        <p className={"text-white font-[18px] font-bold"}>User on the platform</p>
                        <p className={"text-[#9ba2b2] font-[15px] font-light"}>Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste.</p>
                    </div>
                    <div>
                        <p className={"text-[#007afc] text-[28px]"}>250k</p>
                    </div>
                </div>

                <div className={"col-span-2 p-[24px] bg-[#161a1d] h-full max-w-full rounded-[10px]"}>
                    <div className={"mb-[32px] flex flex-col space-y-3"}>
                        <p className={"text-white font-[18px] font-bold"}>User on the platform</p>
                        <p className={"text-[#9ba2b2] font-[15px] font-light"}>Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste.</p>
                    </div>
                    <div>
                        <p className={"text-[#007afc] text-[28px]"}>250k</p>
                    </div>
                </div>*/}
                </div>
            </div>

            {/*<TimelineComponent />*/}
        </div>
    )
}