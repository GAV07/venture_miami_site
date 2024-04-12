import * as React from "react";
import {useEffect, useState} from "react";
import Link from 'next/link';
import Section from "./Section";

export default function Form({props}) {

    const [formSelected, setFormSelected] = useState(1);
    const [iframeHeight, setIframeHeight] = useState(0); // State to store iframe height

    const updateIframeHeight = () => {
        const iframe = document.getElementById(`iframe-${formSelected}`);
        if (iframe) {
            setIframeHeight(iframe.scrollHeight);
        }
    };
    useEffect(() => {
        updateIframeHeight();
    }, [formSelected]); // ee-render when formSelected changes


    const [forms, setForms] = useState([
        {
            // form: 1,
            label: 'Send requests and ideas',
            component:
                <iframe
                        id={'iframe-1'}
                        loading="eager"
                        className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px] scale-[0.95]"
                        src="https://airtable.com/embed/app7M34O3rPHxQ9mB/shr1TcBO7ZwcpRrWV?backgroundColor=gray"
                        frameBorder="0" onmousewheel="" width="100%" height="100%"
                    // style="background: transparent; border: 1px solid #ccc;"
                >
                </iframe>

        }, {
            // form: 2,
            label: 'Founder looking to grow',
            component:
                <iframe

                    id={'iframe-2'}
                    loading="eager"
                        className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px] scale-[0.95]"
                        src="https://airtable.com/embed/appU24wxHJtwLEMq4/shrkRDDFLh4XJLPud?backgroundColor=cyan"
                        frameBorder="0" onmousewheel="" width="100%" height="100%"
                    // style="background: transparent; border: 1px solid #ccc;"
                >
                </iframe>

        }, {
            // form: 3,
            label: 'Talent looking to grow',
            component:
                <iframe
                    id={'iframe-3'}
                    loading="eager"
                        className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px] scale-[0.95]"
                        src="https://airtable.com/embed/appkpBZ1YDK7ggwpd/shrHqS0j6ypB2QRKz?backgroundColor=cyan"
                        frameBorder="0" onmousewheel="" width="100%" height="100%"
                    // style="background: transparent; border: 1px solid #ccc;"
                >
                </iframe>

        }
    ])

    return (
        <Section>


            {/* HEADER */}
            <div className={""}>
                <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                    {props.title}
                </h1>
                <p className="text-[16px] md:text-[20px] leading-8">
                    {props.subtitle}
                </p>
            </div>

            {/* FORM */}
            {/*<div className={`relative w-full mx-auto h-[2500px]`}>*/}
            <div className={`relative w-full mx-auto h-full`}>

                <div className={'w-full flex justify-around items-center bg-gray-100 p-2 rounded-lg'}>
                    {
                        forms.map((form, index) => {

                            return (

                                <button key={index}
                                        className={`${formSelected === index + 1 && 'bg-white shadow-md'} p-3 rounded-lg`}
                                        onClick={() => {
                                            setFormSelected(index + 1);
                                        }}
                                >
                                    {form.label}
                                </button>
                            )

                        })
                    }

                </div>

                {
                    forms.map((form, index) => {

                        return (
                            <div key={index}
                                 className={`w-full h-[calc(100vh-50px)] mx-auto lg:w-[60%] md:w-[80%] ${formSelected === index + 1 ? 'block' : 'hidden'}`}>
                                {form.component}
                            </div>
                        )
                    })
                }
            </div>
        </Section>

    )
}
