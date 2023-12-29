import React, {useEffect, useState} from "react";
import StyleManager from "../services/StyleManager";
import {useRouter} from "next/router";

let HeroComponent = ({title, subtitle, buttons, imageURL, videoURL, content, rowDirection = true}) => {

    const [styles, setStyles] = useState(null);

    const router = useRouter();

    useEffect(() => {


        const path = router.pathname.split('/')[1]; // gets the path

        const styleManager = new StyleManager(path);
        setStyles(styleManager.getStyles());

    }, []);


    return (

        /*
                <div className={`w-full pt-60 pb-10 ${styles && `${'bg-'+styles.backgroundColor} ${'text-'+styles.textColor.color}` }`}>

                    <div className={`w-[95%] mx-auto flex ${rowDirection ? 'flex-col md:flex-row' : 'flex-col'} justify-center items-start gap-y-14`}>
                        <div className={`w-[100%] flex flex-col justify-start items-start`}>
                            <div className={`${rowDirection ?  'md:w-[90%] w-full' : 'mx-auto w-[100%]'}`}>
                                <h1 className="leading-[-0.01em] text-[43px] md:text-[55px] md:leading-[-3.2px] lg:text-[73px] lg:leading-[100%] mb-3 font-spline font-extrabold" style={{WebkitTextStroke: `2px ${styles && `${styles.textColor.hexColor}` }`, color: "transparent"}}>
                                    {title}
                                </h1>
                                {
                                    subtitle && (
                                        <p className="text-[18px] md:text-[20px] lg:text-[28px] leading-8">
                                            {subtitle}
                                        </p>
                                    )
                                }

                                {
                                    buttons && (

                                        <div className={"flex justify-start items-center gap-x-10 w-full"}>
                                            {
                                                buttons.map((button, index)=>{

                                                    return (

                                                        <a key={index} href={button.fields.url} className={"cursor-pointer text-[14px] md:text-[16px] px-[20px] py-[12px] rounded-full text-white bg-vm-blue font-semibold"}>{button.fields.text}</a>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        {
                            ( imageURL || videoURL || content ) && (

                                <div className={`w-full mx-auto ${rowDirection ? 'aspect-[1/1] md:ml-[16px] ml-0' : 'aspect-[16/9]'}`}>
                                    {
                                        imageURL && <img
                                            src={imageURL}
                                            // src={"https://images.ctfassets.net/y0vtnt98mulh/3pQ6jfYvBTBGtILn3JfNB1/8d48dc7445ca6ab85a7f1cee3aafd095/TSS-058.jpg"}
                                            loading="lazy"
                                            alt=""
                                            className={`rounded-[0px] w-full h-full object-cover`}/>
                                    }

                                    {
                                        videoURL && <video
                                            src={videoURL}
                                            className={`rounded-[2px] w-full h-full object-cover`}/>
                                    }

                                    {
                                        content && content
                                    }

                                </div>
                            )
                        }
                    </div>
                </div>

        */


        /* <div className={`w-full h-screen flex justify-center items-center`}>

             {/!*MEDIA*!/}
             <div className={`basis-[70%] w-full mx-auto h-full`}>


                 {
                     ( imageURL || videoURL || content ) && (

                         <div className={`relative w-full mx-auto h-full`}>
                             {
                                 imageURL && <img
                                     src={imageURL}
                                     // src={"https://images.ctfassets.net/y0vtnt98mulh/3pQ6jfYvBTBGtILn3JfNB1/8d48dc7445ca6ab85a7f1cee3aafd095/TSS-058.jpg"}
                                     loading="lazy"
                                     alt=""
                                     className={`rounded-[0px] w-full h-full object-cover`}/>
                             }

                             {
                                 videoURL && <video
                                     src={videoURL}
                                     className={`rounded-[2px] w-full h-full object-cover`}/>
                             }

                             {
                                 content && content
                             }

                             <div className={'z-[3] flex flex-col justify-end items-center absolute top-0 left-0 w-full h-full'}>
                                 <h1 className={`mb-10 text-white w-[80%] mx-auto leading-[-0.01em] text-[35px] md:text-[54px] md:leading-[-3.2px] lg:text-[73px] lg:leading-[100%] mb-3 font-spline font-extrabold`}>
                                     {title}
                                 </h1>
                             </div>

                             <div className={`z-[2] absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-black opacity-[30%]`}></div>

                         </div>
                     )
                 }
             </div>

             {/!* CONTENT *!/}
             <div className={`basis-[40%] ${styles && `${'bg-'+styles.backgroundColor} ${'text-'+styles.textColor.color}` } w-full h-full flex flex-row justify-start items-start`}>
                 <div className={`w-[80%] mx-auto pt-20`}>
                     {
                         subtitle && (
                             <p className="text-right text-[15px] md:text-[20px] lg:text-[20px] leading-8 font-medium">
                                 {subtitle}
                             </p>
                         )
                     }

                     {
                         buttons && (

                             <div className={"flex justify-start items-center gap-x-10 w-full"}>
                                 {
                                     buttons.map((button, index)=>{

                                         return (

                                             <a key={index} href={button.fields.url} className={"cursor-pointer text-[14px] md:text-[16px] px-[20px] py-[12px] rounded-full text-white bg-vm-blue font-semibold"}>{button.fields.text}</a>
                                         )
                                     })
                                 }
                             </div>
                         )
                     }
                 </div>
             </div>


         </div>*/


        <div
            className={`w-full pb-10 ${(imageURL || videoURL || content) && 'md:h-screen'} ${styles && `${'bg-' + styles.backgroundColor} ${'text-' + styles.textColor.color}`}`}>


            <div
                className={'relative w-[95%] md:pt-28 pt-40 h-full mx-auto flex flex-col md:flex-row justify-center items-end md:gap-y-0 gap-y-10 '}>

                {/* CONTENT */}
                <div
                    className={`${(imageURL || videoURL || content) && 'md:w-[40%]'} w-full h-full flex flex-row justify-start items-start`}>
                    <div className={`w-full h-full mx-auto flex flex-col justify-between items-between`}>
                        <h1 className={`${(imageURL || videoURL || content) && 'md:pt-28 z-[2] md:absolute top-0 left-0'} md:w-[80%] w-full leading-[-0.01em] text-[47px] md:text-[55px] md:leading-[-3.2px] lg:text-[73px] lg:leading-[100%] mb-3 font-spline font-extrabold`}>
                            {title}
                        </h1>

                        <div className={'pr-10 w-full mt-auto'}>
                            {
                                subtitle && (
                                    <p className="text-[18px] md:text-[16px] lg:text-[18px] leading-8">
                                        {subtitle}
                                    </p>
                                )
                            }

                            {
                                buttons && (

                                    <div className={"flex justify-start items-center gap-x-10 w-full"}>
                                        {
                                            buttons.map((button, index) => {

                                                return (

                                                    <a key={index} href={button.fields.url}
                                                       className={"cursor-pointer text-[14px] md:text-[16px] px-[20px] py-[12px] rounded-full text-white bg-vm-blue font-semibold"}>{button.fields.text}</a>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                {/*MEDIA*/}
                {
                    (imageURL || videoURL || content) && (

                        <div className={`w-full md:w-[60%] md:ml-auto h-full flex justify-center items-start`}>


                            <div
                                className={`relative rounded-lg overflow-hidden w-full mx-auto md:h-[100%] sm:aspect-[16/9] aspect-[1/1]`}>
                                {
                                    imageURL && <img
                                        // src={imageURL}
                                        src={"https://images.ctfassets.net/y0vtnt98mulh/3pQ6jfYvBTBGtILn3JfNB1/8d48dc7445ca6ab85a7f1cee3aafd095/TSS-058.jpg"}
                                        loading="lazy"
                                        alt=""
                                        className={`rounded-[0px] w-full h-full object-cover`}/>
                                }

                                {
                                    videoURL && <video
                                        src={videoURL}
                                        className={`rounded-[2px] w-full h-full object-cover`}/>
                                }

                                {
                                    content && content
                                }

                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    )
}

export default HeroComponent;