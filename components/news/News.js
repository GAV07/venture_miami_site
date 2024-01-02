import React, {useEffect, useState} from "react";
import Section from "../Section";
import DateManager from "../../services/DateManager";

export default function News(props) {

    const [news, setNews] = useState(props.content);

    return (


        <>

            {
                /* IF NO NEWS AVAILABLE */
                props.content.length <= 0 ?

                    <Section>
                        <div className={"flex flex-col justify-center items-start space-y-10"}>
                            <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                                Looks like there aren't any news</h1>
                        </div>
                    </Section>

                    :
                    <Section>
                            <div className={""}>
                                <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                                    {props.content.title}
                                </h1>
                                <p className="text-[16px] md:text-[20px] leading-8">
                                    {props.content.subtitle}
                                </p>
                            </div>
                            <div
                                className="w-full mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-20">
                                {news.map((news) => {

                                    const date = news.fields.Date;

                                    const dateManager = new DateManager(date);
                                    let fullDate = dateManager.getFullDate();

                                    return (

                                        <a href={`/news/${news.fields.Title.trim().toLowerCase().split(" ").join("-")}`}
                                           key={news.id} className={``}>

                                            {/* IMAGE */}
                                            <div className={`w-full aspect-[1/1]`}>
                                                <img
                                                    src={news.fields.ImageUrl}
                                                    alt=""
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            {/* CONTENT */}
                                            <div className={'w-full flex flex-col gap-y-2'}>

                                                {/* DETAILS */}
                                                <div className="w-full">
                                                    <h3 className="mt-3 text-lg font-semibold text-black">
                                                        {news.fields.Title}
                                                    </h3>
                                                    {/*<p className="mt-5 text-lg leading-6 text-gray-600">{news.fields.Description}</p>*/}
                                                </div>

                                                {/* TAGS */}
                                                <div className={'flex justify-start items-center gap-x-2'}>
                                                    {
                                                        news.fields.Tag1 &&
                                                        <p
                                                            className="relative rounded-full px-2 py-1 font-medium text-gray-600 bg-gray-100 text-xs"
                                                        >
                                                            {news.fields.Tag1}
                                                        </p>
                                                    }

                                                    {
                                                        news.fields.Tag2 &&
                                                        <p
                                                            className="relative rounded-full px-2 py-1 font-medium text-gray-600 bg-gray-100 text-xs"
                                                        >
                                                            {news.fields.Tag2}
                                                        </p>
                                                    }

                                                    {
                                                        news.fields.Tag3 &&
                                                        <p
                                                            className="relative rounded-full px-2 py-1 font-medium text-gray-600 bg-gray-100 text-xs"
                                                        >
                                                            {news.fields.Tag3}
                                                        </p>
                                                    }
                                                </div>

                                                {/* DATE */}
                                                <p className="text-black text-xs">
                                                    {fullDate}
                                                </p>

                                            </div>
                                        </a>
                                    )

                                })}
                            </div>
                        </Section>
            }

        </>

    )

}