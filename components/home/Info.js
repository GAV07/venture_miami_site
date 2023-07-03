import Image from "next/image"

/* This example requires Tailwind CSS v2.0+ */
  
  export function InfoSection(props) {
    return (
      <div className="relative bg-vm-blue py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative min-h-[580px] pb-8 flex rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src={props.content.mayorImage.fields.file.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  unoptimized
                />
                {/* <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600" />
                <div className="relative self-end px-10">
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">{props.content.mayorQuote}</p>
                    </div>

                    <footer className="mt-4">
                      <p className="text-base font-semibold text-indigo-200">
                        {props.content.mayorName}
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-white font-extrabold tracking-tight sm:text-4xl">
                {props.content.title}
              </h2>
              <div className="mt-6 text-white space-y-6">
                <p className="text-lg">{props.content.paragraph}</p>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {props.content.stats.map((stat, i) => (
                  <a target="_blank" href={stat.fields.url}>
                    <div
                      key={stat.fields.title}
                      className="pointer border-t-2 border-gray-100 pt-6"
                    >
                      <dt className="text-base font-medium text-white">
                        {stat.fields.title}
                      </dt>
                      <dd className="text-3xl font-extrabold tracking-tight text-white">
                        {stat.fields.statistic}
                      </dd>
                    </div>
                  </a>
                ))}
              </dl>
              {/* <div className="flex w-full mt-10 space-x-5">
                <p className="text-base font-medium text-white">
                  Follow Mayor Francis Suarez on
                </p>
                <a href={props.content.twitter}>
                  <span className="sr-only">Mayor on Twitter</span>
                  <svg className="h-6 w-6 fill-white">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
                  </svg>
                </a>
                <a href={props.content.linkedIn}>
                  <span className="sr-only">Venture Miami on LinkedIn</span>
                  <svg className="fill-white" width="24" height="24">
                    <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                  </svg>
                </a>
                <a href={props.content.instagram}>
                  <span className="sr-only">Venture Miami on Instagram</span>
                  <svg className="fill-white" width="24" height="24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a href={props.content.youtube}>
                  <span className="sr-only">Venture Miami on Youtube</span>
                  <svg className="fill-white" viewBox="5 5 40 40" width="25" height="25">
                    <path d="M42.042 13.856C43.773 15.577 44 18.311 44 25s-.227 9.423-1.958 11.144C40.311 37.864 38.508 38 25 38s-15.311-.136-17.042-1.856S6 31.689 6 25s.227-9.423 1.958-11.144S11.492 12 25 12s15.311.136 17.042 1.856zM21.76 30.933l9.717-5.63-9.717-5.543v11.173z"/>
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  