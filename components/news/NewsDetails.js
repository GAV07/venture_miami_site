import React, {useEffect, useState} from "react";
import {BsArrowLeft, BsChevronLeft, BsChevronRight} from "react-icons/bs";

export default function NewsDetails(props) {


    const [news, setNews] = useState(props.content.sortedNews);
    const [index, setIndex] = useState(props.content.index);
    const [post, setPost] = useState(null);


    // Skeleton loading when fetching news details
    if (!news) {
        return (

            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div
                    className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-indigo-600 h-4 w-32 bg-slate-200 rounded animate-pulse"></p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl h-4 w-60 bg-slate-200 rounded animate-pulse"></h1>
                                <p className="mt-6 h-40 bg-slate-200 rounded animate-pulse"></p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:right-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] h-[300px] bg-slate-200 animate-pulse"
                            src=""
                            alt=""
                        />
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">

                                <h2 className="mt-16 h-4 w-60 bg-slate-200 rounded animate-pulse"></h2>
                                <p className="mt-8 h-40 w-90 bg-slate-200 rounded animate-pulse"></p>

                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <div className="h-4 w-20 bg-slate-200 rounded animate-pulse"></div>
                                        <span className={"h-4 w-96 bg-slate-200 rounded animate-pulse"}>
                                             <strong className=""></strong>
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <div className="h-4 w-20 bg-slate-200 rounded animate-pulse"></div>
                                        <span className={"h-4 w-96 bg-slate-200 rounded animate-pulse"}>
                                            <strong className=""></strong>
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <div className="h-4 w-20 bg-slate-200 rounded animate-pulse"></div>
                                        <span className={"h-4 w-96 bg-slate-200 rounded animate-pulse"}>
                                            <strong className=""></strong>
                                        </span>
                                    </li>
                                </ul>

                                <h2 className="mt-16 h-4 w-60 bg-slate-200 rounded animate-pulse"></h2>
                                <p className="mt-8 h-40 w-90 bg-slate-200 rounded animate-pulse"></p>

                                <h2 className="mt-16 h-4 w-60 bg-slate-200 rounded animate-pulse"></h2>
                                <p className="mt-8 h-40 w-90 bg-slate-200 rounded animate-pulse"></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    return (

        <>


            {/*<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">*/}
            <div className={"w-[95%] mx-auto flex flex-col gap-y-10 pt-20"}>

                <a href={"/news"} className={"mt-[30px] max-w-max text-[14px] text-white ring-1 ring-[#161A1D] bg-[#161A1D] flex items-center space-x-[20px] py-[10px] px-[30px]"}><BsArrowLeft size={14}/><span>All news</span></a>

                <div
                    className="pt-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 bg-vm-blue max-w-max text-white italic">{news[index].fields.SubTitle}</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{news[index].fields.Title}</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700 italic first-letter:text-4xl">
                                    {news[index].fields.Description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-ml-12 -mt-12 p-12 sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src={news[index].fields.ImageUrl}
                            alt=""
                        />
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                    {news[index].fields.P1Title}
                                </h2>
                                <p className="mt-8">
                                    {news[index].fields.P1Content}
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600 list-disc">
                                    <li className="flex gap-x-3">
                                                    <span>
                                                        <strong
                                                            className="font-semibold text-gray-900">{news[index].fields.Point1} </strong>
                                                        {news[index].fields.Point1Content}
                                                    </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                                    <span>
                                                        <strong
                                                            className="font-semibold text-gray-900">{news[index].fields.Point2} </strong>
                                                        {news[index].fields.Point2Content}
                                                    </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                                    <span>
                                                        <strong
                                                            className="font-semibold text-gray-900">{news[index].fields.Point3} </strong>
                                                        {news[index].fields.Point3Content}
                                                    </span>
                                    </li>
                                </ul>

                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                    {news[index].fields.P2Title}
                                </h2>
                                <p className="mt-8">
                                    {news[index].fields.P2Content}
                                </p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                    {news[index].fields.P3Title}
                                </h2>
                                <p className="mt-6">
                                    {news[index].fields.P3Content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"w-full flex justify-between items-center"}>

                    {/* IF PREVIOUS EVENT EXISTS */}
                    <div>

                        {
                            index - 1 >= 0 && (


                                <a
                                    href={`/news/${news[index - 1].fields.Title.toLowerCase().split(" ").join("-")}`}
                                    className={"flex items-center space-x-[10px]"}
                                >
                                    <BsChevronLeft/>
                                    <span>
                                    <h2 className={"text-[14px] text-start"}>Prev</h2>

                                <p className={"text-[12px]"}>

                                    {news[index - 1].fields.Title}

                                </p>
                                </span>
                                </a>

                            )
                        }
                    </div>


                    {/* IF NEXT EVENT EXISTS */}
                    <div>

                        {
                            index + 1 < news.length && (


                                <a
                                    href={`/news/${news[index + 1].fields.Title.toLowerCase().split(" ").join("-")}`}
                                    className={"flex items-center space-x-[10px]"}
                                >
                                <span>
                                    <h2 className={"text-[14px] text-end"}>Next</h2>

                                <p className={"text-[12px]"}>

                                    {news[index + 1].fields.Title}

                                </p>
                                </span>
                                    <BsChevronRight/>
                                </a>

                            )
                        }
                    </div>
                </div>
            </div>

        </>


    )
}
