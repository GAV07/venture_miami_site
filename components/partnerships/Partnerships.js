export default function Partnerships(){

    return(

        <div className={"w-full bg-vm-blue flex flex-col p-20"}>
            <div className={"flex flex-col justify-center items-center"}>
                <img width={130} height={130} src={"/images/logos/miami-logo-solid-yellow.png"}/>
                <p className={"text-white text-8xl tracking-tight"}>Our <span className={"text-pink-200"}>Partners</span></p>
            </div>

            <div className={"w-full flex flex-wrap justify-center items-center gap-y-2 mt-10 gap-x-2"}>

                {/*<div className={"basis-1/2 xs:basis-1/3 sm:basis-1/4 bg-white p-1 rounded-full"}>*/}
                <div className={"w-[150px] h-[50px] bg-white p-[7px] rounded-full flex justify-center items-center"}>
                    <img
                        className="col-span-2 h-full w-[50%] m-auto object-contain sm:col-start-2 lg:col-span-1"
                        src="/images/logos/citizenm.png"
                        alt="SavvyCal"
                    />
                </div>

                {/*<div className={"basis-1/2 xs:basis-1/3 sm:basis-1/4 bg-white p-1 rounded-full"}>*/}
                <div className={"w-[150px] h-[50px] bg-white p-[7px] rounded-full flex justify-center items-center"}>
                    <img
                        className="col-span-2 h-full w-[50%] m-auto object-contain sm:col-start-2 lg:col-span-1"
                        src="/images/logos/fiu.png"
                        alt="SavvyCal"
                    />
                </div>

                {/*<div className={"basis-1/2 xs:basis-1/3 sm:basis-1/4 bg-white p-1 rounded-full"}>*/}
                <div className={"w-[150px] h-[50px] bg-white p-[7px] rounded-full flex justify-center items-center"}>
                    <img
                        className="col-span-2 h-full w-[50%] m-auto object-contain sm:col-start-2 lg:col-span-1"
                        src="/images/logos/shrimp-society.png"
                        alt="SavvyCal"
                    />
                </div>

                {/*<div className={"basis-1/2 xs:basis-1/3 sm:basis-1/4 bg-white p-1 rounded-full"}>*/}
                <div className={"w-[150px] h-[50px] bg-white p-[7px] rounded-full flex justify-center items-center"}>
                    <img
                        className="col-span-2 h-full w-[50%] m-auto object-contain sm:col-start-2 lg:col-span-1"
                        src="/images/logos/linkedin.png"
                        alt="SavvyCal"
                    />
                </div>

                {/*<div className={"basis-1/2 xs:basis-1/3 sm:basis-1/4 bg-white p-1 rounded-full"}>*/}
                <div className={"w-[150px] h-[50px] bg-white p-[7px] rounded-full flex justify-center items-center"}>
                    <img
                        className="col-span-2 h-full w-[50%] m-auto object-contain sm:col-start-2 lg:col-span-1"
                        src="/images/logos/aws.png"
                        alt="SavvyCal"
                    />
                </div>
            </div>
        </div>
    )

}