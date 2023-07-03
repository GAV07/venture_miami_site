import { Fragment } from 'react'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Events(props) {
  return (
    <div className="">
      <h1 className="text-center text-3xl lg:text-6xl font-semibold text-white">Where is the Venture Miami Team</h1>
      <div className="mx-auto flex flex-col gap-2 lg:max-w-[50vw]">
        <ol className="bg-white rounded p-6 mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {props.content.slice().reverse().map((event) => 
            {
              if(event.fields.Show === "Yes") 
                return(
                <li key={event.id} className="relative flex space-x-6 py-6 xl:static">
                  <img src={event.fields.Image} alt="" className="h-14 w-14 flex-none rounded-full" />
                  <div className="flex-auto">
                    <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{event.fields.Name}</h3>
                    <p className="text-gray-500">{event.fields.Description}</p>
                    <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                      <div className="flex items-start space-x-3">
                        <dt className="mt-0.5">
                          <span className="sr-only">Date</span>
                          <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </dt>
                        <dd>
                          <p>
                            {event.fields.Day + " "}
                          </p>
                          <time dateTime={event.fields.Date}>
                            {event.fields.Date + " "}
                          </time>
                          <time dateTime={event.fields.Time}>
                            {event.fields.Time}
                          </time>
                        </dd>
                      </div>
                      <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                        <dt className="mt-0.5">
                          <span className="sr-only">Location</span>
                          <LocationMarkerIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </dt>
                        <dd>{event.fields.Location}</dd>
                      </div>
                    </dl>
                  </div>
                  <Menu as="div" className="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto ">
                    <div>
                      <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                        <span className="sr-only">Open options</span>
                        <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href={event.fields.URL}
                                target="_blank"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Check out Event
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li> )
            else return null
          })}
        </ol>
      </div>
    </div>
  )
}
