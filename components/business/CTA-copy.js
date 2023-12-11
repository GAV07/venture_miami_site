import * as React from "react";
import {useEffect, useState} from "react";
import RequestForm from "./form/RequestForm";
import Link from 'next/link';

export default function CTA(props) {

    const [sectionSelected, setSectionSelected] = useState("");

    const [forms, setForms] = useState(new Map())

    useEffect(()=>{

        // set the forms
        forms.set(
            'Send requests and ideas',
            <iframe className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px]"
                    src="https://airtable.com/embed/app7M34O3rPHxQ9mB/shr1TcBO7ZwcpRrWV?backgroundColor=gray"
                    frameBorder="0" onmousewheel="" width="100%" height="100%"
                // style="background: transparent; border: 1px solid #ccc;"
            >
            </iframe>
            // <RequestForm formTitle={"Intake Form"} formSubtitle={"This form is the open channel to send request and ideas to the Venture Miami team. We are primarily seeking connections that we can assist with relocation for companies or projects that will strengthen our ecosystem. We look forward to reviewing your request!"}/>

        );
        forms.set(
            'Founder looking to grow',
            <iframe className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px]"
                    src="https://airtable.com/embed/appU24wxHJtwLEMq4/shrkRDDFLh4XJLPud?backgroundColor=cyan"
                    frameBorder="0" onmousewheel="" width="100%" height="100%"
                // style="background: transparent; border: 1px solid #ccc;"
            >
            </iframe>

        );
        forms.set(
            'Join our miami talent',
            <iframe className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px]"
                    src="https://airtable.com/embed/appkpBZ1YDK7ggwpd/shrHqS0j6ypB2QRKz?backgroundColor=cyan"
                    frameBorder="0" onmousewheel="" width="100%" height="100%"
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
        <div id={"contact"} className={"relative w-full m-auto pt-16"}>

            {/*<div className={"bg-vm-blue pt-[140px] pb-[70px] px-[40px]"}>*/}
            <div className={"relative top-0 left-0 pt-[140px] pb-[70px] px-[40px]"}>

                {/* CONTENT */}
                <div className={"relative top-0 left-0 max-w-[1200px] mx-auto text-center"}>


                    <h1 className="text-[36px] md:text-[36px] font-bold text-[#0e1012] mb-[16px]">
                        {props.content.title}
                    </h1>

                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8">
                        {props.content.subtitle}
                    </p>


                    <div className={"relative w-full mt-[56px] flex flex-col space-y-10 h-[1500px]"}>

                        {/* BUTTONS */}
                        <div className={"w-full mx-auto md:w-[70%] md:mx-auto rounded-[8px] flex flex-wrap justify-center items-center gap-x-[20px] gap-y-[20px]"}>
                            {
                                Array.from(forms).map(([key, value])=>{

                                    return (

                                        <button key={key} className={`text-[14px] md:text-[16px] px-[16px] py-[8px] rounded-full ${key === sectionSelected ? 'bg-vm-blue text-white' : 'bg-white ring-1 ring-black'} font-base`}
                                            onClick={()=>{ setSectionSelected(key) }}
                                        >
                                            {key}
                                        </button>
                                    )
                                })
                            }
                        </div>

                        {/* FORMS */}
                        <div
                            // className={"relative top-0 left-0 w-full mx-auto lg:w-[60%] mx-auto flex flex-col rounded-[8px]"}>
                            className={"relative top-0 left-0 w-full mx-auto lg:w-[60%] mx-auto flex flex-col rounded-[8px]"}>

                            <div role="status" className={"relative top-[10px] left-0 mx-auto"}>
                                <svg aria-hidden="true"
                                     className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"/>
                                </svg>
                            </div>

                            <div className={"absolute top-0 left-0 top-0 w-full h-[1400px]"}>
                                {forms.get(sectionSelected)}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
