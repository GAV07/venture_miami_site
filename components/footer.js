import {FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {useEffect, useState} from "react";
import {Logo} from "./logo";
import PathManager from "../services/PathManager";

export default function Footer(props) {


    const pathManager = new PathManager();

    return (

        /* FOOTER CONTAINER */
        <footer className={"w-full m-auto mt-20 bg-vm-blue"}>
            {/* FOOTER CONTENT */}
            <div className="w-[95%] text-white mx-auto flex flex-col justify-center items-start pt-10 gap-y-10">

                <div className="w-full text-white mx-auto flex flex-col justify-center items-start gap-y-3">

                    {/* LOGO */}
                    <a
                        href={"/"}
                        className="max-w-max">
                        <Logo/>
                        {/*<img width={130} height={130} src={"/images/logos/miami-logo-solid-yellow.png"} alt={"logo"}/>*/}
                    </a>

                    {/* CTA TEXT */}
                    <h1
                        className="text-2xl  lg:w-[30%] md:w-[40%] w-[80%] font-bold leading-10 tracking-tight"
                    >
                        <span className="">Follow us and become a part of the </span>
                        <span
                            className="italic pr-1 bg-clip-text text-transparent bg-gradient-to-r from-vm-yellow via-vm-light-yellow to-vm-lighter-yellow md:inline-block"
                        > Miami </span>
                        <span> movement</span>
                    </h1>
                    {/* SOCIALS */}
                    <div className={"flex justify-start gap-x-6"}>
                        {props?.socials?.links.map((icon) => {
                            if (icon.fields.text === "Twitter") {

                                return (
                                    <a className="group shadow-lg flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white transition-transform hover:scale-105"
                                       key={icon.fields.text} href={icon.fields.url}>
                                        <FaTwitter size={20} color={"#1D9BF0"}/>
                                    </a>
                                )

                            } else if (icon.fields.text === "Instagram") {

                                return (
                                    <a className="group shadow-lg flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white transition-transform hover:scale-105"
                                       key={icon.fields.text} href={icon.fields.url}>
                                        <FaInstagram size={20} color={"#E1306C"}/>
                                    </a>
                                )
                            } else if (icon.fields.text === "LinkedIn") {

                                return (
                                    <a className="group shadow-lg flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white transition-transform hover:scale-105"
                                       key={icon.fields.text} href={icon.fields.url}>
                                        <FaLinkedin size={20} color={"#0A66C2"}/>
                                    </a>
                                )
                            }
                        })}
                    </div>
                </div>

               <div className={'w-full'}>
                   {/* NAVIGATIONS */}
                   <ul className={'flex justify-center flex-wrap items-center gap-x-10 gap-y-3 font-light'}>
                       {
                           pathManager.getPaths().map((nav, index) => {

                               return (
                                   <li key={index} className={"h-full flex items-center text-white"}>
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

                   {/* COPYRIGHT NOTICE */}
                   <div className={"w-full my-8 flex flex-col justify-center items-center mb-[10px] gap-y-2"}>
                       <hr className="h-[1px] w-full bg-white border-[1px]"/>
                       <p className="text-[12px] text-white">
                           Copyright &copy; {new Date().getFullYear()} Venture Miami-City of Miami
                       </p>
                   </div>
               </div>
            </div>

        </footer>
    )
}
