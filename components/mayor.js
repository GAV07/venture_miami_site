import Image from "next/image"

/* This example requires Tailwind CSS v2.0+ */
  
  export function MayorSection(props) {
    return (
      <div className="relative bg-vm-blue py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
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
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
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
                      <p className="relative">
                        {props.content.mayorQuote}
                      </p>
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-base font-semibold text-indigo-200">{props.content.mayorName}</p>
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
                <p className="text-lg">
                  {props.content.paragraph}
                </p>
                
              </div>
            </div>
  
            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {props.content.stats.map((stat, i) => (
                  <a target="_blank" href={stat.fields.url}>
                    <div key={stat.fields.title} className="pointer border-t-2 border-gray-100 pt-6">
                      <dt className="text-base font-medium text-white">{stat.fields.title}</dt>
                      <dd className="text-3xl font-extrabold tracking-tight text-white">{stat.fields.statistic}</dd>
                    </div>
                  </a>
                ))}
              </dl>
              <div className="mt-10">
                <a href={props.content.link.fields.url} className="text-base font-medium text-white">
                  {' '}
                  {props.content.link.fields.text} <span aria-hidden="true">&rarr;</span>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  