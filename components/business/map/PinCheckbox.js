/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
/*export default function PinCheckbox() {
    return (
        <fieldset>
            <legend className="sr-only">Notifications</legend>
            <div className="space-y-5">
                <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                        <input
                            id="comments"
                            aria-describedby="comments-description"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                        <label htmlFor="comments" className="font-medium text-gray-900">
                            New comments
                        </label>{' '}
                        <span id="comments-description" className="text-gray-500">
              <span className="sr-only">New comments </span>so you always know what's happening.
            </span>
                    </div>
                </div>
                <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                        <input
                            id="candidates"
                            aria-describedby="candidates-description"
                            name="candidates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                        <label htmlFor="candidates" className="font-medium text-gray-900">
                            New candidates
                        </label>{' '}
                        <span id="candidates-description" className="text-gray-500">
              <span className="sr-only">New candidates </span>who apply for any open postings.
            </span>
                    </div>
                </div>
                <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                        <input
                            id="offers"
                            aria-describedby="offers-description"
                            name="offers"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                        <label htmlFor="offers" className="font-medium text-gray-900">
                            Offers
                        </label>{' '}
                        <span id="offers-description" className="text-gray-500">
              <span className="sr-only">Offers </span>when they are accepted or rejected by candidates.
            </span>
                    </div>
                </div>
            </div>
        </fieldset>
    )
}*/

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BiSolidChevronDown } from 'react-icons/bi'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function PinCheckbox() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Options
                    <BiSolidChevronDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Account settings
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Support
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    License
                                </a>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

