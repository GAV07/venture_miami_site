export default function Stats(props) {

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>

                <div className={"flex flex-col md:flex-row md:gap-x-[32px]"}>
                    {props.content.stats.map((stat, index) => {
                        return (
                            <a href={stat.fields.url} className={"mb-[32px]  md:mr-[32px] w-full text-center"}>
                                <h3 className={"max-w-max mx-auto text-[24px] md:text-[28px] mb-[8px] leading-[32px] text-vm-blue font-bold"}>
                                    {stat.fields.statistic}
                                </h3>
                                <p className={"font-[16px] max-w-max mx-auto mb-[8px] text-[#566171] leading-[24px]"}>
                                    {stat.fields.title}
                                </p>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}