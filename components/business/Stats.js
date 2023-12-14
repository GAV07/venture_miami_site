import StatsComponent from "../StatsComponent";

export default function Stats(props) {

    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto"}>
                <div className={'py-20'}>
                    <StatsComponent stats={props.content.stats}/>
                </div>
            </div>
        </div>
    )
}