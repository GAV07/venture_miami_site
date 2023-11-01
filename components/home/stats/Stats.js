import Image from "next/image"
import {useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Dropdown from "./Dropdown";
import Chart from "./Chart";
import {BiSolidQuoteAltLeft} from "react-icons/bi";

export default function Stats(props) {

    const [chartOptions, setChartOptions] = useState(["VC Funding", "Investors"]);
    const [currentChartOption, setCurrentChartOption] = useState("VC Funding");


/*    let charts = new Map();
    charts.set("VC Funding", <Chart category={"VC Funding"} data={props.content.founders.filteredFundingData}
                                    chartType={"area"}/>)
    charts.set("Investors", <Chart category={"Investors"} data={props.content.founders.filteredInvestorsData}
                                   chartType={"bar"}/>)*/

    return (
        <div className={"w-full m-auto pt-16"}>
            <div className={"w-[90%] m-auto xl:w-[85%]"}>

                <div className={"max-w-[730px] mx-auto"}>
                    <p className={"w-full"}><BiSolidQuoteAltLeft size={50} color={"#3F47FF"}/></p>
                    <p className="text-center mb-[24px] font-bold text-[#23262d] text-[24px] leading-[30px]">{props.content.header.fields.title}</p>
                    <p className="mt-2 text-[16px] text-[#566171] font-light text-center">
                        {props.content.header.fields.subtitle}
                    </p>
                </div>

                <div className={"flex  pt-16"}>
                    {props.content.stats.map((info, index) => {
                        return (
                            <div key={index} className={"mb-[32px]  md:mr-[32px] w-full text-center"}>
                                <h3 className={"text-[24px] md:text-[28px] mb-[8px] leading-[32px] text-vm-blue font-bold"}>{info.fields.statistic}</h3>
                                <p className={"font-[16px] mb-[8px] text-[#566171] leading-[24px]"}>{info.fields.title}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Chart */}
                {/*<div className={"m-auto hidden sm:mt-20 sm:flex sm:flex-col sm:justify-center sm:gap-y-10"}>*/}
                {/*<div className={"m-auto mt-20 flex flex-col justify-center gap-y-10"}>

                    <Dropdown selections={chartOptions} handleSelection={(selection) => {
                        setCurrentChartOption(selection)
                    }}/>

                    <div>
                        {charts.get(currentChartOption)}
                    </div>

               </div>*/}

            </div>
        </div>
    )

}
