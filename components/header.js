/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  PhoneIcon,
  BriefcaseIcon,
  PresentationChartBarIcon,
  InboxIcon,
  XIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Logo } from "./logo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="absolute z-100 w-screen">
      <div className=" w-screen px-4 sm:px-6">
        <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Venture Miami</span>
              <Logo />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a
              href="/about"
              className="text-base font-medium text-white hover:text-vm-accent"
            >
              About Us
            </a>
            <a
              href="/company"
              className="text-base font-medium text-white hover:text-vm-accent"
            >
              Relocating to Miami?
            </a>
            <a
              href="/talent"
              className="text-base font-medium text-white hover:text-vm-accent"
            >
              Our Initiatives
            </a>
            <a
              href="/contact"
              className="text-base font-medium text-white hover:text-vm-accent"
            >
              Contact Us
            </a>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "p-3 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>Join the Talent and Founder Database</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:-translate-x-32">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <a
                            href="https://airtable.com/shr1TcBO7ZwcpRrWV"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <LightBulbIcon
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Have a Request or Idea?
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                We love making our community better with the people of our community. Let's Talk!
                              </p>
                            </div>
                          </a>
                          <a
                            href="https://airtable.com/shrHqS0j6ypB2QRKz"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <BriefcaseIcon
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Join Our Talent Database
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Connect with local and incoming companies
                                looking for Miami talent.
                              </p>
                            </div>
                          </a>
                          <a
                            href="https://airtable.com/shr3zUTdjZIe2R3Hz"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <PresentationChartBarIcon
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Join Our Founder Database
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Continue growing in the Miami ecosystem by
                                tapping into local resources.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          <div className="flow-root">
                            <a
                              href="https://twitter.com/VentureMiami"
                              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                            >
                              <InboxIcon
                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-3">Questions? DM us!</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-[100] top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="https://airtable.com/shrHqS0j6ypB2QRKz"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <BriefcaseIcon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">
                        Join Our Talent Database
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Connect with local and incoming companies looking for
                        Miami talent.
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://airtable.com/shr3zUTdjZIe2R3Hz"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <PresentationChartBarIcon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">
                        Join Our Founder Database
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Continue growing in the Miami ecosystem by tapping into
                        local resources.
                      </p>
                    </div>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <a
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About Us
            </a>
              <a
              href="/company"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Relocating to Miami?
            </a>
            <a
              href="/talent"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Our Initiatives
            </a>
            <a
              href="/contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact Us
            </a>
                
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
