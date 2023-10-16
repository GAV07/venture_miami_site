import {AiFillCheckCircle} from 'react-icons/ai'
import {Events} from "../home/events-and-socials/Events";
import {Socials} from "../home/events-and-socials/Socials";

// since md:flex-row-reverse not keeping the spacing when used, i'm using these for now
const contentComponent = (program)=>{

    return(
        <div className={`w-full py-4 lg:basis-[480px] lg:space-x-0 md:flex-row md:justify-center md:items-center xs:basis-1/2`}>
            <div className={"w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                <p className={'text-black text-[24px] font-bold'}>
                    {program.fields.title}
                </p>
                <p className={'text-[#566171] text-[18px]'}>
                    {program.fields.description}
                </p>
                {
                    program.fields.calloutTitle && (
                        <p className={'w-full text-center bg-[#eff7ff] text-[#007afc] text-[14px] px-[4px] py-[8px] rounded-[4px]'}>
                            {program.fields.calloutTitle}
                        </p>
                    )
                }
                <ul
                    role="list"
                    className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                >
                    {program.fields.callouts.map((callout, index) => (
                        <li key={index} className="flex gap-x-3">
                            <AiFillCheckCircle className="text-green-300 h-7 w-5 flex-none" aria-hidden="true" />
                            <p className="ml-3 text-sm text-gray-600">{callout.fields.text}</p>
                        </li>
                    ))}
                </ul>
                {

                    program.fields.button !== undefined &&
                    <div className="rounded-full shadow max-w-max">
                        <a
                            href={program.fields.button.fields.url}
                            className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-900"
                        >
                            {program.fields.button.fields.text}
                        </a>
                    </div>
                }
            </div>

        </div>
    )
};
const mediaComponent = ()=> {

    return (

        <div className={"relative lg:basis-[730px] xs:basis-1/2"}>
            {/*<img
                                src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio).webp"
                                // src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/651e8557b730b61ff947f814_homepage__search-p-1080.png"
                                // loading="lazy" width="730"
                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 42vw, 53vw"
                                alt=""
                                // srcSet="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio)-p-500.webp 500w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio)-p-800.webp 800w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio)-p-1080.webp 1080w, https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/650469400e6eca12e09a8949_Transparent%20iPad%20Pro%2011%E2%80%B3%20Space%20Gray%20Mockup%20(Mockuuups%20Studio).webp 1460w"
                            />*/}
            <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl">
                <source src="/videos/video.mp4" type="video/mp4"
                        // sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 42vw, 53vw"
                />
            </video>
        </div>
    )
}

export function Hero(props) {
    return (
        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>

                <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                    <h1 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">
                        {props.content.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue mb-[24px]">
                        {props.content.subtitle}
                    </p>
                </div>

                <div className={"w-full m-auto flex flex-col"}>

                    {
                        props.content.programs.map((program, index)=>{

                            return (
                                    // <div key={index} className={`mb-[140px] space-x-0 w-full overflow-hidden flex flex-col-reverse justify-center items-center ${(index >= 1 && (index+1) % 2 === 0) ? 'md:flex-row-reverse' : 'md:flex-row' } md:space-x-[70px] md:justify-between md:items-center`}>
                                    <div key={index} className={`mb-[140px] space-x-0 w-full overflow-hidden flex flex-col-reverse justify-center  items-center md:flex-row md:space-x-[70px] md:justify-between md:items-center`}>


                                        { index % 2 === 0 ? contentComponent(program) : mediaComponent() }

                                        { index % 2 === 0 ? mediaComponent() : contentComponent(program) }

                                    </div>

                                )
                        })

                    }

                </div>

            </div>
        </div>


    )
}