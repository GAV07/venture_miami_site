import * as React from "react";
import {useEffect, useState} from "react";
import Link from 'next/link';
import TabsComponent from "../components/TabsComponent";

export default function FormComponent({props}) {

    const [sectionSelected, setSectionSelected] = useState("");

    console.log(props)
    const [forms, setForms] = useState([
        {
            label: 'Send requests and ideas',
            component:
                <iframe loading="eager" className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px]"
                        src="https://airtable.com/embed/app7M34O3rPHxQ9mB/shr1TcBO7ZwcpRrWV?backgroundColor=gray"
                        frameBorder="0" onmousewheel="" width="100%" height="100%"
                    // style="background: transparent; border: 1px solid #ccc;"
                >
                </iframe>

        },  {
            label: 'Founder looking to grow',
            component:
                <iframe loading="eager" className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px]"
                        src="https://airtable.com/embed/appU24wxHJtwLEMq4/shrkRDDFLh4XJLPud?backgroundColor=cyan"
                        frameBorder="0" onmousewheel="" width="100%" height="100%"
                    // style="background: transparent; border: 1px solid #ccc;"
                >
                </iframe>

        },{
            label: 'Join our miami talent',
            component:
                <iframe loading="eager" className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px]"
                        src="https://airtable.com/embed/appkpBZ1YDK7ggwpd/shrHqS0j6ypB2QRKz?backgroundColor=cyan"
                        frameBorder="0" onmousewheel="" width="100%" height="100%"
                    // style="background: transparent; border: 1px solid #ccc;"
                >
                </iframe>

        }
    ])

    return (
        <div className={"w-full m-auto pt-20"}>

            <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-10"}>

                {/* HEADER */}
                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>
                    <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                        {props.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] leading-8">
                        {props.subtitle}
                    </p>
                </div>

                {/* FORM */}
                <div className={"relative w-full mx-auto h-[2000px]"}>
                    {/*<TabsComponent data={forms}/>*/}
                    <TabsComponent data={forms}/>
                </div>
            </div>

        </div>
    )
}
