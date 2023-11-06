import { Disclosure, Menu, Transition } from '@headlessui/react'
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import {BsBriefcase, BsFillBriefcaseFill, BsFillLightbulbFill, BsLightbulb} from 'react-icons/bs'
import {FaTwitter } from 'react-icons/fa'
import {BiBarChart, BiNavigation, BiHelpCircle, BiSolidBusiness} from 'react-icons/bi'
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import { XIcon, QrcodeIcon } from '@heroicons/react/solid'
import { Logo } from "./logo.js"

export default function Header({makeTransparent}) {

    const router = useRouter();

    const [navigations, setNavigations] = useState([

        {
            nav: 'Home',
            url:  '/'
        },
        {
            nav: 'About',
            url:  '/about'
        },
        {
            nav: 'Companies',
            url:  '/business'
        },
        {
            nav: 'Initiatives',
            url:  '/initiatives'
        },
        {
            nav: 'Partnerships',
            url:  '/partnerships'
        },
        {
            nav: 'Events',
            url:  '/events'
        },
        {
            nav: 'News',
            url:  '/news'
        },
        {
            nav: 'Contact',
            url:  '/business/#contact'
        },
        {
            nav: 'Resource Hub',
            url:  'https://miamitechresourcehub.softr.app/'
        },
    ])

    const [currentPath, setCurrentPath] = useState(router.asPath);

    const [menuClicked, setMenuClicked] = useState(false);

    const menuRef = useRef(null);

    useEffect(()=>{

        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuClicked(false);
            }
        }
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };

    }, [])

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

        {/*<div className={`relative h-[68px] bg-black flex items-center`}>*/}
        <div className={`${makeTransparent ? 'bg-transparent w-full absolute top-0 left-0 z-[30]' : 'bg-vm-blue relative'} flex h-[50px] items-center`}>
            {/* DESKTOP NAV */}
            <div className={"w-[90%] h-full m-auto flex justify-between items-center"}>

                <a
                    href={"/"}
                    className="flex-shrink-0">
                    <Logo/>

                </a>


                    <ul className={'hidden w-full navBreak:h-full navBreak:flex navBreak:justify-center navBreak:items-center navBreak:gap-x-[40px]'}>

                        {
                            navigations.map((nav, index)=>{

                                if (
                                    nav.nav !== 'Home' &&
                                    // nav.nav !== 'Events' &&
                                    // nav.nav !== 'News' &&
                                    nav.nav !== 'Contact'
                                ) {
                                    return(
                                        <li key={index} className={"h-full flex items-center"}>
                                            <a href={nav.url}
                                               className={`text-[14px] tracking-[0px] text-white`}
                                            >
                                                {nav.nav}
                                            </a>
                                        </li>
                                    )
                                }

                                return null;

                            })
                        }

                </ul>

                {/* DESKTOP DROP DOWN */}
                <div className={"relative w-[120px] flex justify-end"}>

                    <div className={'navBreak:hidden block flex items-center'}>
                        {
                            menuClicked ?
                                <button onClick={()=>{ setMenuClicked(!menuClicked); }}> <XIcon className={'text-white w-[25px] h-[25px]'}/></button>
                                :
                                <button onClick={()=>{ setMenuClicked(!menuClicked); }}><AiOutlineMenu color={'white'} size={25}/></button>

                        }
                    </div>

                    {/*{
                        menuClicked && (

                            <div  className={"hidden navBreak:w-[400px] navBreak:absolute navBreak:-bottom-[100%] navBreak:right-0  navBreak:translate-y-[100%] navBreak:z-[2000] navBreak:rounded-md navBreak:shadow-md navBreak:bg-[#161a1d] navBreak:block navBreak:flex navBreak:flex-col navBreak:items-center navBreak:space-x-[10px] navBreak:space-y-[20px] p-[20px]"}>

                                <div className={"w-full text-[16px] "}>
                                    <a href="https://twitter.com/VentureMiami" className={"text-white flex items-center justify-start space-x-[10px] relative w-full"}>
                                        <div className={""}>
                                            <div className="flex justify-center items-center rounded-[100%] w-[35px] h-[35px] bg-[#f7f9fc]">
                                                <FaTwitter size={20} color={"#1D9BF0"}/>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-[14px]">
                                                Questions? DM Us!
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className={"w-full text-[16px] "}>
                                    <a href="/business/#contact"  className={"text-white flex items-center justify-start space-x-[10px] relative w-full"}>
                                        <div className={""}>
                                            <div className="flex justify-center items-center rounded-full w-[35px] h-[35px] bg-[#f7f9fc]">
                                                <BiSolidBusiness
                                                    size={20} color={"rgb(31 41 55)"}
                                                    className="flex-shrink-0"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>

                                        <div className="">
                                            <p className="text-[14px]">
                                                Join Our Founder Database
                                            </p>
                                            <p className="text-[12px] text-gray-500">
                                                Continue growing in the Miami ecosystem by tapping into local resources.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className={"w-full text-[16px] "}>
                                    <a href="/business/#contact"  className={"text-white flex items-center justify-start space-x-[10px] relative w-full"}>
                                        <div className={""}>
                                            <div className="flex justify-center items-center rounded-full w-[35px] h-[35px] bg-[#f7f9fc]">
                                                <BsFillBriefcaseFill
                                                    size={20} color={"rgb(31 41 55)"}
                                                    className="flex-shrink-0"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>

                                        <div className="">
                                            <p className="text-[14px]">
                                                Join Our Talent Database
                                            </p>
                                            <p className="text-[12px] text-gray-500">
                                                Connect with local and incoming companies looking for Miami talent.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className={"w-full text-[16px] "}>
                                    <a href="/business/#contact"  className={"text-white flex items-center justify-start space-x-[10px] relative w-full"}>
                                        <div className={""}>
                                            <div className="flex justify-center items-center rounded-[100%] w-[35px] h-[35px] bg-[#f7f9fc]">
                                                <BsFillLightbulbFill
                                                    size={20} color={"yellow"}
                                                    className="flex-shrink-0"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-[14px]">
                                                Have a Request or Idea?
                                            </p>
                                            <p className="text-[12px] text-gray-500">
                                                We love making our community better with the people of our community. Let's Talk!
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    }*/}
                </div>

            </div>


            {
                menuClicked && (
                    // <div className={"navBreak:hidden w-[80%] mx-auto absolute top-[100%] left-1/2 -translate-x-1/2 z-[1000]  rounded-md shadow-md block flex flex-col divide-y"}>

                    /*                       <div className={"navBreak:hidden rounded-[8px] w-[90%] mx-auto absolute top-[70px] left-1/2 -translate-x-1/2 z-[1000]  shadow-md block flex flex-col md:flex-row bg-vm-blue"}>
                                               {/!* LEFT SECTION *!/}
                                               <div className={"rounded-tr-[8px] rounded-tl-[8px] md:rounded-bl-[8px] md:rounded-tr-[0px] bg-vm-blue basis-[60%] pt-[32px] pr-[40px] pb-[32px] pl-[32px]"}>

                                                   {/!* HEADER *!/}
                                                   <div className={"mb-[10px] pb-[16px] flex items-center space-x-[10px] border-b-[1px] border-white"}>

                                                       {/!* ICON *!/}
                                                       <div className={"flex"}>
                                                           <BiNavigation size={25} color={'white'}/>
                                                       </div>
                                                       <p className={"text-[12px] text-white uppercase"}>Navigation</p>

                                                   </div>

                                                   {/!* NAVIGATIONS *!/}
                                                   <div>

                                                       <ul className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-x-[16px] gap-y-[16px] pl-[0px]"}>

                                                           {/!*<li className={"w-[200px] text-[16px] "}>
                                                               <a href="/" className={"max-w-max text-white flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                                   <p className={"text-left mr-[8px] hover:rounded-[8px]"}>Home</p>
                                                               </a>
                                                           </li>*!/}
                                                           {/!*text-[#a0aaba] - li , text-white - a *!/}
                                                           <li className={"w-[200px] text-[16px] "}>
                                                               <a href="/about" className={"max-w-max text-white flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                                   <p className={"text-left mr-[8px] hover:rounded-[8px]"}>About</p>
                                                               </a>
                                                           </li>
                                                           <li className={"w-[200px] text-[16px] "}>
                                                               <a href="/business" className={"max-w-max text-white flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                                   <p className={"text-left mr-[8px] hover:rounded-[8px]"}>Companies</p>
                                                               </a>
                                                           </li>
                                                           <li className={"w-[200px] text-[16px] "}>
                                                               <a href="/initiatives" className={"max-w-max text-white flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                                   <p className={"text-left mr-[8px] hover:rounded-[8px]"}>Initiatives</p>
                                                               </a>
                                                           </li>
                                                           <li className={"w-[200px] text-[16px] "}>
                                                               <a href="/partnerships" className={"max-w-max text-white flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                                   <p className={"text-left mr-[8px] hover:rounded-[8px]"}>Partnerships</p>
                                                               </a>
                                                           </li>
                                                           <li className={"w-[200px] text-[16px] "}>
                                                               <a href="/events" className={"max-w-max text-white flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                                   <p className={"text-left mr-[8px] hover:rounded-[8px]"}>Events</p>
                                                               </a>
                                                           </li>
                                                           <li className={"w-[200px] text-[16px] "}>
                                                               <a href="/news" className={"max-w-max text-white flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                                   <p className={"text-left mr-[8px] hover:rounded-[8px]"}>News</p>
                                                               </a>
                                                           </li>
                                                           <li className={"w-[200px] text-[16px] "}>
                                                               <a href="/contact" className={"max-w-max text-white flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                                   <p className={"text-left mr-[8px] hover:rounded-[8px]"}>Contact</p>
                                                               </a>
                                                           </li>
                                                           <li className={"w-[200px] text-[16px] "}>
                                                               <a href="https://miamitechresourcehub.softr.app/" className={"max-w-max text-white flex items-center relative pt-[10px] pb-[10px] text-[14px] font-medium"}>
                                                                   <p className={"text-left mr-[8px] hover:rounded-[8px]"}>Resource Hub</p>
                                                               </a>
                                                           </li>
                                                       </ul>
                                                   </div>

                                               </div>

                                               {/!* RIGHT SECTION *!/}
                                               <div className={"rounded-bl-[8px] rounded-br-[8px] md:rounded-tr-[8px] md:rounded-bl-none bg-white basis-[40%] pt-[32px] pb-[32px] pt-[32px] pl-[20px] pr-[20px]"}>

                                                   {/!* HEADER *!/}
                                                   <div className={"mb-[10px] pb-[16px] flex items-center space-x-[10px] border-b-[1px] border-[#333943]"}>

                                                       {/!* ICON *!/}
                                                       <div className={"flex"}>
                                                           <BiHelpCircle size={25} color={'black'}/>
                                                       </div>
                                                       <p className={"text-[12px] uppercase text-black"}>Resources</p>

                                                   </div>

                                                   {/!* NAVIGATIONS *!/}
                                                   <div>

                                                       <ul className={"grid grid-cols-1 gap-x-0 gap-y-[30px]"}>

                                                           <li className={"w-full text-[16px] "}>
                                                               <a href="https://twitter.com/VentureMiami" className={"text-white flex items-center justify-start space-x-[10px] relative w-full"}>
                                                                   <div className={""}>
                                                                       <div className="flex justify-center items-center rounded-[100%] w-[35px] h-[35px] bg-[#f7f9fc]">
                                                                           <FaTwitter size={20} color={"#1D9BF0"}/>
                                                                       </div>
                                                                   </div>
                                                                   <div className="">
                                                                       <p className="text-[14px]">
                                                                           Questions? DM Us!
                                                                       </p>
                                                                   </div>
                                                               </a>
                                                           </li>
                                                           <li className={"w-full text-[16px] "}>
                                                               <a href="https://twitter.com/VentureMiami"  className={"text-white flex items-center justify-start space-x-[10px] relative w-full"}>
                                                                   <div className={""}>
                                                                       <div className="flex justify-center items-center rounded-full w-[35px] h-[35px] bg-[#f7f9fc]">
                                                                           <BiSolidBusiness
                                                                               size={20} color={"rgb(31 41 55)"}
                                                                               className="flex-shrink-0"
                                                                               aria-hidden="true"
                                                                           />
                                                                       </div>
                                                                   </div>

                                                                   <div className="">
                                                                       <p className="text-[14px]">
                                                                           Join Our Founder Database
                                                                       </p>
                                                                       <p className="text-[12px] text-gray-500">
                                                                           Continue growing in the Miami ecosystem by tapping into local resources.
                                                                       </p>
                                                                   </div>
                                                               </a>
                                                           </li>
                                                           <li className={"w-full text-[16px] "}>
                                                               <a href="https://airtable.com/shrHqS0j6ypB2QRKz"  className={"text-white flex items-center justify-start space-x-[10px] relative w-full"}>
                                                                   <div className={""}>
                                                                       <div className="flex justify-center items-center rounded-full w-[35px] h-[35px] bg-[#f7f9fc]">
                                                                           <BsFillBriefcaseFill
                                                                               size={20} color={"rgb(31 41 55)"}
                                                                               className="flex-shrink-0"
                                                                               aria-hidden="true"
                                                                           />
                                                                       </div>
                                                                   </div>

                                                                   <div className="">
                                                                       <p className="text-[14px]">
                                                                           Join Our Talent Database
                                                                       </p>
                                                                       <p className="text-[12px] text-gray-500">
                                                                           Connect with local and incoming companies looking for Miami talent.
                                                                       </p>
                                                                   </div>
                                                               </a>
                                                           </li>
                                                           <li className={"w-full text-[16px] "}>
                                                               <a href="https://airtable.com/shr1TcBO7ZwcpRrWV"  className={"text-white flex items-center justify-start space-x-[10px] relative w-full"}>
                                                                       <div className={""}>
                                                                           <div className="flex justify-center items-center rounded-[100%] w-[35px] h-[35px] bg-[#f7f9fc]">
                                                                               <BsFillLightbulbFill
                                                                                   size={20} color={"yellow"}
                                                                                   className="flex-shrink-0"
                                                                                   aria-hidden="true"
                                                                               />
                                                                           </div>
                                                                       </div>
                                                                       <div className="">
                                                                           <p className="text-[14px]">
                                                                               Have a Request or Idea?
                                                                           </p>
                                                                           <p className="text-[12px] text-gray-500">
                                                                               We love making our community better with the people of our community. Let's Talk!
                                                                           </p>
                                                                       </div>
                                                               </a>
                                                           </li>
                                                       </ul>
                                                   </div>

                                               </div>

                                       </div>*/

                    /* MOBILE DROPDOWN 2 */
                    <div className={`navBreak:hidden block absolute ${makeTransparent ? 'bg-black/10 text-white' : 'bg-white text-black'} divide-vm-blue divide-y w-full z-[10] left-0 ${menuClicked ? 'top-[100%] transition delay-[3000]' : 'top-[-100%] transition'}`}>

                        <ul className={'w-full'}>

                            {
                                navigations.map((nav, index)=>{

                                    if (
                                        nav.nav !== 'Home' &&
                                        // nav.nav !== 'Events' &&
                                        // nav.nav !== 'News' &&
                                        nav.nav !== 'Contact'
                                    ) {
                                        return(
                                            <li key={index} className={"w-full"}>
                                                <a href={nav.url} className={"text-[14px] pl-[10px] pt-[10px] pb-[10px] border-l-[5px] border-vm-gray hover:border-vm-blue flex items-center relative"}>
                                                    <p className={"text-left mr-[8px] hover:rounded-[8px]"}>{nav.nav}</p>
                                                </a>
                                            </li>
                                        )
                                    }

                                    return null;

                                })
                            }

                        </ul>
                    </div>

                )
            }

        </div>



    </div>
    )
}
