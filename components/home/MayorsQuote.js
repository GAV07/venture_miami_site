import {BiSolidQuoteAltLeft} from "react-icons/bi";
import StatsComponent from "../StatsComponent";

let MayorsQuote = (props)=>{


    return(
        <div className={"w-full m-auto pt-20"}>

            <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-10"}>
                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>

                    <div className={'w-full'}>
                        <p className={"w-full"}><BiSolidQuoteAltLeft size={50} color={"#3F47FF"}/></p>
                        <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                            {props.content.subtitle}
                        </h1>
                    </div>

                    <div className={'flex justify-end items-center max-h-max gap-x-4 italic'}>
                        <span className={'text-vm-blue text-[50px] flex justify-center items-center'}>-</span>
                        <p className="text-[16px] md:text-[20px] leading-8">
                            {props.content.title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MayorsQuote;