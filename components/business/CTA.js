import * as React from "react";
import {useEffect, useState} from "react";
import RequestForm from "./form/RequestForm";
import Link from 'next/link';
import {BsArrowRightShort} from "react-icons/bs";
import InputComponent from "../form/InputComponent";
import RadioComponent from "../form/RadioComponent";
import IntakeForm from "./form/IntakeForm";
import TabsComponent from "../TabsComponent";

export default function CTA(props) {

    const [sectionSelected, setSectionSelected] = useState("");

    const [forms, setForms] = useState(new Map())

    useEffect(() => {

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
        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-10"}>

                {/* HEADER */}
                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>
                    <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                        {props.content.title}
                    </h1>
                    <p className="text-[16px] md:text-[20px] leading-8">
                        {props.content.subtitle}
                    </p>
                </div>

                {/* FORM */}
                <div className={"relative w-full h-[2000px]"}>
                    <TabsComponent data={[


                       /* {
                            label: 'Send requests and ideas',
                            component: <IntakeForm/>
                        },*/
                        {
                            label: 'Send requests and ideas',
                            component:  <div className={'md:w-1/2 w-full mx-auto h-full'}>
                                <iframe className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px]"
                                        src="https://airtable.com/embed/app7M34O3rPHxQ9mB/shr1TcBO7ZwcpRrWV?backgroundColor=gray"
                                        frameBorder="0" onmousewheel="" width="100%" height="100%"
                                    // style="background: transparent; border: 1px solid #ccc;"
                                >
                                </iframe>
                            </div>
                        },
                        {
                            label: 'Founder looking to grow',
                            component:  <div className={'md:w-1/2 w-full mx-auto h-full'}>
                                <iframe className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px]"
                                        src="https://airtable.com/embed/appU24wxHJtwLEMq4/shrkRDDFLh4XJLPud?backgroundColor=cyan"
                                        frameBorder="0" onmousewheel="" width="100%" height="100%"
                                    // style="background: transparent; border: 1px solid #ccc;"
                                >
                                </iframe>
                            </div>
                        },
                        {
                            label: 'Join our miami talent',
                            component:    <div className={'md:w-1/2 w-full mx-auto h-full'}>
                                <iframe className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px]"
                                        src="https://airtable.com/embed/appkpBZ1YDK7ggwpd/shrHqS0j6ypB2QRKz?backgroundColor=cyan"
                                        frameBorder="0" onmousewheel="" width="100%" height="100%"
                                    // style="background: transparent; border: 1px solid #ccc;"
                                >
                                </iframe>
                            </div>
                        },

                    ]}/>

                </div>
            </div>



        </div>
    )
}
