// import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import {useEffect, useState} from "react";
// import { EnvelopeIcon } from '@heroicons/react/20/solid'
import {AiFillExclamationCircle} from 'react-icons/ai'
import {BsFillEnvelopeFill} from 'react-icons/bs'

export default function Input({inputType, title, subtitle, errorMessage, required, formSubmitted, handleInputChange}) {

    const [inputs, setInputs] = useState(null);
    const [invalid, setInvalid] = useState(false);
    const [input, setInput] = useState("");

    const isValidEmail = ()=>{

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        return emailRegex.test(input);
    }
    const isValidUrl = ()=>{

        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

        return urlRegex.test(input);
    }

    // use effect that depends on when the form submitted state changes
    useEffect(() => {

        if (formSubmitted && required) {
            if (inputType === "email") {
                const isEmailValid = isValidEmail();
                setInvalid(!isEmailValid);
            }
            if (inputType === "regular") {
                setInvalid(input === "");
            }
            if (inputType === "url") {
                const isUrlValid = isValidUrl();
                setInvalid(!isUrlValid);
            }
        }

    }, [formSubmitted]);

    useEffect(()=>{

        let map = new Map();
        map.set("email", <div className="relative mt-2 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <BsFillEnvelopeFill className={`h-5 w-5 ${invalid ? 'text-red-300' : 'text-gray-500'}`} aria-hidden="true" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={`block w-full rounded-md border-0 py-3 pl-10 ${invalid ? 'text-red-300 ring-red-300 placeholder:text-red-300 focus:ring-red-300' : 'text-gray-900 ring-gray-300 placeholder:text-gray-300 focus:ring-[#007afc]'} ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6`}
                                    placeholder="you@example.com"
                                    onKeyUp={(e)=>{ setInput(e.target.value); handleInputChange(e.target.value) }}
                                />
                            </div>
        )

        map.set("regular", <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        className={`pl-3 block w-full rounded-md border-0 py-3 pr-10 ${invalid ? 'text-red-300 ring-red-300 placeholder:text-red-300 focus:ring-red-300' : 'text-gray-900 ring-gray-300 placeholder:text-gray-300 focus:ring-[#007afc]'} ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6`}
                                        placeholder={``}
                                        aria-invalid="true"
                                        aria-describedby="email-error"
                                        onKeyUp={(e)=>{ setInput(e.target.value); handleInputChange(e.target.value) }}

                                    />
                                    {
                                        invalid && (

                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                                <AiFillExclamationCircle className={`h-5 w-5 text-red-300`} aria-hidden="true" />
                                            </div>
                                        )
                                    }
                                </div>
        )
        map.set("textarea", <div className="relative mt-2 rounded-md shadow-sm">
                                    <textarea
                                        name="text"
                                        id="text"
                                        className={`pl-3 block w-full rounded-md border-0 py-3 pr-10 ${invalid ? 'text-red-300 ring-red-300 placeholder:text-red-300 focus:ring-red-300' : 'text-gray-900 ring-gray-300 placeholder:text-gray-300 focus:ring-[#007afc]'} ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6`}
                                        placeholder={``}
                                        aria-invalid="true"
                                        rows={10}
                                        cols={10}
                                        autoComplete={true}
                                        onKeyUp={(e)=>{ setInput(e.target.value); handleInputChange(e.target.value) }}

                                    >
                                    </textarea>
                                    {
                                        invalid && (

                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                                <AiFillExclamationCircle className={`h-5 w-5 text-red-300`} aria-hidden="true" />
                                            </div>
                                        )
                                    }
                                </div>
        )

        map.set("url", <div className="mt-2 flex rounded-md shadow-sm">
                                <span className={`inline-flex items-center rounded-l-md border border-r-0 ${invalid ? 'border-red-300 text-red-300' : 'border-gray-300 text-gray-500'}  px-3 sm:text-sm`}>
                                  http://
                                </span>
                                <input
                                    type="url"
                                    name="company-website"
                                    id="company-website"
                                    className={`pl-3 block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-3 ${invalid ? 'text-red-300 ring-red-300 placeholder:text-red-300 focus:ring-red-300' : 'text-gray-900 ring-gray-300 placeholder:text-gray-300 focus:ring-[#007afc]'}  ring-1 ring-inset focus:ring-2 focus:ring-inset  text-sm leading-6`}
                                    placeholder="www.example.com"
                                    onKeyUp={(e)=>{ setInput(e.target.value); /*handleInputChange(e.target.value)*/}}
                                />
                            </div>
        )

        setInputs(map);
    }, [formSubmitted, invalid])

    return (
        <div>
            <div className={"w-full flex flex-col"}>
                <label htmlFor="email" className="text-left block text-[15px] font-semibold leading-9 tracking-tight text-[#0e1012]">
                    {title}
                </label>
                <label htmlFor="email" className="text-left block text-[13px] font-medium leading-9 tracking-tight text-[#566171]">
                    {subtitle && subtitle}
                </label>
            </div>

            {inputs && inputs.get(inputType)}
            {/*<p className="mt-2 text-sm text-red-600" id="email-error">
                {errorMessage}
            </p>*/}
        </div>
    )
}
