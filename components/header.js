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


export default function Header() {


    const [menuOpen, setMenuOpen] = useState(false);

    const menuRef = useRef(null);

    const pathManager = new PathManager(["Home", "contact"]);


    useEffect(() => {

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

    const [defaultStyle, setDefaultStyle] = useState({
        backgroundColor: 'transparent',
        textColor: {color: 'white', hexColor: '#FFF'}
    });

    const [styles, setStyles] = useState(defaultStyle);

    const router = useRouter();
    const path = router.pathname.split('/')[1]; // gets the path
    const styleManager = new StyleManager(path);

    /*useEffect(() => {

        setStyles(styleManager.getStyles());

    }, [])*/


    useEffect(() => {

        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';

    }, [menuOpen])
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;

            scrollY >= 40 ?
                setStyles({backgroundColor: 'white', textColor: {color: 'vm-blue', hexColor: '#3F47FF'}})
                :
                // setStyles(styleManager.getStyles())
                setStyles(defaultStyle)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


/*    const [placeholder, setPlaceHolder] = useState('Search...');
    const [dots, setDots] = useState(3);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => (prevDots === 3 ? 0 : prevDots + 1));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [dots]);

    useEffect(() => {
        let text = 'Search';

        for (let x = 0; x < dots; x++) {
            text += '.';
        }

        setPlaceHolder(text);
    }, [dots]);*/

    return (

        <div
            className={`h-[65px] w-full fixed top-0 left-0 z-[100] px-[10px] py-[10px] flex justify-between items-center ${styles && `${'bg-' + styles.backgroundColor} ${'text-' + styles.textColor.color}`}`}>

            {/* LOGO */}
            <div className={'flex-shrink-0 basis-1/3 flex justify-start'}>
                <a
                    href={"/"}
                    className="max-w-max">
                    <Logo color={`${styles && styles.textColor.hexColor}`}/>
                </a>
            </div>

            {/* DESKTOP NAV */}
            <ul className={'basis-1/3 xl:flex hidden justify-center items-center gap-x-10 font-light'}>
                {
                    pathManager.getPaths().map((nav, index) => {

                        return (
                            <li key={index} className={"h-full flex items-center"}>
                                <a href={nav.url}
                                   className={`text-[16px] tracking-[0px]`}
                                >
                                    {nav.nav}
                                </a>
                            </li>
                        )

                    })
                }
            </ul>

            <div className={'xl:invisible visible basis-1/3 flex justify-end'}>
                {/*<IoIosMenu size={25} color={'white'} />*/}
                <Hamburger size={20} toggled={menuOpen} toggle={setMenuOpen}/>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`fixed top-0 right-0 bottom-0 left-0 z-[100] min-h-screen ${menuOpen ? 'block' : 'hidden'}`}>

                {/* OVERLAY */}
                <div
                    ref={menuRef}
                    className={`opacity-100 fixed top-0 right-0 bottom-0 left-0 z-[100] bg-[rgba(0,0,0,0.5)] transition-all ease-in-out flex justify-end`}>

                </div>

                {/* MENU CONTAINER */}
                <div
                    className="ml-auto fixed top-0 right-0 bottom-0 left-0  z-[200] bg-white w-full md:w-[400px] h-full">

                    <div className={'px-[10px] py-[10px] ml-auto flex justify-end items-center'}>
                        {/*<IoIosMenu size={25} color={'white'} />*/}
                        <Hamburger size={20} toggled={menuOpen} toggle={setMenuOpen} color={'#3F47FF'}/>
                    </div>

                    {/* MENU */}
                    <ul className="text-vm-blue text-md mt-[100px] px-5 flex flex-col justify-center items-center">

                        {
                            pathManager.getPaths().map((nav, index) => {

                                return (
                                    <a key={index} href={nav.url}
                                       className={`w-full`}
                                    >
                                        <li className={"text-[16px] w-full border-solid border-b-2 border-bg-vm-blue py-[5px]"}>
                                            {nav.nav}
                                        </li>

                                    </a>
                                )

                            })
                        }
                    </ul>

                    {/* SEARCH */}
                    <div className="absolute bottom-0 px-5 w-full h-auto mb-10">
                        <input
                            className="text-vm-blue px-3 w-full h-[40px] ring-1 ring-vm-blue placeholder-vm-blue"
                            type="text"
                            placeholder="Search..."/>
                            {/*placeholder={placeholder}/>*/}
                    </div>
                </div>

            </div>

        </div>
    )
}


