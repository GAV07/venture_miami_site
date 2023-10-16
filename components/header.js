import { Disclosure, Menu, Transition } from '@headlessui/react'
import {AiOutlineMenu} from 'react-icons/ai'
import {BsBriefcase, BsLightbulb} from 'react-icons/bs'
import {FaTwitter } from 'react-icons/fa'
import {BiBarChart} from 'react-icons/bi'
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";

export default function Header() {

    const router = useRouter();

    const [currentPath, setCurrentPath] = useState(router.asPath);

    const [menuClicked, setMenuClicked] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuClicked(false);
            }
        }
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={"relative w-full"}>

        <div className={`relative h-[68px] bg-black flex items-center`}>
        {/*<div className={`relative h-[68px] ${currentPath === '/' ? 'bg-transparent absolute top-0 left-0 z-[3]' : 'bg-black'} flex  items-center`}>*/}
            {/* DESKTOP NAV */}
            <div className={"w-[95%] h-full m-auto flex justify-between items-center"}>
                <a
                    href={"/"}
                    className="flex-shrink-0">
                    <img
                        className="h-5 w-[120px]"
                        src={"/images/logos/miami-logo-solid-yellow.png"}
                        alt="Venture Miami Logo"
                    />
                </a>

                <ul className={'hidden navBreak:h-full navBreak:flex navBreak:justify-between navBreak:items-center'}>
                    <li className={"h-full flex items-center"}>
                        <a href="/"
                           className={`p-5 text-[14px] text-base font-medium text-white`}
                        >
                            Home
                        </a>
                    </li>
                    <li className={"h-full flex items-center"}>
                        <a href="/about"
                           className={`p-5 text-[14px] text-base font-medium text-white`}
                        >
                            About
                        </a>
                    </li>
                    <li className={"h-full flex items-center"}>
                        <a href="/business"
                           className={`p-5 text-[14px] text-base font-medium text-white`}
                        >
                            Companies
                        </a>
                    </li>
                    <li className={"h-full flex items-center"}>
                        <a href="/initiatives"
                           className={`p-5 text-[14px] text-base font-medium text-white`}
                        >
                            Initiatives
                        </a>
                    </li>
                    <li className={"h-full flex items-center"}>
                        <a href="/partnerships"
                           className={`p-5 text-[14px] text-base font-medium text-white`}
                        >
                            Partnerships
                        </a>
                    </li>
                    <li className={"h-full flex items-center"}>
                        <a href="/news"
                           className={`p-5 text-[14px] text-base font-medium text-white`}
                        >
                            News
                        </a>
                    </li>
                    <li className={"h-full flex items-center"}>
                        <a
                            href="https://miamitechresourcehub.softr.app/"
                            className={`p-5 text-[14px] text-base font-medium text-white`}
                        >
                            Resource Hub
                        </a>
                    </li>
                </ul>

                {/* DESKTOP DROP DOWN */}
                <div className={"relative w-[120px] flex justify-end"}>
                    <button onClick={()=>{ setMenuClicked(!menuClicked); }}>
                        <AiOutlineMenu color={'white'} size={25}/>
                    </button>

                    {
                        menuClicked && (

                            // <div  className={"hidden navBreak:w-[400px] navBreak:absolute navBreak:right-0 navBreak:-bottom-[100%] navBreak:translate-y-[100%] navBreak:z-[100] navBreak:rounded-md navBreak:shadow-md navBreak:bg-white navBreak:block"}>
                            <div  className={"hidden navBreak:w-[400px] navBreak:absolute navBreak:-bottom-[100%] navBreak:right-0  navBreak:translate-y-[100%] navBreak:z-[2000] navBreak:rounded-md navBreak:shadow-md navBreak:bg-white navBreak:block"}>
                                <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-400  hover:bg-slate-100 w-full flex justify-start items-center" href="https://airtable.com/shr1TcBO7ZwcpRrWV">
                                    <div className={"w-[10%]"}>
                                        <div className="w-[10%] shadow-lg flex justify-center items-center rounded-[100%] w-[40px] h-[40px] bg-white">
                                            <BsLightbulb
                                                size={25} color={"rgb(31 41 55)"}
                                                className="flex-shrink-0"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-4 w-[90%]">
                                        <p className="text-base font-medium text-black">
                                            Have a Request or Idea?
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            We love making our community better with the people of our community. Let's Talk!
                                        </p>
                                    </div>
                                </a>
                                <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-400  hover:bg-slate-100 w-full flex justify-start items-center" href="https://twitter.com/VentureMiami">
                                    <div className={"w-[10%]"}>
                                        <div className="shadow-lg flex justify-center items-center rounded-[100%] w-[40px] h-[40px] bg-white">
                                            <FaTwitter size={25} color={"#1D9BF0"}/>
                                        </div>
                                    </div>
                                    <div className="ml-4 w-[90%]">
                                        <p className="text-base font-medium text-black">
                                            Questions? DM Us!
                                        </p>
                                    </div>
                                </a>
                            </div>
                        )
                    }
                </div>

            </div>

        </div>

        {/* MOBILE DROPDOWN */}
            {
                menuClicked && (
                    // <div className={"navBreak:hidden w-[80%] mx-auto absolute top-[100%] left-1/2 -translate-x-1/2 z-[1000]  rounded-md shadow-md block flex flex-col divide-y"}>

                        <div className={"navBreak:hidden rounded-[8px] w-[80%] mx-auto absolute top-[100%] left-1/2 -translate-x-1/2 z-[1000]  shadow-md block flex flex-col  divide-y md:flex-row bg-white"}>
                            {/* LEFT SECTION */}
                            <div className={"bg-white basis-[60%] pt-[32px] pr-[40px] pb-[32px] pl-[32px]"}>

                                {/* HEADER */}
                                <div className={"mb-[10px] pb-[16px] flex items-center space-x-[10px] border-b-[1px] border-[#333943]"}>

                                    {/* ICON */}
                                    <div className={"flex"}>
                                        <svg className="_3-col-icon _2" width="28" height="28" viewBox="0 0 28 28"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1630_553)">
                                                <circle className="icon-docs" cx="14" cy="14" r="14"
                                                        fill="currentColor"></circle>
                                                <path
                                                    d="M17.7647 10.4333H18.1224C19.4842 10.4333 20.5882 11.5281 20.5882 12.8787V18.6H21.2941C21.684 18.6 22 18.9134 22 19.3C22 19.6866 21.684 20 21.2941 20H17.7647V10.4333Z"
                                                    fill="#2FC078"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M16.8235 8.56667C16.8235 7.14914 15.6647 6 14.2353 6H10C8.57056 6 7.41176 7.14914 7.41176 8.56667V18.6H6.70588C6.31603 18.6 6 18.9134 6 19.3C6 19.6866 6.31603 20 6.70588 20H11.4118L11.4118 16.9667C11.4118 16.5801 11.7278 16.2667 12.1176 16.2667C12.5075 16.2667 12.8235 16.5801 12.8235 16.9667L12.8235 20H16.8235V8.56667ZM10.2353 9.5C10.2353 9.1134 10.5513 8.8 10.9412 8.8H13.2941C13.684 8.8 14 9.1134 14 9.5C14 9.8866 13.684 10.2 13.2941 10.2H10.9412C10.5513 10.2 10.2353 9.8866 10.2353 9.5ZM10.9412 11.6C10.5513 11.6 10.2353 11.9134 10.2353 12.3C10.2353 12.6866 10.5513 13 10.9412 13H13.2941C13.684 13 14 12.6866 14 12.3C14 11.9134 13.684 11.6 13.2941 11.6H10.9412Z"
                                                      fill="#2FC078"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1630_553">
                                                    <rect width="28" height="28" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className={"text-[#566171] text-[12px] text-[#161a1d] uppercase"}>Navigation</p>

                                </div>

                                {/* NAVIGATIONS */}
                                <div>

                                    <ul className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-x-[16px] gap-y-[16px] pl-[0px]"}>

                                        <li className={"w-[200px] text-[16px] text-[#a0aaba]"}>
                                            <a href="/" className={"max-w-max text-[#161a1d] flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                <p className={"text-left mr-[8px] hover:bg-slate-50 hover:rounded-[8px] py-[4px] px-[8px] hover:max-w-max"}>Home</p>
                                            </a>
                                        </li>
                                        <li className={"w-[200px] text-[16px] text-[#a0aaba]"}>
                                            <a href="/about" className={"max-w-max text-[#161a1d] flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                <p className={"text-left mr-[8px] hover:bg-slate-50 hover:rounded-[8px] py-[4px] px-[8px] hover:max-w-max"}>About</p>
                                            </a>
                                        </li>
                                        <li className={"w-[200px] text-[16px] text-[#a0aaba]"}>
                                            <a href="/business" className={"max-w-max text-[#161a1d] flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                <p className={"text-left mr-[8px] hover:bg-slate-50 hover:rounded-[8px] py-[4px] px-[8px] hover:max-w-max"}>Companies</p>
                                            </a>
                                        </li>
                                        <li className={"w-[200px] text-[16px] text-[#a0aaba]"}>
                                            <a href="/initiatives" className={"max-w-max text-[#161a1d] flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                <p className={"text-left mr-[8px] hover:bg-slate-50 hover:rounded-[8px] py-[4px] px-[8px] hover:max-w-max"}>Initiatives</p>
                                            </a>
                                        </li>
                                        <li className={"w-[200px] text-[16px] text-[#a0aaba]"}>
                                            <a href="/partnerships" className={"max-w-max text-[#161a1d] flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                <p className={"text-left mr-[8px] hover:bg-slate-50 hover:rounded-[8px] py-[4px] px-[8px] hover:max-w-max"}>Partnerships</p>
                                            </a>
                                        </li>
                                        <li className={"w-[200px] text-[16px] text-[#a0aaba]"}>
                                            <a href="/news" className={"max-w-max text-[#161a1d] flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                <p className={"text-left mr-[8px] hover:bg-slate-50 hover:rounded-[8px] py-[4px] px-[8px] hover:max-w-max"}>News</p>
                                            </a>
                                        </li>
                                        <li className={"w-[200px] text-[16px] text-[#a0aaba]"}>
                                            <a href="/contact" className={"max-w-max text-[#161a1d] flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                <p className={"text-left mr-[8px] hover:bg-slate-50 hover:rounded-[8px] py-[4px] px-[8px] hover:max-w-max"}>Contact</p>
                                            </a>
                                        </li>
                                        <li className={"w-[200px] text-[16px] text-[#a0aaba]"}>
                                            <a href="https://miamitechresourcehub.softr.app/" className={"max-w-max text-[#161a1d] flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                <p className={"text-left mr-[8px] hover:bg-slate-50 hover:rounded-[8px] py-[4px] px-[8px] hover:max-w-max"}>Resource Hub</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            {/* RIGHT SECTION */}
                            <div className={"bg-slate-50 basis-[40%] pt-[32px] pr-[40px] pb-[32px] pl-[32px]"}>

                                {/* HEADER */}
                                <div className={"mb-[10px] pb-[16px] flex items-center space-x-[10px] border-b-[1px] border-[#333943]"}>

                                    {/* ICON */}
                                    <div className={"flex"}>
                                        <svg className="_3-col-icon _2" width="28" height="28" viewBox="0 0 28 28"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1630_553)">
                                                <circle className="icon-docs" cx="14" cy="14" r="14"
                                                        fill="currentColor"></circle>
                                                <path
                                                    d="M17.7647 10.4333H18.1224C19.4842 10.4333 20.5882 11.5281 20.5882 12.8787V18.6H21.2941C21.684 18.6 22 18.9134 22 19.3C22 19.6866 21.684 20 21.2941 20H17.7647V10.4333Z"
                                                    fill="#2FC078"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M16.8235 8.56667C16.8235 7.14914 15.6647 6 14.2353 6H10C8.57056 6 7.41176 7.14914 7.41176 8.56667V18.6H6.70588C6.31603 18.6 6 18.9134 6 19.3C6 19.6866 6.31603 20 6.70588 20H11.4118L11.4118 16.9667C11.4118 16.5801 11.7278 16.2667 12.1176 16.2667C12.5075 16.2667 12.8235 16.5801 12.8235 16.9667L12.8235 20H16.8235V8.56667ZM10.2353 9.5C10.2353 9.1134 10.5513 8.8 10.9412 8.8H13.2941C13.684 8.8 14 9.1134 14 9.5C14 9.8866 13.684 10.2 13.2941 10.2H10.9412C10.5513 10.2 10.2353 9.8866 10.2353 9.5ZM10.9412 11.6C10.5513 11.6 10.2353 11.9134 10.2353 12.3C10.2353 12.6866 10.5513 13 10.9412 13H13.2941C13.684 13 14 12.6866 14 12.3C14 11.9134 13.684 11.6 13.2941 11.6H10.9412Z"
                                                      fill="#2FC078"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1630_553">
                                                    <rect width="28" height="28" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className={"text-[#566171] text-[12px] uppercase"}>Resources</p>

                                </div>

                                {/* NAVIGATIONS */}
                                <div>

                                    <ul className={"grid grid-cols-1 gap-x-[16px] gap-y-[16px] pl-[0px]"}>

                                        <li className={"w-full text-[16px] text-[#a0aaba]"}>
                                            <a href="https://twitter.com/VentureMiami" className={"text-[#161a1d] flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium space-x-[20px]"}>
                                                <div className={"w-[10%]"}>
                                                    <div className="shadow-lg flex justify-center items-center rounded-[100%] w-[25px] h-[25px] bg-white">
                                                        <FaTwitter size={15} color={"#1D9BF0"}/>
                                                    </div>
                                                </div>
                                                <div className="w-[90%]">
                                                    <p className="">
                                                        Questions? DM Us!
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={"w-full text-[16px] text-[#a0aaba]"}>
                                            <a href="https://twitter.com/VentureMiami"  className={"text-[#161a1d] flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium space-x-[20px]"}>
                                                <div className={"w-[10%]"}>
                                                    <div className="shadow-lg flex justify-center items-center rounded-full w-[25px] h-[25px] bg-white">
                                                        <BsBriefcase
                                                            size={15} color={"rgb(31 41 55)"}
                                                            className="flex-shrink-0"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-[90%]">
                                                    <p className="">
                                                        Join Our Founder Database
                                                    </p>
                                                    <p className="text-[13px] text-gray-500">
                                                        Continue growing in the Miami ecosystem by tapping into local resources.
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={"w-full text-[16px] text-[#a0aaba]"}>
                                            <a href="https://airtable.com/shr1TcBO7ZwcpRrWV"  className={"text-[#161a1d] flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium space-x-[20px]"}>
                                                    <div className={"w-[10%]"}>
                                                        <div className="w-[10%] shadow-lg flex justify-center items-center rounded-[100%] w-[25px] h-[25px] bg-white">
                                                            <BsLightbulb
                                                                size={15} color={"rgb(31 41 55)"}
                                                                className="flex-shrink-0"
                                                                aria-hidden="true"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="w-[90%]">
                                                        <p className="">
                                                            Have a Request or Idea?
                                                        </p>
                                                        <p className="text-[13px] text-gray-500">
                                                            We love making our community better with the people of our community. Let's Talk!
                                                        </p>
                                                    </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        {/*</div>*/}

                    </div>
                )
            }

    </div>
    )
}
