import {BiSolidQuoteAltLeft} from "react-icons/bi";
import StatsComponent from "../StatsComponent";
import Section from "../Section";

let MayorsQuote = (props)=>{


    return(
        <Section>

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
        </Section>

    )
}

export default MayorsQuote;