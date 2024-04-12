import Section from "../Section";
import ContentBlocks from "../ContentBlocks";

export default function PartnershipInfo(props) {


    return (

        <Section>

            <div className={""}>
                <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                    {props.content.title}
                </h1>
                <p className="text-[16px] md:text-[20px] leading-8">
                    {props.content.subtitle}
                </p>
            </div>

            <ContentBlocks contentBlock={props.content.contentBlock}/>

        </Section>
    )
}