import React, { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from './container'

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, { 'opacity-75 hover:opacity-100': !isActive })}
      {...props}
    >
      <div
        className={clsx('w-9 rounded-lg', {
          'bg-blue-600': isActive,
          'bg-vm-green': !isActive,
        })}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          {/* <feature.icon /> */}
        </svg>
      </div>
      <h3
        className={clsx('mt-6 text-sm font-medium', {
          'text-blue-600': isActive,
          'text-white': !isActive,
        })}
      >
        {feature.fields.name}
      </h3>
      <p className="mt-2 font-display text-xl text-white">
        {feature.fields.summary}
      </p>
      <p className="mt-4 text-sm text-white">{feature.fields.description}</p>
    </div>
  )
}

// function FeaturesMobile(props) {
//   return (
//     <div className="-mx-4 mt-20 space-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
//       {props.features.map((feature) => (
//         <div key={feature.fields.name}>
//           <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
//           <div className="relative mt-10 pb-10">
//             <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
//             <div className="relative mx-auto aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
//               <Image
//                 src={feature.image}
//                 alt=""
//                 layout="fill"
//                 sizes="52.75rem"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

function FeaturesDesktop(props) {
  console.log(props)
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {props.features.map((feature, featureIndex) => (
              <Feature
                key={feature.fields.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.fields.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {props.features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.fields.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    {
                      'opacity-60': featureIndex !== selectedIndex,
                    }
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="relative aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    {/* <Image
                      src={feature.fields.image.fields.file.url}
                      alt=""
                      layout="fill"
                      sizes="52.75rem"
                    /> */}
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures(props) {
  return (
    <section
      id="secondary-features"
      aria-labelledby="secondary-features-title"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container className="mx-auto max-w-7xl ">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="secondary-features-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl"
          >
            {props.content.title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {props.content.subtitle}
          </p>
        </div>
        {/* <FeaturesMobile features={props.content.features} /> */}
        <FeaturesDesktop features={props.content.features}/>
      </Container>
    </section>
  )
}
