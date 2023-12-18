import {useEffect, useState} from "react";
import StyleManager from "../services/StyleManager";
import {useRouter} from "next/router";

let HeroComponent = ({title, subtitle, buttons, imageURL, videoURL, content, rowDirection=true})=>{

    const [styles, setStyles] = useState(null);

    const router = useRouter();

    useEffect(() => {


        const path = router.pathname.split('/')[1]; // gets the path

        const styleManager = new StyleManager(path);
        setStyles(styleManager.getStyles());
    }, []);


    return(

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

    )
}

export default HeroComponent;