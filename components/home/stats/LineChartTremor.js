import { Card, Title, LineChart, Subtitle } from "@tremor/react";
import {useState} from "react";

const dataFormatter = (number) => {
    return "$" + Intl.NumberFormat("us").format(number).toString();
};


export default function LineChartTremor({chartInfo, title, subtitle, categories, colors}) {
    const [value, setValue] = useState(null);
    return (

        <div className={``}>
            <Title>{title}</Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
            <LineChartTremor
                className="mt-6"
                data={chartInfo}
                index="name"
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
