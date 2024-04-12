import {BsArrowRightShort} from "react-icons/bs";
import React from "react";

let ContentBlocks = ({contentBlock})=>{

    return(

                <div className={"w-full m-auto flex flex-col"}>
                    {contentBlock.map((content, index) => {

                        return (
                            <div key={index}
                                 className={`flex justify-between items-start flex-col-reverse gap-y-10 gap-x-10 pb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-y-0`}>

                                <div className={`md:w-1/2 w-full h-full aspect-[1/1]`}>
                                    {
                                        <img
                                            src={content.fields.images[0].fields.file.url}
                                            alt=""
                                            className={'w-full h-full rounded-[2px] object-cover'}
                                        />
                                    }
                                </div>

                                <div
                                    className={`md:w-1/2 w-full text-[2.5rem]`}>
                                    <div
                                        className={"md:w-[80%] w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                        <p className={'text-black text-[2.25rem] font-light'}>{content.fields.title}</p>
                                        <p className={'text-black text-[1rem]'}>{content.fields.subtitle}</p>
                                        <div className={"flex justify-start items-center w-full gap-x-[30px]"}>
                                            <a href={"/business"} className={"text-[14px] text-vm-blue font-[500] border-solid border-[1.5px] border-vm-blue px-[10px] py-[4px] rounded-full flex items-center gap-x-[7px]"}><span>Get Started</span> <BsArrowRightShort color={"#3F47FF"} size={20}/></a>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        )
                    })}
                </div>
    )
}

export default ContentBlocks;