import Values from "./Values.js";
import Community from "./Community";
import {Achievements} from "./Achievements";

export function Hero(props) {

    return (
/*
        <div className={'w-full pt-16 bg-vm-blue pb-[40px] text-white'}>
            <div className={"max-w-[80%] mx-auto w-[80%] m-auto text-center"}>
                <h1 className="text-[36px] md:text-[56px] font-bold mb-3">
                    {props.content.title}
                </h1>
                <p className="text-[16px] md:text-[20px] leading-8">
                    {props.content.subtitle}
                </p>
            </div>
        </div>
*/


        <div className={"w-full m-auto pt-16 bg-vm-blue text-white"}>

            <div className={"w-[90%] m-auto xl:w-[85%]"}>
                <div className={"max-w-[80%] mx-auto w-[80%] m-auto text-center"}>
                    <h1 className="text-[36px] md:text-[56px] font-bold text-darkGray mb-3">
                        {props.content.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-lightGray leading-8 text-vm-blue">
                        {props.content.subtitle}
                    </p>
                </div>

                <div className={"mt-24 flex flex-col space-y-[20px]"}>
                    <div >
                        <img
                            src={props.content.backgroundImage.fields.file.url}
                            loading="lazy"
                            alt=""
                            className="rounded-[16px] w-full h-full"/>

                    </div>

                    {/* <div
                        className={"flex flex-col space-x-0 space-y-[20px] md:flex-row justify-center items-center md:space-x-[40px] md:space-y-0"}>

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
                    </div> */}
                </div>

            </div>

        </div>

    )
}