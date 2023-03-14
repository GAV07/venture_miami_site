import { VictoryGroup, VictoryTheme, VictoryPie } from 'victory'



export function Stats(props) {
    return (
        <div className="flex flex-col md:flex-row mx-auto mt-24 max-w-7xl px-6 sm:mt-56 lg:px-8">
            {/* Chart */}
            <div className="mx-auto w-[90vw] md:w-[50vw]">
                <h3 className="text-white text-center">Past Participants Breakdown</h3>
                <VictoryPie
                    style={{labels: {fontSize: 10, fill: "white"}}}
                    padding={100}
                    animate={{duration: 400}}
                    colorScale={[
                        "#003f5c",
                        "#2f4b7c",
                        "#665191",
                        "#a05195",
                        "#d45087",
                        "#f95d6a",
                        "#ff7c43",
                        "#ffa600"
                      ]}
                    data={[
                        { x: "Bachelors", y: 45.5 },
                        { x: "Masters", y: 18.9 },
                        { x: "Associate", y: 13.7 },
                        { x: "High School", y: 13.2 },
                        { x: "Certificate", y: 6.8 },
                    ]}
                    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                />
            </div>
            {/* Stats */}
            <div>
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <h2 className="text-base font-semibold leading-8 text-indigo-400">{props.content.lead}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {props.content.title}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        {props.content.subtitle}
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {props.content.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                            <dt className="text-sm leading-6">{stat.fields.title}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight">{stat.fields.statistic}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}