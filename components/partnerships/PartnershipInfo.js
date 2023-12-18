import React, {Fragment, useEffect, useState} from 'react'

const colors = [

    "bg-green-100",
    "bg-pink-100",
    "bg-yellow-200"
]


export default function PartnershipInfo(props) {


    return (

        <div className={"w-full m-auto pt-20"}>

            <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-10"}>
                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>
                    <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                        {props.content.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] leading-8">
                        {props.content.subtitle}
                    </p>
                </div>

                <div className={"w-full mx-auto flex flex-col mt-[30px]"}>
                    {props.content.contentBlock.map((content, index) => {

                        return (
                            <div key={index}
                                 className={`flex justify-between items-start flex-col-reverse gap-y-10 gap-x-10 pb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-y-0`}>

                                <div className={`md:w-1/2 w-full h-full rounded-md aspect-[1/1]`}>
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
                                        className={"md:w-[65%] w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                        <p className={'text-black text-[2.25rem] font-light underline decoration-[1.5px]'}>{content.fields.title}</p>
                                        <p className={'text-black text-[1rem]'}>{content.fields.subtitle}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>


        </div>


    )
}