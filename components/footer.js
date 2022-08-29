import Link from 'next/link'
import { Container } from './container'
import { Logo } from './logo'

export default function Footer(props) {
  return (
    <footer className="bg-vm-blue">
      <Container className="mx-auto max-w-7xl">
        <div className="py-16">
          <div className="flex justify-center md:justify-start">
            <Logo/>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <ul className="-my-1 flex flex-wrap gap-4 md:flex-nowrap px-3 md:px-0 md:justify-center md:space-x-6">
              <li>
                <Link href="/">
                  <a className="rounded-lg px-2 py-1 text-white hover:bg-white hover:text-vm-blue">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="rounded-lg px-2 py-1 text-white hover:bg-white hover:text-vm-blue">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/company">
                  <a className="rounded-lg px-2 py-1 text-white hover:bg-white hover:text-vm-blue">
                    Relocating?
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/talent">
                  <a className="rounded-lg px-2 py-1 text-white hover:bg-white hover:text-vm-blue">
                    Initatives
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/talent">
                  <a className="rounded-lg px-2 py-1 text-white hover:bg-white hover:text-vm-blue">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-white-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex space-x-6">
            {props.socials.links.map((icon) => {
              if(icon.fields.text === "Twitter") {
                return(
                  <Link key={icon.fields.text} href={icon.fields.url}>
                    <a className="group">
                      <span className="sr-only">Venture Miami on Twitter</span>
                      <svg
                        aria-hidden="true"
                        className="h-6 w-6 fill-white group-hover:fill-vm-green"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
                      </svg>
                    </a>
                  </Link>
                )
              } else if(icon.fields.text === "Instagram") {
                  return (
                    <Link key={icon.fields.text} href={icon.fields.url}>
                      <a className="group">
                        <span className="sr-only">Venture Miami on Instagram</span>
                        <svg className="fill-white" width="24" height="24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                      </a>
                    </Link>
                  )
              } else {
                   return (
                     <Link key={icon.fields.text} href={icon.fields.url}>
                       <a className="group">
                         <span className="sr-only">Venture Miami on LinkedIn</span>
                         <svg className="fill-white" width="24" height="24">
                           <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
                         </svg>
                       </a>
                     </Link>
                   )
                }
            })}
          </div>
          <p className="mt-6 text-sm text-white sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Venture Miami-City of Miami
          </p>
        </div>
      </Container>
    </footer>
  )
}
