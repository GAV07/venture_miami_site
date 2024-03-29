import { CheckCircleIcon } from '@heroicons/react/solid'


export function Hero(props) {
  return (
    <div className="pt-40 bg-vm-blue">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left md:text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{props.content.title}</h2>
            <p className="mt-4 text-xl text-white">
              {props.content.subtitle}
            </p>
          </div>
        </div>
      </div>
      {props.content.programs.map((program, i) => ( 
        <div key={i} className="mt-8 bg-vm-blue pb-16 sm:mt-12 sm:pb-20 lg:pb-8">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-vm-blue" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{program.fields.title}</h3>
                  <p className="mt-6 text-base text-gray-500">
                    {program.fields.description}
                  </p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-wrap md:flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                        {program.fields.calloutTitle}
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />
                    </div>
                    <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                      {program.fields.callouts.map((callout, i) => (
                        <li key={i} className="flex items-start lg:col-span-1">
                          <div className="flex-shrink-0">
                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">{callout.fields.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {program.fields.cta !== undefined ? 
                  <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg leading-6 font-medium text-gray-900">{program.fields.cta}</p>
                    <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                      <span>{program.fields.stat}</span>
                      {/* <span className="ml-3 text-xl font-medium text-gray-500">USD</span> */}
                    </div>
                    {/* <p className="mt-4 text-sm">
                      <a href={program.fields.button.fields.url} className="font-medium text-gray-500 underline">
                        {program.fields.button.fields.text}
                      </a>
                    </p> */}
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <a
                          href={program.fields.button.fields.url}
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                        >
                          {program.fields.button.fields.text}
                        </a>
                      </div>
                    </div>
                    {/* <div className="mt-4 text-sm">
                      <a href="#" className="font-medium text-gray-900">
                        Get a free sample <span className="font-normal text-gray-500">(20MB)</span>
                      </a>
                    </div> */}
                  </div>
                 : <></>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
