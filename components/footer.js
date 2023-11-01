import {FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer(props) {

  return (
      <footer className="mt-20 w-full bg-vm-blue">
          <div className="w-[90%] text-white mx-auto flex flex-col justify-center items-start pt-10 pb-0">
            <div className={"flex flex-col gap-y-6 justify-start w-full"}>
              <a href={"/"}>
                <img width={130} height={130} src={"/images/logos/miami-logo-solid-yellow.png"} alt={"logo"}/>
              </a>
              <h1
                  className="text-2xl  lg:w-[30%] md:w-[40%] w-[50%] font-bold leading-10 tracking-tight"
              >
                <span className="">Follow us and become a part of the </span>
                <span className="italic pr-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block"
                > Miami </span>
                <span> movement</span>
              </h1>
              <div className={"flex justify-start items-center gap-x-6"}>
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

            <nav className={"pt-[30px] flex flex-wrap justify-center items-center w-full mx-auto gap-x-[40px] gap-y-[10px]"}>
              <a href="/" className={"text-center text-[14px] text-white hover:text-white"}>Home</a>
              <a href="/about" className={"text-center text-[14px] text-white hover:text-white"}>About</a>
              <a href="/business" className={"text-center text-[14px] text-white hover:text-white"}>Companies</a>
              <a href="/initiatives" className={"text-center text-[14px] text-white hover:text-white"}>Initiatives</a>
              <a href="/partnerships" className={"text-center text-[14px] text-white hover:text-white"}>Partnerships</a>
              {/* <a href="/events" className={"text-center text-[14px] text-white hover:text-white"}>Events</a> */}
              {/* <a href="/news" className={"text-center text-[14px] text-white hover:text-white"}>News</a> */}
              {/* <a href="/business/#contact" className={"text-center text-[14px] text-white hover:text-white"}>Contact</a> */}
              <a href="https://miamitechresourcehub.softr.app" className={"text-center text-[14px] text-white hover:text-white"}>Resource Hub</a>
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
