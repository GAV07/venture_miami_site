import {Disclosure, Menu, Transition} from '@headlessui/react'
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import {BsBriefcase, BsFillBriefcaseFill, BsFillLightbulbFill, BsLightbulb} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import {BiBarChart, BiNavigation, BiHelpCircle, BiSolidBusiness} from 'react-icons/bi'
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {XIcon, QrcodeIcon} from '@heroicons/react/solid'
import {Logo} from "./logo.js"
import {IoIosMenu} from "react-icons/io";
import {Squash as Hamburger} from 'hamburger-react'
import StyleManager from "../services/StyleManager";
import PathManager from "../services/PathManager";


export default function Header({makeTransparent}) {

    const router = useRouter();

    const [navsToExclude, setNavsToExclude] = useState(new Set());

    const [navigations, setNavigations] = useState([

        {
            nav: 'Home',
            url: '/'
        },
        {
            nav: 'About',
            url: '/about'
        },
        {
            nav: 'Companies',
            url: '/business'
        },
        {
            nav: 'Initiatives',
            url: '/initiatives'
        },
        {
            nav: 'Partnerships',
            url: '/partnerships'
        },
        {
            nav: 'Events',
            url: '/events'
        },
        {
            nav: 'News',
            url: '/news'
        },
        {
            nav: 'Contact',
            url: '/business/#contact'
        },
        {
            nav: 'Resource Hub',
            url: 'https://miamitechresourcehub.softr.app/'
        },
    ])

    const [currentPath, setCurrentPath] = useState(router.asPath);

    const [menuOpen, setMenuOpen] = useState(false);

    const menuRef = useRef(null);

    const pathManager = new PathManager();

    useEffect(() => {

        let set = new Set();
        set.add('Events');
        set.add('Home');
        set.add('News');
        set.add('Contact');
        setNavsToExclude(set);

        function handleClickOutside(event) {
            if (menuRef.current && menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };


    }, []);


    const [styles, setStyles] = useState(null);

    const styleManager = new StyleManager();

    useEffect(() => {

        setStyles(styleManager.getStyles());

    }, [])


    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;

            scrollY >= 40 ?
                setStyles({backgroundColor: 'white', textColor: {color: 'vm-blue', hexColor: '#3F47FF'}})
                :
                setStyles(styleManager.getStyles())
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div
            className={`h-[65px] w-full fixed top-0 left-0 z-[50] px-[10px] py-[10px] flex justify-between items-center ${styles && `${'bg-' + styles.backgroundColor} ${'text-' + styles.textColor.color}`}`}>
            <a
                href={"/"}
                className="flex-shrink-0">
                <Logo color={`${styles && styles.textColor.hexColor}`}/>
            </a>

            <ul className={'xl:flex hidden justify-center items-center gap-x-10 font-light'}>
                {
                    pathManager.getPaths().map((nav, index) => {

                        return (
                            <li key={index} className={"h-full flex items-center"}>
                                <a href={nav.url}
                                   className={`text-[14px] tracking-[0px]`}
                                >
                                    {nav.nav}
                                </a>
                            </li>
                        )

                    })
                }
            </ul>

            <div className={'xl:invisible visible'}>
                {/*<IoIosMenu size={25} color={'white'} />*/}
                <Hamburger size={20} toggled={menuOpen} toggle={setMenuOpen}/>
            </div>

            {/* MOBILE MENU */}
            <div className={`fixed top-0 right-0 bottom-0 left-0 min-h-screen fixed ${menuOpen ? 'block' : 'hidden'}`}>

                {/* OVERLAY */}
                <div
                    ref={menuRef}
                    className={`opacity-100 fixed top-0 right-0 bottom-0 left-0 z-[100] bg-[rgba(0,0,0,0.5)] transition-all ease-in-out flex justify-end`}>

                </div>

                {/* MENU CONTAINER */}
                <div className="ml-auto fixed top-0 right-0 bottom-0 left-0  z-[200] bg-white w-full md:w-[400px] h-full">

                    <div className={'px-[10px] py-[10px] ml-auto flex justify-end items-center'}>
                        {/*<IoIosMenu size={25} color={'white'} />*/}
                        <Hamburger size={20} toggled={menuOpen} toggle={setMenuOpen} color={'#3F47FF'}/>
                    </div>

                    {/* MENU */}
                    <ul className="text-vm-blue text-md mt-[100px] px-5 flex flex-col justify-center items-center">

                        {
                            pathManager.getPaths().map((nav, index)=>{

                                return(
                                    <a href={nav.url}
                                       className={`w-full`}
                                    >
                                        <li key={index} className={"w-full border-solid border-b-2 border-bg-vm-blue py-[5px]"}>

                                            {nav.nav}
                                        </li>

                                    </a>
                                )

                            })
                        }
                    </ul>

                    {/* SEARCH */}
                    <div className="absolute bottom-0 px-5 w-full h-auto mb-10">
                        <input className="px-3 w-full h-[40px] ring-1 ring-bg-vm-blue/30 placeholder-bg-vm-blue/80" type="text"
                               placeholder="Search"/>
                    </div>
                </div>

            </div>

        </div>
    )
}
