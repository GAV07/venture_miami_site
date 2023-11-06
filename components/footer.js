import {FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import {useState} from "react";
import {Logo} from "./logo";

export default function Footer(props) {

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

  return (
      <footer className="mt-20 w-full bg-vm-blue">
          <div className="w-[90%] text-white mx-auto flex flex-col justify-center items-start pt-10 pb-0">
            <div className={"flex flex-col gap-y-6 md:justify-start w-full "}>

              <a
                  href={"/"}
                  className="flex-shrink-0">
                <Logo/>
                {/*<img width={130} height={130} src={"/images/logos/miami-logo-solid-yellow.png"} alt={"logo"}/>*/}
              </a>
              <h1
                  className="text-2xl  lg:w-[30%] md:w-[40%] w-[80%] font-bold leading-10 tracking-tight"
              >
                <span className="">Follow us and become a part of the </span>
                <span className="italic pr-1 bg-clip-text text-transparent bg-gradient-to-r from-vm-yellow via-vm-light-yellow to-vm-lighter-yellow md:inline-block"
                > Miami </span>
                <span> movement</span>
              </h1>
              <div className={"flex justify-start gap-x-6"}>
                {props.socials.links.map((icon) => {
                  if (icon.fields.text === "Twitter") {

                    return (
                        <a className="group shadow-lg flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white transition-transform hover:scale-105" key={icon.fields.text} href={icon.fields.url}>
                          <FaTwitter size={20} color={"#1D9BF0"}/>
                        </a>
                    )

                  }else if (icon.fields.text === "Instagram") {

                    return (
                        <a className="group shadow-lg flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white transition-transform hover:scale-105" key={icon.fields.text} href={icon.fields.url}>
                          <FaInstagram size={20} color={"#E1306C"}/>
                        </a>
                    )
                  }else if (icon.fields.text === "LinkedIn") {

                    return (
                        <a className="group shadow-lg flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white transition-transform hover:scale-105" key={icon.fields.text} href={icon.fields.url}>
                          <FaLinkedin size={20} color={"#0A66C2"}/>
                        </a>
                    )
                  }
                })}
              </div>
            </div>

            <nav className={"pt-[30px] flex flex-wrap w-full md:justify-center mx-auto gap-x-[30px] gap-y-[20px]"}>

              {
                navigations.map((nav, index)=>{

                  if (
                      nav.nav !== 'Events' &&
                      nav.nav !== 'News'
                  ) {
                    return(
                        <a href={nav.url} className={"text-center text-[14px] text-white hover:text-white"}>{nav.nav}</a>

                    )
                  }

                  return null;

                })
              }
          </nav>


            <div className={"mt-[15px] w-full flex flex-col justify-center items-center mb-[10px]"}>
              {/*<hr className="ring-[0.5px] ring-white w-full"/>*/}
              <hr className="h-[1px] w-full my-8 bg-white border-0"/>
                <p className="text-[12px] text-white">
                Copyright &copy; {new Date().getFullYear()} Venture Miami-City of Miami
              </p>
            </div>
          </div>

      </footer>
  )
}
