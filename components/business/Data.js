export default function Incentives(props) {

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[90%] m-auto xl:w-[85%]"}>

                {/* SECTION TITLE */}
                <div className={"max-w-[656px] w-[80%]"}>
                    <h1 className="text-[28px] md:text-[36px] md:text-[36px] font-bold text-[#0e1012] mb-[40px]">
                        {props.content.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                        {props.content.subtitle}
                    </p>
                </div>


                {/* SECTION IMAGES */}
                <div className={"mb-[80px]"}>
                    <div
                        className={"flex flex-col space-x-0 space-y-[20px] md:flex-row justify-center items-center md:space-x-[40px] md:space-y-0"}>

                        {
                            props.content.images.map((image, index)=>{

                                return (

                                    <div key={index} className={"w-full w-[620px] h-[420px] h-full"}>
                                        <img
                                            src={image.fields.file.url}
                                            loading="lazy"
                                            alt=""
                                            className="rounded-[16px] w-full h-full object-cover"/>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-full gap-x-10 flex flex-wrap">
                    {
                        props.content.contentBlock.map((section, index) => {

                            return (

                                <div key={index} className={"max-w-[400px]"}>

                                            <div className={"max-w-[350px] w-full flex flex-col"}>
                                                <p className={"font-[20px] font-bold text-[#23262d] md:font-[18px] mb-[8px]"}>{section.fields.title}</p>
                                                <p className={"font-[16px] text-[#566171] leading-[24px]"}>{section.fields.subtitle}</p>
                                                <p className={"py-[20px] mt-auto"}>
                                                    {
                                                        section.fields.buttons.map((button, index)=>{

                                                            return (

                                                                <a key={index} className={"text-vm-blue"} href={button.fields.url}>{button.fields.text}</a>
                                                            )

                                                        })
                                                    }
                                                </p>
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
