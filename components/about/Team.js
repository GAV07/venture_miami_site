import Link from 'next/link'
import {TeamCard} from "./TeamCard";
import {FaLinkedin, FaTwitter} from "react-icons/fa"
import React, {useState} from "react";
import {BsArrowRight} from "react-icons/bs";

export function Team(props) {

    const [teamInfo, setTeamInfo] = useState(null);

    return (

        <div className={"w-full m-auto pt-20"}>

            <div className={"w-[95%] mx-auto"}>
                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>

                </div>

                <div className={"mx-auto w-full text-center"}>

                    {
                        props.content.map((teamSection) => {

                            return (

                                <div className={'w-full'}>
                                    {/* TEAM */}
                                    <div className={"w-full mx-auto text-left"}>
                                        <h1 className="text-[36px] md:text-[56px] font-light mb-3 underline decoration-[1.5px]">
                                            {teamSection.header.fields.title}
                                        </h1>
                                        <p className="text-[16px] md:text-[20px] leading-8">
                                            {teamSection.header.fields.subtitle}
                                        </p>
                                    </div>

                                    <div
                                        className="grid grid-cols-1 md:grid-cols-3 md: gap-x-[40px] gap-y-[40px] pt-[40px]"
                                        // className="grid grid-cols-2 md1:grid-cols-3 pt-[80px]"
                                    >
                                        {teamSection.members.map((member, index) => {


                                            // alert( member.fields.name + " " + member.fields.image.fields.file.url)
                                            return (
                                                <div key={index} className={"flex flex-col space-y-[10px]"}>

                                                    <img src={`${member.fields.image.fields.file.url}`} alt=""
                                                         className={`w-full object-cover
                            min-[1270px]:h-[360px]
                            min-[1209px]:h-[322px]
                            min-[1148px]:h-[284px]
                            min-[1087px]:h-[246px]
                            min-[1026px]:h-[208px]
                            min-[768px]:h-[230px]
                            h-[375px]

                            `}/>

                                                    <div className={"flex flex-col h-auto space-y-[20px]"}>
                                                        <h2 className={"text-[20px]"}>{member.fields.name}</h2>
                                                        <p className={"text-[14px] text-lightGray"}>{member.fields.jobTitle}</p>
                                                        <div className={"flex gap-x-[20px]"}>
                                                            <a className="flex justify-center items-center rounded-full w-[40px] h-[40px]"
                                                               href={member.fields.linkedIn}>
                                                                <FaLinkedin size={20} color={"#0A66C2"}/>
                                                            </a>
                                                            <a className="flex justify-center items-center rounded-full w-[40px] h-[40px]"
                                                               href={member.fields.twitter}>
                                                                <FaTwitter size={20} color={"#1D9BF0"}/>
                                                            </a>
                                                        </div>
                                                        {/*<a href={`/about/${member.fields.name.trim().toLowerCase().split(" ").join("-")}`} className={"max-w-max text-[14px] text-vm-blue flex items-center space-x-[20px] mt-auto"}><span>About {member.fields.name}</span> <BsArrowRight size={14}/></a>*/}
                                                    </div>

                                                </div>)
                                        })}
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
  