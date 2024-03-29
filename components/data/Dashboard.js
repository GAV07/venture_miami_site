// import { Fragment, useState } from 'react'
// import { Menu, Popover, Transition } from '@headlessui/react'
// import {
//   AcademicCapIcon,
//   CashIcon,
//   MenuIcon,
//   BellIcon,
//   BadgeCheckIcon,
//   ClockIcon,
//   ChevronDownIcon,
//   ReceiptRefundIcon,
//   UsersIcon,
//   XIcon,
// } from '@heroicons/react/outline'
// import { SearchIcon } from '@heroicons/react/outline'
// import { TalentTab } from './TalentTab'

// const user = {
//   name: 'Chelsea Hagon',
//   email: 'chelsea.hagon@example.com',
//   role: 'Human Resources Manager',
//   imageUrl:
//     'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Talent', href: '#Talent', current: true },
//   { name: 'Tech Companies', href: '#', current: false },
//   { name: 'Building', href: '#', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export function Dashboard({data}) {
//     const [tab, setTab] = useState(0)

//     const handleClick = (index) => {
//         setTab(index)
//     }
//   return (
//     <>
//       <div className="min-h-full">
//         <Popover as="header" className="pb-24">
//           {({ open }) => (
//             <>
//               <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//                 <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                
//                   <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
//                     <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
//                       {/* Left nav */}
//                       <div className="hidden lg:col-span-2 lg:block">
//                         <nav className="flex space-x-4">
//                           {navigation.map((item, index) => (
//                             <a
//                               key={item.name}
//                               href={item.href}
//                               onClick={() => handleClick(index)}
//                               className={classNames(
//                                 item.current ? 'text-white' : 'text-cyan-100',
//                                 'text-sm text-white font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
//                               )}
//                               aria-current={item.current ? 'page' : undefined}
//                             >
//                               {item.name}
//                             </a>
//                           ))}
//                         </nav>
//                       </div>
//                       <div className="px-12 lg:px-0">
//                         {/* Search */}
//                         {/* <div className="mx-auto w-full max-w-xs lg:max-w-md">
//                           <label htmlFor="search" className="sr-only">
//                             Search
//                           </label>
//                           <div className="relative text-white focus-within:text-gray-600">
//                             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                               <SearchIcon className="h-5 w-5" aria-hidden="true" />
//                             </div>
//                             <input
//                               id="search"
//                               className="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-white placeholder-white focus:border-transparent focus:bg-opacity-100 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
//                               placeholder="Search"
//                               type="search"
//                               name="search"
//                             />
//                           </div>
//                         </div> */}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Menu button */}
//                   <div className="absolute right-0 flex-shrink-0 lg:hidden">
//                     {/* Mobile menu button */}
//                     <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
//                       <span className="sr-only">Open main menu</span>
//                       {open ? (
//                         <XIcon className="block h-6 w-6" aria-hidden="true" />
//                       ) : (
//                         <div className="bg-white p-2 rounded text-vm-blue mb-10 flex">
//                             <p>Data Categories</p>
//                             <ChevronDownIcon className="ml-2 block h-6 w-6" aria-hidden="true" />
//                             </div> 
//                       )}
//                     </Popover.Button>
//                   </div>
//                 </div>
//               </div>

//               <Transition.Root as={Fragment}>
//                 <div className="lg:hidden">
//                   <Transition.Child
//                     as={Fragment}
//                     enter="duration-150 ease-out"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="duration-150 ease-in"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                   >
//                     <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
//                   </Transition.Child>

//                   <Transition.Child
//                     as={Fragment}
//                     enter="duration-150 ease-out"
//                     enterFrom="opacity-0 scale-95"
//                     enterTo="opacity-100 scale-100"
//                     leave="duration-150 ease-in"
//                     leaveFrom="opacity-100 scale-100"
//                     leaveTo="opacity-0 scale-95"
//                   >
//                     <Popover.Panel
//                       focus
//                       className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
//                     >
//                       <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//                         <div className="pt-3 pb-2">
//                           <div className="flex items-center justify-between px-4">
//                             <div>
//                               <img
//                                 className="h-8 w-auto"
//                                 src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
//                                 alt="Your Company"
//                               />
//                             </div>
//                             <div className="-mr-2">
//                               <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
//                                 <span className="sr-only">Close menu</span>
//                                 <XIcon className="h-6 w-6" aria-hidden="true" />
//                               </Popover.Button>
//                             </div>
//                           </div>
//                           <div className="mt-3 space-y-1 px-2">
//                             {navigation.map((item) => (
//                               <a
//                                 key={item.name}
//                                 href={item.href}
//                                 className="block rounded-md px-3 py-2 font-medium text-white hover:bg-gray-100 hover:text-gray-800"
//                               >
//                                 {item.name}
//                               </a>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="pt-4 pb-2">
//                           <div className="flex items-center px-5">
//                             <div className="flex-shrink-0">
//                               <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
//                             </div>
//                             <div className="ml-3 min-w-0 flex-1">
//                               <div className="truncate text-base font-medium text-gray-800">{user.name}</div>
//                               <div className="truncate text-sm font-medium text-gray-500">{user.email}</div>
//                             </div>
//                             <button
//                               type="button"
//                               className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
//                             >
//                               <span className="sr-only">View notifications</span>
//                               <BellIcon className="h-6 w-6" aria-hidden="true" />
//                             </button>
//                           </div>
//                           <div className="mt-3 space-y-1 px-2">
//                             {userNavigation.map((item) => (
//                               <a
//                                 key={item.name}
//                                 href={item.href}
//                                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
//                               >
//                                 {item.name}
//                               </a>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </Popover.Panel>
//                   </Transition.Child>
//                 </div>
//               </Transition.Root>
//             </>
//           )}
//         </Popover>
//         {/* ****************************Dashboard Main Area*********************************** */}
//         <main className="-mt-24 pb-8">
//           {/* <p>The Tab is currently {tab}</p> */}
//           {tab == 0 ? <TalentTab data={data}/> : null}
//         </main>
        
//       </div>
//     </>
//   )
// }
