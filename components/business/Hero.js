import Link from "next/link";

export function Hero(props) {

    return (


        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>
                <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                    <h1 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">
                        {props.content.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                        {props.content.subtitle}
                    </p>
                </div>

                <div className={"grid grid-cols-1 md:grid-cols-4 md:gap-x-[32px] pt-16"}>
                    {props.content.stats.map((info, index) => {
                        return (
                            <div className={"mb-[32px]  md:mr-[32px] w-full text-center"}>
                                <h3 className={"max-w-max mx-auto text-[24px] md:text-[28px] mb-[8px] leading-[32px] text-[#007AFC] font-bold"}>
                                    <a href={info.fields.url}>{info.fields.statistic}</a>
                                </h3>
                                <p className={"font-[16px] max-w-max mx-auto mb-[8px] text-[#566171] leading-[24px]"}>
                                    <a href={info.fields.url}>{info.fields.title}</a>
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
}
