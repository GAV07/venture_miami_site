import React from "react";

export function Achievements(props) {

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>
                <div className={"max-w-[80%] mx-auto w-[80%] m-auto text-center"}>
                    <h1 className="text-[26px] lg:text-[48px] md:text-[38px] font-bold text-[#0e1012] mb-3">
                        {props.content.title} </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                        {props.content.subtitle}
                    </p>
                </div>

            </div>

            <div className={"md:min-w-[30vw] md:max-w-[50vw] mt-10 grid grid-cols-1 md:grid-cols-2 mx-auto gap-y-4 gap-x-4 px-4 md:px-0"}>

                {
                    props.content.stats.map((stat, index)=>{

                        return (

                            <div key={index} className={"relative p-[30px] bg-vm-blue h-full max-w-full rounded-[10px]"}>
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
    )
}