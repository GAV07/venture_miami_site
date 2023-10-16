
import Link from 'next/link'

import {FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer(props) {

  return (
      <footer className="mt-20 w-full bg-black">
          <div className="w-[95%] text-white m-auto flex flex-col justify-center items-start py-16 gap-y-16">
            <div className={"flex flex-col gap-y-6 justify-start w-full"}>
              <a href={"/"}>
                <img width={130} height={130} src={"/images/logos/miami-logo-solid-yellow.png"} alt={"logo"}/>
              </a>
              <p className={"text-2xl w-[30%] font-bold"}>Join us and become a part of the Miami movement.</p>

              <div className={"flex justify-start items-center gap-x-6"}>
                {props.socials.links.map((icon) => {
                  if (icon.fields.text === "Twitter") {

                    return (
                        <Link className="group shadow-lg flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white transition-transform hover:scale-105" key={icon.fields.text} href={icon.fields.url}>
                          <FaTwitter size={25} color={"#1D9BF0"}/>
                        </Link>
                    )

                  }else if (icon.fields.text === "Instagram") {

                    return (
                        <Link className="group shadow-lg flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white transition-transform hover:scale-105" key={icon.fields.text} href={icon.fields.url}>
                          <FaInstagram size={25} color={"#E1306C"}/>
                        </Link>
                    )
                  }else if (icon.fields.text === "LinkedIn") {

                    return (
                        <Link className="group shadow-lg flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white transition-transform hover:scale-105" key={icon.fields.text} href={icon.fields.url}>
                          <FaLinkedin size={25} color={"#0A66C2"}/>
                        </Link>
                    )
                  }
                  return null;
                })}
              </div>
            </div>
            <nav className={"flex flex-wrap justify-center items-center gap-x-10 gap-y-6 w-full"}>

              <Link className="rounded-md px-3 py-2 text-base font-semibold hover:text-white/80" href="/">
                Home
              </Link>

              <Link className="rounded-md px-3 py-2 text-base font-semibold hover:text-white/80" href="/about">
                About
              </Link>

              <Link className="rounded-md px-3 py-2 text-base font-semibold hover:text-white/80" href="/business">
                Companies
              </Link>

              <Link className="rounded-md px-3 py-2 text-base font-semibold hover:text-white/80" href="/initiatives">
                Initiatives
              </Link>

              <Link className="rounded-md px-3 py-2 text-base font-semibold hover:text-white/80" href="/partnerships">
                Partnerships
              </Link>

              <Link className="rounded-md px-3 py-2 text-base font-semibold hover:text-white/80" href="/news">
                News
              </Link>

              <Link className="rounded-md px-3 py-2 text-base font-semibold hover:text-white/80" href="/contact">
                Contact
              </Link>

              <Link className="rounded-md px-3 py-2 text-base font-semibold hover:text-white/80" href="https://miamitechresourcehub.softr.app">
                Resource Hub
              </Link>
            </nav>
            <div className={"w-full flex flex-col justify-center items-start gap-y-12"}>
              <hr className="border-t-2 border-white w-full"/>
              <p className="text-sm sm:mt-0 text-center w-full font-light">
                Copyright &copy; {new Date().getFullYear()} Venture Miami-City of Miami
              </p>
            </div>
          </div>

      </footer>
  )
}
