import { ResponsivePie } from '@nivo/pie'


const data = [
    {
      "id": "Bachelors",
      "label": "Bachelors",
      "value": 45.5,
    },
    {
      "id": "Masters",
      "label": "Masters",
      "value": 18.9,      
    },
    {
      "id": "Associates",
      "label": "Associates",
      "value": 13.7,
    },
    {
      "id": "High School",
      "label": "High School",
      "value": 13.2,
    },
    {
      "id": "Certificate",
      "label": "Certificate",
      "value": 6.8,
    }
  ]

export function Stats(props) {
    return (
        <div className="flex flex-col md:flex-row mx-auto mt-24 max-w-7xl px-6 sm:mt-56 lg:px-8">
            {/* Chart */}
            <div className="mx-auto h-[50vh] w-[50vw]">
                <h3 className="text-white text-center">Past Participants Breakdown</h3>
                <ResponsivePie
                    data={data}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'nivo' }}
                    borderWidth={1}
                    arcLinkLabelsTextColor="#ffffff"
                />
            </div>
            {/* HomeStats */}
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