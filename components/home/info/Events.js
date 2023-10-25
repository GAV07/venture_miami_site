import React, {useCallback, useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"

import Autoplay from 'embla-carousel-autoplay'

export function Events(props) {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla relative" ref={emblaRef}>
            <div className="embla__container">

                {
                    props.content
                        .filter((item) => {
                            return item.fields.Show === "Yes"
                        }) // filter only the ones we want to show
                        .sort((item1, item2) => {
                            return item1.fields.Date > item2.fields.Date
                        }) // sort by date
                        .slice(0, 4) // only keep 4 items
                        .map((item) => { // display the 4 items

                            return (
                                <div className="embla__slide max-h-[500px]">

                                    <div className={"shadow-md shadow-slate-200 rounded-[10px] h-full flex flex-col"}>
                                        <div className={"h-full h-[60%]"}>
                                            <img
                                                src={'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                                                alt=""
                                                className="rounded-t-[10px]"
                                            />
                                        </div>

                                        <div className={"flex flex-col justify-center items-center px-[24px] py-[32px] bg-white w-full h-[40%] rounded-b-[10px]"}>
                                            <p className={"self-start text-[16px] font-bold text-[#007AFC] mb-[8px]"}>{item.fields.Date}</p>
                                            <p className={"text-[20px] text-center font-bold text-[#0e1012]"}>{item.fields.Name}</p>
                                            <p className={"text-[16px] text-center text-[#566171]"}>{item.fields.Description}</p>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                }

            </div>

            <div className={"w-full flex justify-center items-center space-x-10 space-y-5"}>
                <button className="embla__prev"
                        onClick={scrollPrev}><BsFillArrowLeftCircleFill size={40}/></button>
                <button className="embla__next"
                        onClick={scrollNext}><BsFillArrowRightCircleFill size={40}/></button>

            </div>
        </div>
    )
}
