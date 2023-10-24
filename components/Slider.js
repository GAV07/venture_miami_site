import React, {useCallback, useEffect, useState} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"

import Autoplay from 'embla-carousel-autoplay'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

export function Slider({items, styles, buttonPosition, autoplay}) {

    const [plugins, setPlugins] = useState([autoplay && Autoplay()]);
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className={`embla relative ${styles}`} ref={emblaRef}>

            <div className={`embla__container ${styles}`}>

                {
                    items.map((item, index)=>{

                        const component = item["type"];
                        return (

                            <div key={index} className={`embla__slide ${styles}`}>
                                {component}
                            </div>
                            );
                    })
                }


            </div>

            {
                buttonPosition && (

                    // <div className={"embla__button__container flex justify-center items-center space-x-10 space-y-5"}>
                    <div className={"embla__button__container"}>
                        <div className={`embla__button__side visibility ${styles}`}>
                            <button className="embla__prev rounded-full bg-[#f7f9fc] w-[44px] h-[44px] text-center flex justify-center items-center" onClick={scrollPrev}><IoIosArrowBack size={30} color={"#566171"}/></button>
                            <button className="embla__next rounded-full bg-[#f7f9fc] w-[44px] h-[44px] text-center flex justify-center items-center" onClick={scrollNext}><IoIosArrowForward size={30} color={"#566171"}/></button>
                        </div>
                        <div className={`embla__button__bottom visibility ${styles}`}>
                            <button className="embla__prev rounded-full bg-[#f7f9fc] w-[44px] h-[44px] text-center flex justify-center items-center" onClick={scrollPrev}><IoIosArrowBack size={30} color={"#566171"}/></button>
                            <button className="embla__next rounded-full bg-[#f7f9fc] w-[44px] h-[44px] text-center flex justify-center items-center" onClick={scrollNext}><IoIosArrowForward size={30} color={"#566171"}/></button>
                        </div>
                        <div className={`embla__button__bottom-right visibility ${styles}`}>
                            <button className="embla__prev rounded-full bg-[#f7f9fc] w-[44px] h-[44px] text-center flex justify-center items-center" onClick={scrollPrev}><IoIosArrowBack size={30} color={"#566171"}/></button>
                            <button className="embla__next rounded-full bg-[#f7f9fc] w-[44px] h-[44px] text-center flex justify-center items-center" onClick={scrollNext}><IoIosArrowForward size={30} color={"#566171"}/></button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
