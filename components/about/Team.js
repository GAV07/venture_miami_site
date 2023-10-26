import Link from 'next/link'
import {TeamCard} from "./TeamCard";
import {FaLinkedin, FaTwitter} from "react-icons/fa"
import React, {useState} from "react";
import {BsArrowRight} from "react-icons/bs";

export function Team(props) {

    console.log(props.content)
    const [teamInfo, setTeamInfo] = useState(null);

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[85%] m-auto xl:w-[85%]"}>
                {
                    props.content.map((teamSection)=>{

                        return (

                            <div>
                                {/* TEAM */}
                                <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                                    <h1 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">
                                        {teamSection.header.fields.title}
                                    </h1>
                                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                                        {teamSection.header.fields.subtitle}
                                    </p>
                                </div>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 md: gap-x-[40px] gap-y-[40px] pt-[40px]"
                                    // className="grid grid-cols-2 md1:grid-cols-3 pt-[80px]"
                                >
                                    {teamSection.members.map((member) => (
                                        <div className={"flex flex-col space-y-[10px]"}>

                                            <img src={`${member.fields.image.fields.file.url}`} alt="" className={`w-full object-cover
                            min-[1270px]:h-[360px]
                            min-[1209px]:h-[322px]
                            min-[1148px]:h-[284px]
                            min-[1087px]:h-[246px]
                            min-[1026px]:h-[208px]
                            min-[768px]:h-[230px]
                            h-[375px]

                            `}/>

                                            <div className={"flex flex-col space-y-[20px]"}>
                                                <h2 className={"text-[20px]"}>{member.fields.name}</h2>
                                                <p className={"text-[14px]"}>{member.fields.jobTitle}</p>
                                                <a href={`/about/${member.fields.name.trim().toLowerCase().split(" ").join("-")}`} className={"max-w-max text-[14px] text-vm-blue flex items-center space-x-[20px]"}><span>About {member.fields.name}</span> <BsArrowRight size={14}/></a>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
  