export default function Stats(props) {

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>

                <div className={"grid grid-cols-1 md:grid-cols-4 md:gap-x-[32px] pt-16"}>
                    {props.content.stats.map((stat, index) => {
                        return (
                            <div className={"mb-[32px]  md:mr-[32px] w-full text-center"}>
                                <h3 className={"max-w-max mx-auto text-[24px] md:text-[28px] mb-[8px] leading-[32px] text-[#007AFC] font-bold"}>
                                    <a href={stat.fields.url}>{stat.fields.statistic}</a>
                                </h3>
                                <p className={"font-[16px] max-w-max mx-auto mb-[8px] text-[#566171] leading-[24px]"}>
                                    <a href={stat.fields.url}>{stat.fields.title}</a>
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}