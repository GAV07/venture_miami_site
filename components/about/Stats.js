export default function Stats(props) {


    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[90%] m-auto xl:w-[85%]"}>
                <div className={"pt-16 grid grid-cols-2 md:grid-cols-3 gap-y-[60px]"}>

                    {
                        props.content.stats.map((stat, index)=>{

                            return (

                                <div key={index} className={"mr-[32px] max-w-[300px]"}>
                                    <p className={"lg:text-[32px] md:text-[28px] text-[24px] text-[#0e1012] font-bold mb-[16px]"}>{stat.fields.statistic}</p>
                                    <p className={"text-[16px] text-[#566171]"}>{stat.fields.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}