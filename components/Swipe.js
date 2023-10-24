import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function Swipe() {
    return (
            <Swiper
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    {/*<img src={'https:swiperjs.com/images/n4w-logo.svg'} alt="slide_image" />*/}
                <div className={"w-full h-full shadow-md shadow-slate-200 rounded-[8px] flex flex-col"}>
                         <div className={"h-full h-[60%]"}>
                             <img
                                 src={'https:images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                                 alt=""
                                 className="rounded-t-[10px]"
                             />
                         </div>

                         <div className={"flex flex-col justify-center items-center px-[24px] py-[32px] bg-white w-full h-[40%] rounded-b-[10px]"}>
                             <p className={"self-start text-[16px] font-bold px-[8px] py-[4px] rounded-[4px] bg-[#eff7ff] text-[#007AFC] mb-[8px]"}>{"item.fields.Date"}</p>
                             <p className={"text-[20px] text-center font-bold text-[#0e1012]"}>{"item.fields.Name"}</p>
                             <p className={"text-[16px] text-center text-[#566171]"}>{"item.fields.Description"}</p>
                         </div>
                     </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={"w-full h-full shadow-md shadow-slate-200 rounded-[8px] flex flex-col"}>
                         <div className={"h-full h-[60%]"}>
                             <img
                                 src={'https:images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                                 alt=""
                                 className="rounded-t-[10px]"
                             />
                         </div>

                         <div className={"flex flex-col justify-center items-center px-[24px] py-[32px] bg-white w-full h-[40%] rounded-b-[10px]"}>
                             <p className={"self-start text-[16px] font-bold px-[8px] py-[4px] rounded-[4px] bg-[#eff7ff] text-[#007AFC] mb-[8px]"}>{"item.fields.Date"}</p>
                             <p className={"text-[20px] text-center font-bold text-[#0e1012]"}>{"item.fields.Name"}</p>
                             <p className={"text-[16px] text-center text-[#566171]"}>{"item.fields.Description"}</p>
                         </div>
                     </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={"w-full h-full shadow-md shadow-slate-200 rounded-[8px] flex flex-col"}>
                         <div className={"h-full h-[60%]"}>
                             <img
                                 src={'https:images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                                 alt=""
                                 className="rounded-t-[10px]"
                             />
                         </div>

                         <div className={"flex flex-col justify-center items-center px-[24px] py-[32px] bg-white w-full h-[40%] rounded-b-[10px]"}>
                             <p className={"self-start text-[16px] font-bold px-[8px] py-[4px] rounded-[4px] bg-[#eff7ff] text-[#007AFC] mb-[8px]"}>{"item.fields.Date"}</p>
                             <p className={"text-[20px] text-center font-bold text-[#0e1012]"}>{"item.fields.Name"}</p>
                             <p className={"text-[16px] text-center text-[#566171]"}>{"item.fields.Description"}</p>
                         </div>
                     </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={"w-full h-full shadow-md shadow-slate-200 rounded-[8px] flex flex-col"}>
                         <div className={"h-full h-[60%]"}>
                             <img
                                 src={'https:images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                                 alt=""
                                 className="rounded-t-[10px]"
                             />
                         </div>

                         <div className={"flex flex-col justify-center items-center px-[24px] py-[32px] bg-white w-full h-[40%] rounded-b-[10px]"}>
                             <p className={"self-start text-[16px] font-bold px-[8px] py-[4px] rounded-[4px] bg-[#eff7ff] text-[#007AFC] mb-[8px]"}>{"item.fields.Date"}</p>
                             <p className={"text-[20px] text-center font-bold text-[#0e1012]"}>{"item.fields.Name"}</p>
                             <p className={"text-[16px] text-center text-[#566171]"}>{"item.fields.Description"}</p>
                         </div>
                     </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={"w-full h-full shadow-md shadow-slate-200 rounded-[8px] flex flex-col"}>
                         <div className={"h-full h-[60%]"}>
                             <img
                                 src={'https:images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                                 alt=""
                                 className="rounded-t-[10px]"
                             />
                         </div>

                         <div className={"flex flex-col justify-center items-center px-[24px] py-[32px] bg-white w-full h-[40%] rounded-b-[10px]"}>
                             <p className={"self-start text-[16px] font-bold px-[8px] py-[4px] rounded-[4px] bg-[#eff7ff] text-[#007AFC] mb-[8px]"}>{"item.fields.Date"}</p>
                             <p className={"text-[20px] text-center font-bold text-[#0e1012]"}>{"item.fields.Name"}</p>
                             <p className={"text-[16px] text-center text-[#566171]"}>{"item.fields.Description"}</p>
                         </div>
                     </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={"w-full h-full shadow-md shadow-slate-200 rounded-[8px] flex flex-col"}>
                         <div className={"h-full h-[60%]"}>
                             <img
                                 src={'https:images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                                 alt=""
                                 className="rounded-t-[10px]"
                             />
                         </div>

                         <div className={"flex flex-col justify-center items-center px-[24px] py-[32px] bg-white w-full h-[40%] rounded-b-[10px]"}>
                             <p className={"self-start text-[16px] font-bold px-[8px] py-[4px] rounded-[4px] bg-[#eff7ff] text-[#007AFC] mb-[8px]"}>{"item.fields.Date"}</p>
                             <p className={"text-[20px] text-center font-bold text-[#0e1012]"}>{"item.fields.Name"}</p>
                             <p className={"text-[16px] text-center text-[#566171]"}>{"item.fields.Description"}</p>
                         </div>
                     </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={"w-full h-full shadow-md shadow-slate-200 rounded-[8px] flex flex-col"}>
                         <div className={"h-full h-[60%]"}>
                             <img
                                 src={'https:images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80'}
                                 alt=""
                                 className="rounded-t-[10px]"
                             />
                         </div>

                         <div className={"flex flex-col justify-center items-center px-[24px] py-[32px] bg-white w-full h-[40%] rounded-b-[10px]"}>
                             <p className={"self-start text-[16px] font-bold px-[8px] py-[4px] rounded-[4px] bg-[#eff7ff] text-[#007AFC] mb-[8px]"}>{"item.fields.Date"}</p>
                             <p className={"text-[20px] text-center font-bold text-[#0e1012]"}>{"item.fields.Name"}</p>
                             <p className={"text-[16px] text-center text-[#566171]"}>{"item.fields.Description"}</p>
                         </div>
                     </div>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
    );
}
