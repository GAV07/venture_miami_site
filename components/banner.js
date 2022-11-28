import { XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { Transition } from '@headlessui/react'


export default function Banner(props) {
    const [open, setOpen] = useState(true)

    return (
        <Transition show={open} leave="transition-opacity" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed z-10 inset-x-0 bottom-0 pb-2 sm:pb-5 bg-transparent">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-white p-2 shadow-lg sm:p-3">
                    <div className="flex flex-wrap items-center justify-between">
                    <div className="flex w-0 flex-1 items-center">
                        <img src={props.content.image.fields.file.url} className="md:w-[20vw] md:h-[20vh] rounded-lg"/>
                        <div className="ml-3 text-left flex flex-col">
                            <p className="truncate font-medium text-vm-blue">
                                <span className="text-xl hidden md:inline">{props.content.title}</span>
                            </p>
                            <p className="hidden md:inline">{props.content.subtitle}</p>
                        </div>
                    </div>
                    <div className="order-3 mr-2 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                        <a
                        href="/hiring-fair"
                        className="flex items-center justify-center rounded-md border border-transparent bg-vm-accent px-4 py-2 text-sm font-medium text-vm-blue shadow-sm hover:bg-white hover:text-black"
                        >
                        More Info
                        </a>
                    </div>
                    <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                        <a
                        href="https://www.eventbrite.com/e/venture-miami-tech-hiring-fair-3-tickets-403469507157"
                        className="flex items-center justify-center rounded-md border border-transparent bg-vm-blue px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-vm-accent hover:text-black"
                        >
                        Register Now
                        </a>
                    </div>
                    <div className="self-start order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                        <button
                        type="button"
                        className="group -mr-1 flex rounded-md p-2 hover:bg-vm-blue focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={ () => setOpen(false)}
                        >
                            <span className="sr-only">Dismiss</span>
                            <XIcon className="h-6 w-6 text-vm-blue group-hover:text-white" aria-hidden="true" />
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Transition>
    )
}