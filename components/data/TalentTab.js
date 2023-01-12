import { PieDash } from './charts/PieChart'
import { Stats } from './Stats'

export function TalentTab({data}) {
    console.log(data)
    return (
        <div className="flex flex-col">
            <Stats data={data}/>
            <div className="w-64 h-64 p-10 bg-white rounded shadow">
                <PieDash />
            </div>
        </div>

    )
}