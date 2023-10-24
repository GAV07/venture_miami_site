import React, {useState} from "react";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {FaLinkedin, FaTwitter} from "react-icons/fa";

export default function AboutDetails(props){

    const [team, setTeam] = useState(props.content.team);
    const [index, setIndex] = useState(props.content.index);

    return (

        <div className={"relative"}>

            <div className={`relative right-0 flex justify-between items-center z-[2] w-full ease-in duration-300
            
            h-[60vh]

        
        `}>

                <img
                    src={team[index].fields.image.fields.file.url}
                    className={`absolute top-0 left-0 w-full object-cover
                   max-h-full h-full

                `}
                />
                {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50 mix-blend-overlay">
            </div>*/}

                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="w-full h-full bg-black bg-opacity-40"></div>
                </div>

                <div className={"relative w-[90%] mx-auto mt-auto mb-[50px] flex flex-col space-y-[40px]"}>
                    <h2 className="text-white text-[14px] leading-[1em] w-[300px]">
                        {team[index].fields.jobTitle}
                    </h2>
                    <p className={"text-[30px] font-bold text-white"}>{team[index].fields.name}</p>
                </div>


            </div>


            <div className={"relative w-[90%] mx-auto mt-[50px] flex flex-col space-y-[70px] mb-[40px]"}>
                <h2 className="text-vm-blue text-[16px] leading-[1em]">
                    About {team[index].fields.name.split(" ")[0]}
                </h2>
                <p className={"text-[16px]"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className={"flex gap-x-[20px]"}>
                    <a className="flex justify-center items-center rounded-full w-[40px] h-[40px]" href={team[index].fields.linkedIn}>
                        <FaLinkedin size={20} color={"#0A66C2"}/>
                    </a>
                    <a className="flex justify-center items-center rounded-full w-[40px] h-[40px]" href={team[index].fields.twitter}>
                        <FaTwitter size={20} color={"#1D9BF0"}/>
                    </a>
                </div>
            </div>

            <div className={"w-[90%] mx-auto flex justify-between items-center"}>

                {/* IF PREVIOUS EVENT EXISTS */}
                <div>

                    {
                        index - 1 >= 0 && (


                            <a
                                href={`/about/${team[index - 1].fields.name.toLowerCase().split(" ").join("-")}`}
                                className={"flex items-center space-x-[10px]"}
                            >
                                <BsChevronLeft/>
                                <span>
                                    <h2 className={"text-[14px] text-start"}>{team[index -1].fields.jobTitle}</h2>

                                <p className={"text-[12px] text-start"}>

                                    {team[index - 1].fields.name}

                                </p>
                                </span>
                            </a>

                        )
                    }
                </div>


                {/* IF NEXT EVENT EXISTS */}
                <div>

                    {
                        index + 1 < team.length && (


                            <a
                                href={`/about/${team[index + 1].fields.name.toLowerCase().split(" ").join("-")}`}
                                className={"flex items-center space-x-[10px]"}
                            >
                                <span>
                                    <h2 className={"text-[14px] text-end"}>{team[index + 1].fields.jobTitle}</h2>

                                <p className={"text-[12px] text-end"}>

                                    {team[index + 1].fields.name}

                                </p>
                                </span>
                                <BsChevronRight/>
                            </a>

                        )
                    }
                </div>
            </div>
        </div>
    )
}