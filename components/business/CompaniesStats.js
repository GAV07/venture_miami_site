import Stats from "../Stats";

export default function CompaniesStats(props) {

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto"}>
                <div className={'py-20'}>
                    <Stats stats={props.content.stats}/>
                </div>
            </div>
        </div>
    )
}