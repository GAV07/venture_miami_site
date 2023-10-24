import * as React from "react";
import {useEffect, useState} from "react";
import RequestForm from "./form/RequestForm";
import Link from 'next/link';

export default function CTA(props) {

    console.log(props);

    const [sectionSelected, setSectionSelected] = useState("");

    const [forms, setForms] = useState(new Map())

    useEffect(()=>{

        // set the forms
        forms.set(
            'Send requests and ideas',
            <iframe className="airtable-embed bg-transparent border-[1px] border-[#ccc] rounded-[10px]"
                    src="https://airtable.com/embed/app7M34O3rPHxQ9mB/shr1TcBO7ZwcpRrWV?backgroundColor=gray"
                    frameBorder="0" onmousewheel="" width="100%" height="2000"
                // style="background: transparent; border: 1px solid #ccc;"
            >
            </iframe>
            // <RequestForm formTitle={"Intake Form"} formSubtitle={"This form is the open channel to send request and ideas to the Venture Miami team. We are primarily seeking connections that we can assist with relocation for companies or projects that will strengthen our ecosystem. We look forward to reviewing your request!"}/>

        );
        forms.set(
            'Founder looking to grow',
            <iframe className="airtable-embed"
                    src="https://airtable.com/embed/appU24wxHJtwLEMq4/shrkRDDFLh4XJLPud?backgroundColor=cyan"
                    frameBorder="0" onmousewheel="" width="100%" height="2000"
                // style="background: transparent; border: 1px solid #ccc;"
            >
            </iframe>

        );
        forms.set(
            'Join our miami talent',
            <iframe className="airtable-embed"
                    src="https://airtable.com/embed/appkpBZ1YDK7ggwpd/shrHqS0j6ypB2QRKz?backgroundColor=cyan"
                    frameBorder="0" onmousewheel="" width="100%" height="2000"
                // style="background: transparent; border: 1px solid #ccc;"
            >
            </iframe>

        );

        // alert(Array.from(forms)[0][0])
        // select the first item in the map as the form to display first
        setForms(forms);
        setSectionSelected(Array.from(forms)[0][0]);


    }, [])
    return (
        <div id={"contact"} className={"w-full m-auto pt-16"}>

            <div className={"bg-[#15181b] pt-[140px] pb-[70px] px-[40px]"}>

                {/* CONTENT */}
                <div className={"max-w-[1200px] mx-auto text-center"}>
                    {/*<h1 className="text-[36px] md:text-[36px] font-bold text-[white] mb-[16px]">
                        Ready to Relocate and Become a part of the Miami Ecosystem?
                    </h1>*/}
                    <h1 className="text-[36px] md:text-[36px] font-bold text-[white] mb-[16px]">
                        How Can We Help?
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-[#9ba2b2] leading-8">
                        Venture Miami is committed to ...
                    </p>

                    <div className={"w-full mt-[56px] flex flex-col space-y-10"}>

                        <div className={"relative w-full md:w-[787px] rounded-[8px] flex justify-center items-center w-full gap-x-[20px] gap-y-[20px] flex-wrap mx-auto"}>
                            {
                                Array.from(forms).map(([key, value])=>{

                                    return (

                                        <button key={key} className={`text-[14px] md:text-[16px] px-[16px] py-[8px] rounded-full ${key === sectionSelected ? 'bg-[#007afc] text-white' : 'bg-white ring-1 ring-black'} font-base`}
                                            onClick={()=>{ setSectionSelected(key) }}
                                        >
                                            {key}
                                        </button>
                                    )
                                })
                            }
                        </div>

                        <div
                            className={"relative w-full mx-auto lg:w-[60%] mx-auto bg-[#22262e] border-[1px] border-[#515762] flex flex-col rounded-[8px]"}>
                            {forms.get(sectionSelected)}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
