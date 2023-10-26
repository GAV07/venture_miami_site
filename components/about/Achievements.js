import React from "react";

export function Achievements(props) {

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>
                <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                    <h1 className="text-[26px] lg:text-[48px] md:text-[38px] font-bold text-[#0e1012] mb-3">
                        {props.content.title} </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                        {props.content.subtitle}
                    </p>
                </div>

            </div>

            <div className={"w-[90%] lg:w-[75%] md:w-[90%] m-auto mt-10 grid grid-cols-2 gap-x-[24px] gap-y-[24px]"}>

                {
                    props.content.stats.map((stat, index)=>{

                        return (

                            <div key={index} className={"p-[30px] bg-[#161a1d] h-full max-w-full rounded-[10px]"}>
                                <div className={"mb-[32px] flex flex-col space-y-3"}>
                                    <p className={"text-white font-[18px] font-bold"}>{stat.fields.statistic}</p>
                                </div>
                                <div>
                                    <p className={"text-vm-blue text-[28px]"}>{stat.fields.title}</p>
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
    )
}