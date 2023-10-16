import { Card, Title, AreaChart, Subtitle } from "@tremor/react";
import {useState} from "react";

const dataFormatter = (number) => {
    return "$" + Intl.NumberFormat("us").format(number/1000000000).toString() + "b";
};

export default function BarChartTremor({chartInfo, title, subtitle, categories, colors}) {
    const [value, setValue] = useState(null);

    return (

        <div className={``}>
            <Title>{title}</Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
            <AreaChart
                className="h-72 mt-4"
                data={chartInfo}
                index="date"
                categories={categories}
                colors={colors}
                valueFormatter={dataFormatter}
                yAxisWidth={60}
                onValueChange={(v) => setValue(v)}
                connectNulls={true}
            />
        </div>
    )
}
