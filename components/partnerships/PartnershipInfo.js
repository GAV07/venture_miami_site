import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {BLOCKS, MARKS} from "@contentful/rich-text-types";

const Bold = ({children}) => <p className="bold">{children}</p>;

const H2 = ({children}) => <h2 className="mt-6 mb-2 text-2xl underline">{children}</h2>;

const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
    },
};

import React, {Fragment, useEffect, useState} from 'react'
import {Tab} from '@headlessui/react'

const colors = [

    "bg-green-100",
    "bg-pink-100",
    "bg-yellow-200"
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function PartnershipInfo(props) {


    const [partnerships, setPartnerships] = useState([]);

    useEffect(() => {

        formatPartnershipText();
        console.log(partnerships);


    }, []);

    let formatPartnershipText = () => {

        const size = props.content.mainText.content.length;

        let array = [];

        for (let x = 1; x < size - 1; x += 2) {

            // every 2 item is both the heading and info (partnership type, info about the partnership type)
            // where x = the heading and x+1 is the info

            const contentSize = props.content.mainText.content[x].content.length;

            const partnership = props.content.mainText.content[x].content[contentSize - 1].value;
            if (partnership.toLowerCase() !== "announcements") { // skip announcements

                array.push(
                    {
                        partnership: props.content.mainText.content[x].content[contentSize - 1].value,
                        description: props.content.mainText.content[x + 1].content[0].value,
                        imageUrl: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg'
                    }
                );
            }

            setPartnerships(array);

        }

    }

    const contentComponent = (text) => {

        return (

            <div
                className={`w-full py-4 lg:basis-[480px] lg:space-x-0 md:flex-row md:justify-center md:items-center xs:basis-1/2`}>
                <div
                    className={"w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                    <p className={'text-black text-[24px] font-bold'}>{text.partnership}</p>
                    <p className={'text-[#A0AABA] text-[18px]'}>{text.description}</p>
                </div>
            </div>
        )
    }
    const mediaComponent = (url) => {

        return (

            <div className={"relative lg:basis-[730px] xs:basis-1/2"}>
                <img
                                src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio).webp"
                                // src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/651e8557b730b61ff947f814_homepage__search-p-1080.png"
                                // loading="lazy" width="730"
                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 42vw, 53vw"
                                alt=""
                                // srcSet="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio)-p-500.webp 500w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio)-p-800.webp 800w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio)-p-1080.webp 1080w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio).webp 1460w"
                />
                {/*<video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl">
                    <source src="/videos/video.mp4" type="video/mp4"
                        // sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 42vw, 53vw"
                    />
                </video>*/}
            </div>
        )
    }


    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>
                <div className={"m-auto"}>
                    <h1 className="text-[28px] md:text-[36px] font-bold text-[#0e1012] mb-3">
                        {props.content.leadIn}
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                        {props.content.title}
                    </p>
                </div>

                <div className={"w-full m-auto flex flex-col"}>
                    {partnerships.map((text, index) => {

                        return (
                            <div key={index}
                                 className={`mb-[140px] space-x-0 w-full overflow-hidden flex flex-col-reverse justify-center  items-center md:flex-row md:space-x-[70px] md:justify-between md:items-center`}>

                                {index % 2 === 0 ? contentComponent(text) : mediaComponent(text.imageUrl)}

                                {index % 2 === 0 ? mediaComponent(text.imageUrl) : contentComponent(text)}

                            </div>
                        )
                    })}
                </div>

            </div>


        </div>


    )
}