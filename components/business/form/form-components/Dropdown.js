import * as React from "react";
import {useEffect, useRef, useState} from "react";

export default function Dropdown({title}){


    const [isShowing, setIsShowing] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsShowing(false);
            }
        }
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div
            ref={dropdownRef}
            className={"w-full bg-[#22262e] border-[1px] border-[#515762] flex flex-col rounded-[8px] max-h-[300px]"}>

            <button className={`flex justify-center items-center bg-[#2b303c] py-[8px] ${isShowing ? 'rounded-t-[8px]' : 'rounded-[8px]'}`}
                    onClick={()=>{ setIsShowing(!isShowing) }}
            >
                <p className={`text-[15px] font-medium w-full text-white ${isShowing ? 'rounded-t-[8px]' : 'rounded-[8px]'} `}>{title}</p>
                {/*<span className="text-xs text-white">{isShowing ? '▲' : '▼'}</span>*/}
            </button>

            <div className={`${isShowing ? 'flex flex-col overflow-y-scroll' : 'hidden' } rounded-b-[8px]`}>

                            <button
                                className={`px-[20px] flex items-center bg-[#2b303c] py-[10px]`}

                                onClick={() => {

                                }}
                            >
                                <div className={"mr-[16px]"}>
                                    ITEM
                                </div>
                                <div className={""}>
                                    <p className={"mr-[8px] text-left text-[13px] text-white font-medium"}>{"poi.type"}</p>
                                    <p className={"mr-[8px] text-left text-[11px] text-[#8b96aa] text-[13px] mt-[2px] font-light"}>all
                                        sports miami has to offer</p>
                                </div>
                            </button>

            </div>
        </div>

    )
}