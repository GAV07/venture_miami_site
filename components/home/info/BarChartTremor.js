import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import {useState} from "react";

const dataFormatter = (number, category) => {

    return Intl.NumberFormat("us").format(number/1000).toString() + "k";
};

export default function BarChartTremor({chartInfo, title, subtitle, categories, colors}) {
    const [value, setValue] = useState(null);

    return (

        <div className={``}>
            <Title>{title}</Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
            <BarChart
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
