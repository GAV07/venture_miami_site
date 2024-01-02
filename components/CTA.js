import {BsArrowRight} from "react-icons/bs"
import React, {useEffect, useState} from "react";
import Section from "./Section";


export default function CTA({props, buttons, backgroundColor, textColor}) {

    const [buttonStyles, setButtonStyles] = useState(buttons);

    return (


        <Section>
            <div className={'flex flex-col gap-y-10 md:flex-row md:gap-y-0'}>
                {/* content */}
                <div className={'lg:w-1/2 md:w-2/3 h-full aspect-video'}>
                    <div className={'w-[80%]'}>
                        <p className={`mt-2 text-[56px] font-bold tracking-tight text-${textColor}`}>{props.content.title}</p>
                        <p className="mt-6 text-base leading-7 text-black">
                            {props.content.subtitle}
                        </p>
                        <div className="mt-8 flex justify-start items-center gap-x-3">
                            {
                                props.content.buttons.map((button, index) => {

                                    return (
                                        <button key={index}
                                                className={`rounded-md px-3.5 py-2.5 text-sm ${buttonStyles[index].text} ${buttonStyles[index].background} ${buttonStyles[index].ring}  text-sm font-semibold shadow-sm max-w-max`}>
                                            <a href={button.fields.url}
                                               className={"flex justify-between items-center w-full gap-x-10"}>
                                                <p>{button.fields.text}</p>
                                                <BsArrowRight size={20} fontWeight={20}/>
                                            </a>
                                        </button>

                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* image */}
                <div className={'relative lg:w-1/2 md:w-1/3 aspect-video'}>
                    <img
                        className="h-full w-full object-cover"
                        src={props.content.image.fields.file.url}
                        // src={"https://images.ctfassets.net/y0vtnt98mulh/3pQ6jfYvBTBGtILn3JfNB1/8d48dc7445ca6ab85a7f1cee3aafd095/TSS-058.jpg"}
                        alt=""
                    />
                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-${backgroundColor} to-vm-transparent opacity-[50%]`}></div>
                </div>
            </div>
        </Section>

    )
}
