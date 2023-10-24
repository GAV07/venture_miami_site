import Link from 'next/link'
import {TeamCard} from "./TeamCard";
import {FaLinkedin, FaTwitter} from "react-icons/fa"
import React, {useState} from "react";
import {BsArrowRight} from "react-icons/bs";

export function Team(props) {

    const [teamInfo, setTeamInfo] = useState(null);

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[85%] m-auto xl:w-[85%]"}>
                {/* TEAM */}
                <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                    <h1 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">
                        {props.content.team.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                        {props.content.team.subtitle}
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 md: gap-x-[40px] gap-y-[40px] pt-[40px]"
                    // className="grid grid-cols-2 md1:grid-cols-3 pt-[80px]"
                >
                    {props.content.team.teammates.map((person) => (
                        <div className={"flex flex-col space-y-[10px]"}>

                            <img src={`${person.fields.image.fields.file.url}`} alt="" className={`w-full object-cover
                            min-[1270px]:h-[360px]
                            min-[1209px]:h-[322px]
                            min-[1148px]:h-[284px]
                            min-[1087px]:h-[246px]
                            min-[1026px]:h-[208px]
                            min-[768px]:h-[230px]
                            h-[375px]

                            `}/>

                            <div className={"flex flex-col space-y-[20px]"}>
                                <h2 className={"text-[20px]"}>{person.fields.name}</h2>
                                <p className={"text-[14px]"}>{person.fields.jobTitle}</p>
                                <a href={`/about/${person.fields.name.trim().toLowerCase().split(" ").join("-")}`} className={"max-w-max text-[14px] text-vm-blue flex items-center space-x-[20px]"}><span>About {person.fields.name}</span> <BsArrowRight size={14}/></a>
                            </div>

                        </div>
                    ))}
                </div>

                {/* ADVISORS */}
                <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center mt-[80px]"}>
                    <h1 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">
                        {props.content.advisors.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                        {props.content.advisors.subtitle}
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 md: gap-x-[40px] gap-y-[40px] pt-[40px]"
                    // className="grid grid-cols-2 md1:grid-cols-3 pt-[80px]"
                >
                    {props.content.advisors.teammates.map((person) => (
                        <div className={"flex flex-col space-y-[10px]"}>

                            <img src={`${person.fields.image.fields.file.url}`} alt="" className={`w-full object-cover
                            min-[1270px]:h-[360px]
                            min-[1209px]:h-[322px]
                            min-[1148px]:h-[284px]
                            min-[1087px]:h-[246px]
                            min-[1026px]:h-[208px]
                            min-[768px]:h-[230px]
                            h-[375px]

                            `}/>

                            <div className={"flex flex-col space-y-[20px]"}>
                                <h2 className={"text-[20px]"}>{person.fields.name}</h2>
                                <p className={"text-[14px]"}>{person.fields.jobTitle}</p>
                                <a href={`/about/${person.fields.name.trim().toLowerCase().split(" ").join("-")}`} className={"max-w-max text-[14px] text-vm-blue flex items-center space-x-[20px]"}><span>About {person.fields.name}</span> <BsArrowRight size={14}/></a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>



            {
                teamInfo && (

                    <div>
                        <div className={"absolute top-0 left-0 w-full h-full bg-[#767779]/60 z-[1000]"}></div>


                        <div className={"fixed top-1/2 left-1/2 z-[2000] -translate-x-1/2 -translate-y-1/2  w-full w-[75%] md:max-w-[870px] h-[600px] md:h-[550px] pt-[40px] pb-[40px] pr-[40px] pl-[40px] bg-white rounded-[25px] flex flex-col justify-center items-center space-y-[20px] md:flex-row md:justify-start md:items-start md:space-x-[40px]"}>

                            <div className={" w-full max-w-[250px] "}>
                                <img alt="" loading="eager"
                                     src={teamInfo.imageUrl}
                                     sizes="100vw"
                                     className="rounded-[10px]"/>
                            </div>

                            <div className={"w-full overflow-hidden"}>
                                <div className={"mb-[10px] flex space-x-[10px] items-center"}>
                                    <p className={"text-[#23262d] text-[24px] font-bold"}>{teamInfo.name}</p>
                                    <div className={"flex justify-center items-center space-x-[10px]"}>
                                        <Link
                                            className="group shadow-lg flex justify-center items-center rounded-full w-[38px] h-[38px] bg-white transition-transform hover:scale-105"
                                            href={teamInfo.twitter}>
                                            <FaTwitter size={18} color={"#1D9BF0"}/>
                                        </Link>
                                        <Link
                                            className="group shadow-lg flex justify-center items-center rounded-full w-[38px] h-[38px] bg-white transition-transform hover:scale-105"
                                            href={teamInfo.linkedIn}>
                                            <FaLinkedin size={18} color={"#0A66C2"}/>
                                        </Link>
                                    </div>
                                </div>
                                <p className={"mb-[24px] text-[14px] font-medium uppercase text-[#566171]"}>{teamInfo.title}</p>

                                <div className={"overflow-y-scroll w-full max-h-[308px] pr-[20px]"}>
                                    <p className={"text-[15px] text-[#23262d]"}>{teamInfo.description}</p>
                                </div>

                                {/* POPUP CLOSE */}
                                <button
                                    className={"absolute z-[3000] top-[12px] bottom-auto left-auto right-[12px] pl-[0px] text-[#8b96aa]"}
                                    onClick={()=>{ setTeamInfo(null) }}
                                >
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0H32C36.4183 0 40 3.58172 40 8V40H0V0Z" fill="white"></path>
                                        <path d="M26 14L14 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M26 26L14 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                   )
            }
        </div>
    )
}
  