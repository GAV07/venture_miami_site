import React, {Fragment, useEffect, useState} from 'react'

const colors = [

    "bg-green-100",
    "bg-pink-100",
    "bg-yellow-200"
]


export default function PartnershipInfo(props) {


    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[90%] m-auto xl:w-[85%]"}>
                <div className={"m-auto"}>
                    <h1 className="text-[28px] md:text-[36px] font-bold text-[#0e1012] mb-3">
                        {props.content.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                        {props.content.subtitle}
                    </p>
                </div>

                <div className={"w-full m-auto flex flex-col mt-[80px]"}>
                    {props.content.contentBlock.map((content, index) => {

                        return (
                            <div key={index}
                                 className={`mb-[45px] md:mb-[140px] space-x-0 w-full overflow-hidden flex flex-col justify-center  items-center md:flex-row  md:space-x-[70px] md:justify-between md:items-center`}>

                                {/*<div className={`relative lg:basis-[730px] xs:basis-1/2 ${index % 2 === 0 ? 'order-last bg-red-200' : 'order-first bg-yellow-2'}`}>*/}
                                <div className={`relative lg:basis-[730px] xs:basis-1/2`}>
                                    {

                                        <img
                                        src={content.fields.images[0].fields.file.url}
                                        alt=""
                                        className={'w-full h-full rounded-[15px]'}
                                        />
                                    }
                                </div>

                                <div
                                    className={`w-full py-4 lg:basis-[480px] lg:space-x-0 md:flex-row md:justify-center md:items-center xs:basis-1/2`}>
                                    <div
                                        className={"w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                        <p className={'text-black text-[24px] font-bold'}>{content.fields.title}</p>
                                        <p className={'text-[#A0AABA] text-[16px]'}>{content.fields.subtitle}</p>
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