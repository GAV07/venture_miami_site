import {AiFillCheckCircle} from 'react-icons/ai'
import * as React from "react";
import {useEffect, useState} from "react";
import {Slider} from "../Slider";
import Dropdown from "../home/stats/Dropdown";
// import Dropdown from "../business/form/form-components/Dropdown";

export default function Initiatives(props) {

    const [initiative, setInitiative] = useState(props.content[0]); // gets the first initiative
    const [initiatives, setInitiatives] = useState(props.content.map((program) => program)); // stores all the initiatives
    const [sliderButtons, setSliderButtons] = useState([]); // these buttons go into the slider
    const [dropDownSelection, setDropdownSelection] = useState(initiative.title);
    useEffect(() => {

        let buttons = initiatives.map((init) => {

            let componentObj = {
                type: <button key={init.title}
                              className={`text-[14px] md:text-[16px] px-[16px] py-[8px] h-max mx-auto rounded-full ${initiative === init ? 'bg-vm-blue text-white' : 'bg-white ring-1 ring-darkGray'} font-bold`}
                              onClick={() => {
                                  setInitiative(init)
                              }}
                >
                    {init.title}
                </button>
            }
            return componentObj;

        })

        setSliderButtons(buttons);

    }, [])
    return (
        <div className={"w-full m-auto pt-20"}>

            <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-10"}>
                <div className={"border-solid border-t-[1px] border-black mx-auto w-full m-auto text-left"}>
                    <h1 className="text-[36px] md:text-[56px] font-light mb-3">
                        Initiatives
                    </h1>
                    <p className="text-[16px] md:text-[20px] leading-8">
                        {props.content.subtitle}
                    </p>
                </div>
                {/* CONTENT */}
                <div className={"w-full flex flex-col gap-y-14"}>

                    {/* DROPDOWN */}
                    <div className={`block ${initiatives.length > 3 ? 'md:block' : 'md:hidden'}`}>
                        <Dropdown selected={initiative.title} bgColor={'bg-vm-blue'} textColor={'text-white'}
                                  selections={initiatives.map(init => init.title)}
                                  handleSelection={(selection) => {
                                      initiatives.forEach((init) => {
                                          selection === init.title && setInitiative(init)
                                      })
                                  }}/>
                    </div>


                    <div
                        className={`hidden ${initiatives.length > 3 ? 'md:hidden' : 'md:flex'} relative w-[80%] mx-auto rounded-[8px] flex flex-wrap items-center gap-x-[3px] gap-y-[20px]`}>
                        {
                            initiatives.map((init) => {

                                return (

                                    // <button key={init.fields.title} className={`text-[13px] px-[12px] py-[8px] max-w-max rounded-full ${initiative === init ? 'bg-[#007afc] text-white' : 'text-lightGray'}`}
                                    <button key={init.title}
                                            className={`font-semibold mx-auto text-[13px] px-4 py-2 max-w-max rounded-full ${initiative === init ? 'bg-vm-blue text-white' : 'text-darkGray bg-white ring-1 ring-darkGray'}`}
                                            onClick={() => {
                                                setInitiative(init);
                                                setDropdownSelection(init.title)
                                            }}
                                    >
                                        {init.title}
                                    </button>
                                )
                            })
                        }
                    </div>


                    <div className={"w-full m-auto flex flex-col"}>
                        {


                            <div
                                className={`flex justify-between items-start flex-col gap-y-10 gap-x-10 pb-20 md:flex-row md:gap-y-0`}>
                                <div className={"md:w-1/2 w-full text-[2.5rem]"}>
                                    <div

                                        className={"md:w-[80%] w-full h-full flex flex-col justify-center items-start space-y-5 md:justify-center md:items-start"}>
                                        <p className={'text-darkGray text-[24px] font-bold text-center'}>
                                            {initiative.title}
                                        </p>

                                        {
                                            initiative.calloutTitle && (
                                                <p className={'w-full text-vm-blue text-[14px]'}>
                                                    {initiative.calloutTitle}
                                                </p>
                                            )
                                        }
                                        <ul
                                            role="list"
                                            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7"
                                        >
                                            {initiative.callouts.map((callout, index) => (
                                                <li key={index} className="flex gap-x-3">
                                                    <AiFillCheckCircle className="text-green-300 h-7 w-5 flex-none"
                                                                       aria-hidden="true"/>
                                                    <p className="text-sm text-lightGray ">{callout.fields.text}</p>
                                                </li>
                                            ))}
                                        </ul>
                                        {

                                            initiative.button !== undefined &&
                                            <div className="rounded-full shadow max-w-max">
                                                <a
                                                    href={initiative.button.fields.url}
                                                    className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-vm-blue"
                                                >
                                                    {initiative.button.fields.text}
                                                </a>
                                            </div>
                                        }
                                    </div>
                                </div>

                                <div className={`md:w-1/2 w-full h-full
                                
                                    rounded-md w-full
                                min-[1270px]:h-[720px] 
                                    min-[1147px]:h-[627px]
                                min-[1024px]:h-[535px] 
                                    min-[896px]:h-[442px]
                                min-[768px]:h-[350px]
                                
                                
                                min-[767px]:h-[700px] 
                                    min-[634px]:h-[625px] 
                                min-[500px]:h-[500px] 
                  
                                    
                                `}>
                                    {
                                        <img
                                            src={initiative.media.fields.file.url}
                                            alt=""
                                            className={'w-full h-full rounded-[8px] object-cover'}
                                        />
                                    }
                                </div>

                            </div>

                        }
                    </div>
                </div>

            </div>

        </div>


    )
}