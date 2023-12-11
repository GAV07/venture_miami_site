import InputComponent from "../../form/InputComponent";
import RadioComponent from "../../form/RadioComponent";
import * as React from "react";
import CheckboxComponent from "../../form/CheckboxComponent";
import TextareaComponent from "../../form/TextareaComponent";
import {useEffect, useState} from "react";
import AirtableManager from "../../../services/AirtableManager";

let IntakeForm = ()=>{

    const [seekingChoices, setSeekingChoices] = useState([]);
    const [seekingChoicesSelected, setSeekingChoicesSelected] = useState([]);

    const [submitted, setSubmitted] = useState(false);

    const [canSubmit, setCanSubmit] = useState(false);


    useEffect( () => {


        getDropdownOptions();

    }, []);

    useEffect(()=>{

        // console.log(seekingChoices);
    }, [seekingChoices])

    const getDropdownOptions = async ()=>{

        const baseID = process.env.NEXT_PUBLIC_VM_SITE_ID;
        const table = process.env.NEXT_PUBLIC_WEBSITE_INTAKE_TABLE;

        console.log(baseID, " ", table);

        const airtableManager = new AirtableManager(baseID,table);

        try {

            const data = await airtableManager.getSchema();

            const table = data.tables.find((x)=> x.name.toLowerCase() === "website intake" );

            const seekingField = table.fields.find((x)=> x.name.toLowerCase() === "seeking");
            const seekingOptions = seekingField.options.choices;

            const seekingArray = [];

            seekingOptions.forEach((type)=>{

                seekingArray.push({
                    name: type.name,
                    checked: false
                });

            });

            setSeekingChoices(seekingArray);


        }catch (e){

            console.log(e.message)
        }

    }

    const submit = ()=>{

        setSubmitted(true);

        if( canSubmit ){
            alert('can submit')
        }
    }

    return(

    <div
        className={`w-full mx-auto flex justify-between items-start flex-col gap-y-10 gap-x-10 pb-20 md:flex-row md:gap-y-0`}>


        {/* CONTENT */}
        <div
            className={`md:w-1/2 w-full text-[2.5rem]`}>
            <div
                className={"md:w-[80%] w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                <p className={'text-black text-[2.25rem] font-light'}>Intake Form</p>
                <p className={'text-black text-[1rem]'}>This form is the open channel to send request and ideas to the Venture Miami team. We are primarily seeking connections that we can assist with relocation for companies or projects that will strengthen our ecosystem. We look forward to reviewing your request!</p>

            </div>


        </div>

        <div className={`md:w-1/2 w-full h-full
                                
                                flex flex-col gap-y-6
                                    
                                `}>
            {/* FORM */}
            <div className={'flex flex-col gap-y-10'}>

                <div>
                    <button onClick={submit} className={'w-full bg-black text-white rounded-full py-2'}>Submit</button>
                </div>
                <InputComponent canSubmit={(bool)=>{ setCanSubmit(bool) }} required={true} submitted={submitted} text={'Full Name'} placeholder={'John'}/>
                <InputComponent canSubmit={(bool)=>{ setCanSubmit(bool) }} required={true} submitted={submitted} text={'Email'} placeholder={'name@email.com'}/>
                <InputComponent
                    canSubmit={(bool)=>{ setCanSubmit(bool) }}
                    required={true} submitted={submitted}
                    text={'What company or organization do you represent?'}
                    subtext={"State 'self' if none"}
                    placeholder={'name@email.com'}

                />
                <InputComponent
                    text={'What is your company, organization, or personal website?'}
                    placeholder={'name@email.com'}

                />


                <RadioComponent text={'How would you best identify?'} labels={['Founder', 'Funder', 'Student']}/>
                <InputComponent text={'What city are you currently living in?'} placeholder={'name@email.com'}/>

                <CheckboxComponent choices={seekingChoices} updateChoices={(array)=>{ setSeekingChoices(array) }}  text={'How would you best identify?'} labels={seekingChoices}/>
                <TextareaComponent text={'What request or open suggestion do you have for the team?'}/>

            </div>

        </div>


    </div>
    )
}

export default IntakeForm;