import Link from 'next/link'
import {TeamCard} from "./TeamCard";
import {FaLinkedin, FaTwitter} from "react-icons/fa"
import {useState} from "react";

export function Team(props) {

    const [teamInfo, setTeamInfo] = useState(null);

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>
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
                    className="flex flex-wrap md1:flex-wrap md1:justify-start items-stretch pt-[80px]"
                    // className="grid grid-cols-2 md1:grid-cols-3 pt-[80px]"
                >
                    {props.content.team.teammates.map((person) => (
                        <button key={person.fields.name}
                            className={"flex flex-col justify-stretch rounded-t-[10px] basis-1/2 md1:basis-1/4 pb-[20px] pl-[20px] pr-[20px]"}
                            onClick={()=>{ setTeamInfo({
                                name: person.fields.name,
                                title: person.fields.jobTitle,
                                description: "Before stepping into his role as Chief Executive Officer in March 2021, Peter served as Senior Vice President of Engineering at Mapbox. He focused on defining and building search, map, navigation, and logistic services, building scalable distributed systems, and operating services at a large scale.&nbsp; Before stepping into his role as Chief Executive Officer in March 2021, Peter served as Senior Vice President of Engineering at Mapbox. He focused on defining and building search, map, navigation, and logistic services, building scalable distributed systems, and operating services at a large scale.&nbsp; Before stepping into his role as Chief Executive Officer in March 2021, Peter served as Senior Vice President of Engineering at Mapbox. He focused on defining and building search, map, navigation, and logistic services, building scalable distributed systems, and operating services at a large scale.&nbsp;",
                                imageUrl: person.fields.image.fields.file.url,
                                twitter: person.fields.twitter,
                                linkedIn: person.fields.linkedIn
                            }) }}
                        >
                            <img className="aspect-[14/13] w-full rounded-t-[10px] object-cover"
                                 src={person.fields.image.fields.file.url} alt={person.fields.image.fields.fileName}/>
                            <div className={"self-stretch h-full px-3 pb-3 flex flex-col gap-y-1 rounded-b-[10px] bg-white shadow-md"}>
                                <p className="mt-6 text-[20px] text-[#23262d] font-bold leading-8">{person.fields.name}</p>
                                <p className="text-[12px] leading-7 text-[#566171] uppercase">{person.fields.jobTitle}</p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* ADVISORS */}
                <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                    <h1 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">
                        {props.content.advisors.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                        {props.content.advisors.subtitle}
                    </p>
                </div>

                <div
                    className="flex flex-wrap md1:flex-wrap md1:justify-start md:1items-stretch pt-[80px]"
                >
                    {props.content.advisors.teammates.map((person) => (
                        <button key={person.fields.name}
                                className={"flex flex-col justify-stretch rounded-t-[10px] basis-1/2 md1:basis-1/4 pb-[20px] pl-[20px] pr-[20px]"}
                                onClick={()=>{ setTeamInfo({
                                    name: person.fields.name,
                                    title: person.fields.jobTitle,
                                    description: "Before stepping into his role as Chief Executive Officer in March 2021, Peter served as Senior Vice President of Engineering at Mapbox. He focused on defining and building search, map, navigation, and logistic services, building scalable distributed systems, and operating services at a large scale.&nbsp; Before stepping into his role as Chief Executive Officer in March 2021, Peter served as Senior Vice President of Engineering at Mapbox. He focused on defining and building search, map, navigation, and logistic services, building scalable distributed systems, and operating services at a large scale.&nbsp; Before stepping into his role as Chief Executive Officer in March 2021, Peter served as Senior Vice President of Engineering at Mapbox. He focused on defining and building search, map, navigation, and logistic services, building scalable distributed systems, and operating services at a large scale.&nbsp;",
                                    imageUrl: person.fields.image.fields.file.url,
                                    twitter: person.fields.twitter,
                                    linkedIn: person.fields.linkedIn
                                }) }}
                        >
                            <img className="aspect-[14/13] w-full rounded-t-[10px] object-cover"
                                 src={person.fields.image.fields.file.url} alt={person.fields.image.fields.fileName}/>
                            <div className={"self-stretch h-full px-3 pb-3 flex flex-col gap-y-1 rounded-b-[10px] bg-white shadow-md"}>
                                <p className="mt-6 text-[20px] text-[#23262d] font-bold leading-8">{person.fields.name}</p>
                                <p className="text-[12px] leading-7 text-[#566171] uppercase">{person.fields.jobTitle}</p>
                            </div>
                        </button>
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
  