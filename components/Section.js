const Section = ({children}) => {

    return (

        <div className={"w-full m-auto pt-20"}>
            <div className={"w-[95%] mx-auto"}>
                <div className={"w-full pt-6 border-solid border-t-[1px] border-black flex flex-col justify-center items-start gap-y-10"}>
                    {children}
                </div>
            </div>
        </div>
    )
}


export default Section;