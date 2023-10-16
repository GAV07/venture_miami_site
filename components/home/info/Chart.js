// this component is an abstract component where properties are passed in
import React from 'react';
import LineChartTremor from './LineChartTremor'
import BarChartTremor from "./BarChartTremor";
import AreaChartTremor from "./AreaChartTremor";

/*

const getColor = (category) => {

    // based on the category (after it's hashed, generate a unique color for the graph
    let hash = 0;
    category.split('').forEach(char => {
        hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff
        colour += value.toString(16).padStart(2, '0')
    }
    return colour
}
*/


const getColor = (category) => {

    // based on the category (after it's hashed, generate a unique color for the graph
    let hash = 0;
    category.split('').forEach(char => {
        hash = char.charCodeAt(0) + ((hash << 5) - hash)
    });

    const colors = ["red", "blue", "pink", "green", "purple", "orange", "yellow"];

    const index = Math.abs(hash) % colors.length; // ensurers its a positive integer and returns a valid index

    return colors[index];
}


export default function Chart({category, data, chartType}) {

    const categories = [category];

    const colors = [getColor(category)]

    let chartData = data.map((item)=>{

        const itemData = {
            name: item.name
        };
        // itemData[name] = item.name;
        itemData[category] = item.growth;

        return itemData;
    });

    console.log(chartData);

    // creates a map of each chart type so we can easily get what chart needs to be displayed based on the ChartType property
    const chartTypes = new Map();
    // chartTypes.set("bar", <BarChart chartInfo={data} options={options}/>);
    chartTypes.set("bar", <BarChartTremor chartInfo={chartData} /*title={title} subtitle={subtitle} */categories={[category]} colors={colors}/>);
    // chartTypes.set("line", <LineChartTremor chartInfo={chartData} options={options}/>);
    // chartTypes.set("line", <LineChartTremor chartInfo={chartData} title={title} subtitle={subtitle} categories={categories} colors={colors}/>);
    // chartTypes.set("pie", <PieChart chartInfo={chartData} options={options}/>);
    // chartTypes.set("doughnut", <DoughnutChart chartInfo={chartData} options={options}/>);
    // chartTypes.set("scatter", <ScatterChart chartInfo={chartData} options={options}/>);
    chartTypes.set("area", <AreaChartTremor chartInfo={chartData} categories={[category]} colors={colors}/>);



    // return <></>
    return chartTypes.has(chartType) && chartTypes.get(chartType);


}
