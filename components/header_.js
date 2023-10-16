"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {AiOutlineMenu} from 'react-icons/ai'
import {BsBriefcase, BsLightbulb} from 'react-icons/bs'
import {FaTwitter } from 'react-icons/fa'
import {BiBarChart} from 'react-icons/bi'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(props) {

  return (

      // <Disclosure as="nav" className="bg-gray-800">
      // <Disclosure as="nav" className="bg-black/90">
      <Disclosure as="nav" className={`${props.modifyNav ? 'absolute top-0 left-0 z-30 w-full text-white' : 'bg-white'}`}>
      {/*<Disclosure as="nav" className="bg-transparent">*/}
        {({ open }) => (
            <>
                {/*MAIN NAV*/}
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[100px] flex justify-center items-center">
                <div className="flex h-16 items-center justify-between w-full">

                  <a
                      href={"/"}
                      className="flex-shrink-0">
                    <img
                        className="h-5 w-auto"
                        src={"/images/logos/miami-logo-solid-yellow.png"}
                        alt="Venture Miami Logo"
                    />
                  </a>
                  <div className="flex items-center">

                    <div className="hidden navBreak:ml-6 navBreak:block">
                      <div className="flex space-x-4">
                        {/* Current: "bg-gray-900 text-black", Default: "text-black  hover:opacity-70" */}
                        <a href="/"
                           // className="rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-black"
                           className={`rounded-md px-3 py-2 text-base font-bold ${props.modifyNav ? 'text-white' : 'text-black'}  hover:opacity-70`}
                        >
                          Home
                        </a>
                          <a href="/about"
                           // className="rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-black"
                             className={`rounded-md px-3 py-2 text-base font-bold ${props.modifyNav ? 'text-white' : 'text-black'}  hover:opacity-70`}
                        >
                          About
                        </a>
                        <a
                            href="/business"
                            className={`rounded-md px-3 py-2 text-base font-bold ${props.modifyNav ? 'text-white' : 'text-black'}  hover:opacity-70`}
                        >
                          Companies
                        </a>
                        <a
                            href="/initiatives"
                            className={`rounded-md px-3 py-2 text-base font-bold ${props.modifyNav ? 'text-white' : 'text-black'}  hover:opacity-70`}
                        >
                          Initiatives
                        </a>
                        <a
                            href="/partnerships"
                            className={`rounded-md px-3 py-2 text-base font-bold ${props.modifyNav ? 'text-white' : 'text-black'}  hover:opacity-70`}
                        >
                          Partnerships
                        </a>
                          <a
                            href="/news"
                            className={`rounded-md px-3 py-2 text-base font-bold ${props.modifyNav ? 'text-white' : 'text-black'}  hover:opacity-70`}
                        >
                          News
                        </a>
                        <a
                            href="https://miamitechresourcehub.softr.app/"
                            className={`rounded-md px-3 py-2 text-base font-bold ${props.modifyNav ? 'text-white' : 'text-black'}  hover:opacity-70`}
                        >
                          Resource Hub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="hidden navBreak:ml-6 navBreak:block">
                    <div className="flex items-center">

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3 z-10">
                        <div>
                          <Menu.Button className={`relative flex rounded-full p-1 ${props.modifyNav ? 'text-white': 'text-black'} hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}>
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                              <AiOutlineMenu size={25}/>
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
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-[550px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="https://airtable.com/shr1TcBO7ZwcpRrWV"
                                        className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700 flex justify-start items-center'
                                        )}
                                    >
                                        <div className={"w-[10%]"}>
                                            <div className="shadow-lg flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white">
                                                <BsLightbulb
                                                    size={25} color={"rgb(31 41 55)"}
                                                    className="flex-shrink-0"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>

                                        <div className="ml-4 w-[90%]">
                                            <p className="text-base font-medium text-gray-900">
                                                Have a Request or Idea?
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                We love making our community better with the people of our community. Let's Talk!
                                            </p>
                                        </div>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="https://airtable.com/shrHqS0j6ypB2QRKz"
                                        className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700 flex justify-start items-center'
                                        )}
                                    >
                                        <div className={"w-[10%]"}>
                                            <div className="shadow-lg flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white">
                                                <BiBarChart
                                                    size={25} color={"rgb(31 41 55)"}
                                                    className="flex-shrink-0"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>

                                        <div className="ml-4 w-[90%]">
                                            <p className="text-base font-medium text-gray-900">
                                                Join Our Talent Database
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Connect with local and incoming companies
                                                looking for Miami talent.
                                            </p>
                                        </div>
                                    </a>
                                )}
                            </Menu.Item>

                              <Menu.Item>
                                  {({ active }) => (
                                      <a
                                          href="https://airtable.com/shr3zUTdjZIe2R3Hz"
                                          className={classNames(
                                              active ? 'bg-gray-100' : '',
                                              'block px-4 py-2 text-sm text-gray-700 flex justify-start items-center'
                                          )}
                                      >
                                          <div className={"w-[10%]"}>
                                              <div className="shadow-lg flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white">
                                                  <BsBriefcase
                                                      size={25} color={"rgb(31 41 55)"}
                                                      className="flex-shrink-0"
                                                      aria-hidden="true"
                                                  />
                                              </div>
                                          </div>

                                          <div className="ml-4 w-[90%]">
                                              <p className="text-base font-medium text-gray-900">
                                                  Join Our Founder Database
                                              </p>
                                              <p className="mt-1 text-sm text-gray-500">
                                                  Continue growing in the Miami ecosystem by tapping into local resources.
                                              </p>
                                          </div>
                                      </a>
                                  )}
                              </Menu.Item>
                              <Menu.Item>
                                  {({ active }) => (
                                      <a
                                          href="https://twitter.com/VentureMiami"
                                          className={classNames(
                                              active ? 'bg-gray-100' : '',
                                              'block px-4 py-2 text-sm text-gray-700 flex justify-start items-center'
                                          )}
                                      >
                                          <div className={"w-[10%]"}>
                                              <div className="shadow-lg flex justify-center items-center rounded-full w-[40px] h-[40px] bg-white">
                                                  <FaTwitter size={25} color={"#1D9BF0"}/>
                                              </div>
                                          </div>
                                          <div className="ml-4 w-[90%]">
                                              <p className="text-base font-medium text-gray-900">
                                                  Questions? DM Us!
                                              </p>
                                          </div>
                                      </a>
                                  )}
                              </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex navBreak:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className={`relative inline-flex items-center justify-center rounded-md p-2 ${props.modifyNav ? 'text-white': 'text-black'} hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}>
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                          <AiOutlineMenu size={25}/>
                      ) : (
                          <AiOutlineMenu size={25}/>
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>


              <Disclosure.Panel className="navBreak:hidden bg-white">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {/* Current: "bg-gray-900 text-black", Default: "text-black  hover:opacity-70" */}
                  <Disclosure.Button
                      as="a"
                      href="/"
                      // className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-black"
                      className="block rounded-md px-3 py-2 text-base font-medium text-black  hover:opacity-70"
                  >
                    Home
                  </Disclosure.Button>
                 <Disclosure.Button
                      as="a"
                      href="/about"
                      // className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-black"
                      className="block rounded-md px-3 py-2 text-base font-medium text-black  hover:opacity-70"
                  >
                    About
                  </Disclosure.Button>
                  <Disclosure.Button
                      as="a"
                      href="/business"
                      className="block rounded-md px-3 py-2 text-base font-medium text-black  hover:opacity-70"
                  >
                    Companies
                  </Disclosure.Button>
                  <Disclosure.Button
                      as="a"
                      href="/initiatives"
                      className="block rounded-md px-3 py-2 text-base font-medium text-black  hover:opacity-70"
                  >
                    Initiatives
                  </Disclosure.Button>
                  <Disclosure.Button
                      as="a"
                      href="/partnerships"
                      className="block rounded-md px-3 py-2 text-base font-medium text-black  hover:opacity-70"
                  >
                    Partnerships
                  </Disclosure.Button>

                 <Disclosure.Button
                      as="a"
                      href="/news"
                      className="block rounded-md px-3 py-2 text-base font-medium text-black  hover:opacity-70"
                  >
                    News
                  </Disclosure.Button>
                  <Disclosure.Button
                      as="a"
                      href="https://miamitechresourcehub.softr.app/"
                      className="block rounded-md px-3 py-2 text-base font-medium text-black  hover:opacity-70"
                  >
                    Resource Hub
                  </Disclosure.Button>
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    {/*<div className="flex-shrink-0">
                      <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                      />
                    </div>*/}
                    {/*<div className="ml-3">
                      <div className="text-base font-medium text-black">Tom Cook</div>
                      <div className="text-sm font-medium text-gray-400">tom@example.com</div>
                    </div>*/}
                    {/*<button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <AiOutlineMenu/>
                    </button>*/}
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                      <Disclosure.Button
                          as="a"
                          href="https://airtable.com/shr1TcBO7ZwcpRrWV"
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400  hover:opacity-70 flex justify-start items-center"
                      >
                          <div className={"w-[10%]"}>
                              <div className="shadow-lg flex justify-center items-center rounded-[100%] w-[40px] h-[40px] bg-white">
                                  <BsLightbulb
                                      size={25} color={"rgb(31 41 55)"}
                                      className="flex-shrink-0"
                                      aria-hidden="true"
                                  />
                              </div>
                          </div>
                          <div className="ml-4 w-[90%]">
                              <p className="text-base font-medium text-black">
                                  Have a Request or Idea?
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                  We love making our community better with the people of our community. Let's Talk!
                              </p>
                          </div>
                      </Disclosure.Button>
                      <Disclosure.Button
                          as="a"
                          href="https://airtable.com/shrHqS0j6ypB2QRKz"
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400  hover:opacity-70 flex justify-start items-center"
                      >
                          <div className={"w-[10%]"}>
                              <div className="shadow-lg flex justify-center items-center rounded-[100%] w-[40px] h-[40px] bg-white">
                                  <BiBarChart
                                      size={25} color={"rgb(31 41 55)"}
                                      className="flex-shrink-0"
                                      aria-hidden="true"
                                  />
                              </div>
                          </div>
                          <div className="ml-4 w-[90%]">
                              <p className="text-base font-medium text-black">
                                  Join Our Talent Database
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                  Connect with local and incoming companies
                                  looking for Miami talent.
                              </p>
                          </div>
                      </Disclosure.Button>
                      <Disclosure.Button
                          as="a"
                          href="https://airtable.com/shr3zUTdjZIe2R3Hz"
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400  hover:opacity-70 flex justify-start items-center"
                      >
                          <div className={"w-[10%]"}>
                              <div className="shadow-lg flex justify-center items-center rounded-[100%] w-[40px] h-[40px] bg-white">
                                  <BsBriefcase
                                      size={25} color={"rgb(31 41 55)"}
                                      className="flex-shrink-0"
                                      aria-hidden="true"
                                  />
                              </div>
                          </div>

                          <div className="ml-4 w-[90%]">
                              <p className="text-base font-medium text-black">
                                  Join Our Founder Database
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                  Continue growing in the Miami ecosystem by tapping into local resources.
                              </p>
                          </div>
                      </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href="https://twitter.com/VentureMiami"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400  hover:opacity-70 flex justify-start items-center"
                    >
                        <div className={"w-[10%]"}>
                            <div className="shadow-lg flex justify-center items-center rounded-[100%] w-[40px] h-[40px] bg-white">
                                <FaTwitter size={25} color={"#1D9BF0"}/>
                            </div>
                        </div>
                        <div className="ml-4 w-[90%]">
                            <p className="text-base font-medium text-black">
                                Questions? DM Us!
                            </p>
                        </div>
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
        )}
      </Disclosure>
  )
}
