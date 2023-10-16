import Values from "./Values.js";
import {Community} from "./Community";
import {Achievements} from "./Achievements";

export function Hero(props) {
    return (
        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>
                <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                    <h1 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">
                        Fostering a Miami that works for <span className={"italic bg-vm-blue text-white"}>Everyone</span>
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                        Venture Miami is an office within the City of Miami focused on improving the City's standard of
                        living through the creation of jobs, support for innovation, increase in wealth, and an overall
                        improvement in the quality of life.
                    </p>
                </div>

                {/*<div className={"pl-4 pr-4 mt-24 flex flex-col space-y-[20px]"}>*/}
                <div className={"mt-24 flex flex-col space-y-[20px]"}>

{/*                    <div className={"rounded-md"}>
                        <img
                            src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min.png"
                            loading="lazy"
                            srcSet="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-500.png 500w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-800.png 800w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-1080.png 1080w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-1600.png 1600w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-2000.png 2000w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min.png 2621w"
                            // sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 45vw, 46vw"
                            alt=""
                            className="rounded-[16px]"/>

                    </div>

                    <div className={"flex flex-col space-x-0 space-y-[20px] md:flex-row justify-center items-center md:space-x-[40px] md:space-y-0"}>

                        <div className={"rounded-md"}>
                            <img
                                src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min.png"
                                loading="lazy"
                                srcSet="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-500.png 500w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-800.png 800w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-1080.png 1080w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-1600.png 1600w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-2000.png 2000w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min.png 2621w"
                                // sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 45vw, 46vw"
                                alt=""
                                className="rounded-[16px]"/>

                        </div>

                        <div>
                            <img
                                src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min.png"
                                loading="lazy"
                                srcSet="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-500.png 500w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-800.png 800w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-1080.png 1080w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-1600.png 1600w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-2000.png 2000w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min.png 2621w"
                                // sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 45vw, 46vw"
                                alt=""
                                className="rounded-[16px]"/>

                        </div>
                    </div>*/}

                    {/*<div className={"bg-[url('https://images.unsplash.com/photo-1501509497947-782640bc1412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWlhbWklMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60')] bg-no-repeat bg-cover rounded-md w-full max-h-[725px] h-[725px]"}>*/}
                    {/*<div className={"bg-[url('https://images.unsplash.com/photo-1501509497947-782640bc1412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWlhbWklMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60')] bg-no-repeat bg-cover rounded-md w-full xl:h-[725px] lg:h-[570px] md:h-[430px] sm:h-[360px] h-[260px]"}>*/}
                    <div className={`rounded-md w-full
                            min-[1270px]:h-[725px] 
                                min-[1147px]:h-[657px]
                            min-[1024px]:h-[609px] 
                                min-[896px]:h-[551px]
                            min-[768px]:h-[493px]
                                min-[704px]:h-[435px] 
                            min-[640px]:h-[377px] 
                            h-[260px]`}>
                       <img
                            src="https://images.unsplash.com/photo-1501509497947-782640bc1412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWlhbWklMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
                            // loading="lazy"
                            // srcSet="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-500.png 500w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-800.png 800w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-1080.png 1080w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-1600.png 1600w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-2000.png 2000w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min.png 2621w"
                            // sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 45vw, 46vw"
                            alt=""
                            className="rounded-[16px] w-full h-full"/>

                    </div>

{                    <div className={"flex flex-col space-x-0 space-y-[20px] md:flex-row justify-center items-center md:space-x-[40px] md:space-y-0"}>

                            <div className={`rounded-md w-full
                                min-[1270px]:h-[360px] 
                                    min-[1147px]:h-[347px]
                                min-[1024px]:h-[333px] 
                                    min-[896px]:h-[320px]
                                min-[768px]:h-[306px]
                                    min-[704px]:h-[435px] 
                            min-[640px]:h-[377px] 
                            h-[260px]`}>
                            <img
                                src="https://images.unsplash.com/photo-1501509497947-782640bc1412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWlhbWklMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
                                loading="lazy"
                                // srcSet="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-500.png 500w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-800.png 800w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-1080.png 1080w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-1600.png 1600w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-2000.png 2000w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min.png 2621w"
                                // sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 45vw, 46vw"
                                alt=""
                                className="rounded-[16px] w-full h-full"/>

                        </div>

    <div className={`rounded-md w-full
                                min-[1270px]:h-[360px] 
                                    min-[1147px]:h-[347px]
                                min-[1024px]:h-[333px] 
                                    min-[896px]:h-[320px]
                                min-[768px]:h-[306px]
                                    min-[704px]:h-[435px] 
                            min-[640px]:h-[377px] 
                            h-[260px]`}>
        <img
            src="https://images.unsplash.com/photo-1501509497947-782640bc1412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWlhbWklMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            loading="lazy"
            // srcSet="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-500.png 500w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-800.png 800w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-1080.png 1080w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-1600.png 1600w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min-p-2000.png 2000w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6509dbe6db1994a390ce19f2_Unboxed_Helsinki_crop-min.png 2621w"
            // sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 45vw, 46vw"
            alt=""
            className="rounded-[16px] w-full h-full"/>

    </div>
                    </div>}
                </div>

                {/*<div className={"pl-4 pr-4 pt-16 grid grid-cols-2 md:grid-cols-3 gap-y-[60px]"}>*/}
                <div className={"pt-16 grid grid-cols-2 md:grid-cols-3 gap-y-[60px]"}>
                    <div className={"mr-[32px] max-w-[300px]"}>
                        <p className={"lg:text-[32px] md:text-[28px] text-[24px] text-[#0e1012] font-bold mb-[16px]"}>700+ million</p>
                        <p className={"text-[16px] text-[#566171]"}>Monthly Active Users touch our maps.</p>
                    </div>
                    <div className={"mr-[32px] max-w-[300px]"}>
                        <p className={"lg:text-[32px] md:text-[28px] text-[24px] text-[#0e1012] font-bold mb-[16px]"}>700+ million</p>
                        <p className={"text-[16px] text-[#566171]"}>Monthly Active Users touch our maps.</p>
                    </div>
                    <div className={"mr-[32px] max-w-[300px]"}>
                        <p className={"lg:text-[32px] md:text-[28px] text-[24px] text-[#0e1012] font-bold mb-[16px]"}>700+ million</p>
                        <p className={"text-[16px] text-[#566171]"}>Monthly Active Users touch our maps.</p>
                    </div>
                    <div className={"mr-[32px] max-w-[300px]"}>
                        <p className={"lg:text-[32px] md:text-[28px] text-[24px] text-[#0e1012] font-bold mb-[16px]"}>700+ million</p>
                        <p className={"text-[16px] text-[#566171]"}>Monthly Active Users touch our maps.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}
