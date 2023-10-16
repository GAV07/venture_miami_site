

export default function Event(){

    return(

        <div className={"flex justify-center gap-x-10 items-center bg-purple-100"}>
            {/*EVENT 1*/}
            <div className={"basis-1/3 flex flex-col h-[calc(100%_+_100rem)] bg-red-200 "}>

                <div className={"relative bg-yellow-200 min-h-[140px] min-w-[140px] max-h-[450px] max-w-[450px]"}>
                    <img
                        className={"object-cover h-full w-full"}
                        src={"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"}
                    />
                    <div className={"absolute top-3 right-3 bg-white px-4 py-1 flex flex-col justify-center items-center leading-tight"}>
                        <p className={"uppercase font-bold"}>Sep</p>
                        <p className={"text-2xl font-bold"}>18</p>
                    </div>
                </div>

                <div className={"bg-green-200 py-4 w-full"}>
                    <p className={"text-sm font-bold"}>
                        Title
                    </p>
                    <p className={"text-xs text-gray-400 font-bold"}>Sep 17, 2023</p>
                </div>
            </div>

        </div>
    )
}