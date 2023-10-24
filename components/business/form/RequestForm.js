import Input from "./form-components/Input";
import Dropdown from "./form-components/Dropdown";
import {useState} from "react";
import FileUpload from "./form-components/FileUpload";

export default function RequestForm({formTitle, formSubtitle}) {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [website, setWebsite] = useState("");
    const [city, setCity] = useState("");
    const [request, setRequest] = useState("");
    const [files, setFiles] = useState("");

    const handleFormSubmit = () => {

        setIsSubmitted(true);
    };

    return (
            <div className="rounded-[8px] bg-white flex flex-col max-h-max h-max">

                <div className="w-[90%] mx-auto mt-10">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={"/images/logos/miami-logo-solid-yellow.png"}
                        alt="Venture Miami Logo"
                    />
                    <div className={"w-full"}>
                        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#0e1012]">
                            {formTitle}
                        </h1>
                        <p className="text-[#566171] leading-8 ">
                            {formSubtitle}
                        </p>
                    </div>
                </div>

                <div className={"w-full mx-auto"}>

                    {/*<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">*/}
                    <div className="w-[90%] mx-auto mt-10 w-full flex flex-col space-y-[30px]">

                        <div className={"grid grid-cols-2 gap-x-[20px] gap-y-[40px]"}>
                            <Input formSubmitted={isSubmitted} title={'Full Name'} inputType={'regular'} required={true} handleInputChange={(name)=>{ setFullName(name); }}/>
                            <Input formSubmitted={isSubmitted} title={'Email'} inputType={'email'} required={true} handleInputChange={(email)=>{ setEmail(email); }}/>
                            <Input formSubmitted={isSubmitted} title={'What company or organization do you represent'} subtitle={'State "self" if none'} inputType={'regular'} required={true} handleInputChange={(companyName)=>{ setCompanyName(companyName); }} />
                            <Input formSubmitted={isSubmitted} title={'What is your company, organization, or personal website?'} inputType={'url'} required={true} handleInputChange={(website)=>{ setWebsite(website); }}/>
                            <Input formSubmitted={isSubmitted} title={'What city are you currently living in?'} inputType={'regular'} required={true} handleInputChange={(city)=>{ setCity(city); }}/>

                        </div>
                         <Input formSubmitted={isSubmitted} title={'What request or open suggestion do you have for the team?'} inputType={'textarea'} required={false} handleInputChange={(request)=>{ setRequest(request); }}/>

                        <Dropdown title={"Requests"}/>

                        <FileUpload formSubmitted={isSubmitted} title={"Please upload any relevant file(s)"} required={true}/>
                        <div>
                            <button
                                // className="mb-[50px] flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                className="w-full mb-[50px] text-[14px] md:text-[16px] px-[16px] py-[8px] rounded-full bg-[#007afc] text-white font-base"

                                onClick={handleFormSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

            </div>
    )
}
