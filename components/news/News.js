import React, {useEffect, useState} from "react";
import Section from "../Section";

export default function News(props) {

    const [sortedNews, setSortedNews] = useState([]);

    useEffect(() => {

        let sortedNews = props.content.sort((event1, event2) => {
            return new Date(event1.fields.Date) - new Date(event2.fields.Date)
        });

        console.log(props.content)

        setSortedNews(sortedNews)

        console.log(sortedNews)

    }, [])

    const transformDate = (newsDate)=>{

        let date = new Date(newsDate);

        const year = date.getFullYear();
        const month = date.toLocaleString('default', {month: 'short'});
        const day = date.getDate();

        return month + ' ' + day + ', ' + year;
    }

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
                    <div className={"w-full m-auto pt-20"}>
                        <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-10"}>
                            <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>
                                <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                                    News
                                    {props.content.title}
                                </h1>
                                <p className="text-[16px] md:text-[20px] leading-8">
                                    {props.content.subtitle}
                                </p>
                            </div>
                            <div
                                className="w-full mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-20">
                                {props.content.map((post) => (

                                    <a href={`/news/${post.fields.Title.trim().toLowerCase().split(" ").join("-")}`}
                                       key={post.id} className={``}>

                                        {/* IMAGE */}
                                        <div className={`w-full aspect-[1/1]`}>
                                            <img
                                                src={post.fields.ImageUrl}
                                                alt=""
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        {/* CONTENT */}
                                        <div className={'w-full flex flex-col gap-y-2'}>

                                            {/* DETAILS */}
                                            <div className="w-full">
                                                <h3 className="mt-3 text-lg font-semibold text-black">
                                                    {post.fields.Title}
                                                </h3>
                                                {/*<p className="mt-5 text-lg leading-6 text-gray-600">{post.fields.Description}</p>*/}
                                            </div>

                                            {/* TAGS */}
                                            <div className={'flex justify-start items-center gap-x-2'}>
                                                {
                                                    post.fields.Tag1 &&
                                                    <p
                                                        className="relative rounded-full px-2 py-1 font-medium text-gray-600 bg-gray-100 text-xs"
                                                    >
                                                        {post.fields.Tag1}
                                                    </p>
                                                }

                                                {
                                                    post.fields.Tag2 &&
                                                    <p
                                                        className="relative rounded-full px-2 py-1 font-medium text-gray-600 bg-gray-100 text-xs"
                                                    >
                                                        {post.fields.Tag2}
                                                    </p>
                                                }

                                                {
                                                    post.fields.Tag3 &&
                                                    <p
                                                        className="relative rounded-full px-2 py-1 font-medium text-gray-600 bg-gray-100 text-xs"
                                                    >
                                                        {post.fields.Tag3}
                                                    </p>
                                                }
                                            </div>

                                            {/* DATE */}
                                            <p className="text-black text-xs">
                                                {transformDate(post.fields.Date)}
                                            </p>

                                        </div>
                                    </a>

                                ))}
                            </div>
                        </div>
                    </div>
            }

        </>

    )

}