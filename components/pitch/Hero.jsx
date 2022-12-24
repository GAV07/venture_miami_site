import Image from 'next/image'

import { Button } from '../button'
import { Container } from './Container'
import backgroundImage from './images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            eMerge Americas Black History Month Pitch Competition 
          </h1>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Deadline', 'January 27th'],
              ['Grand Prize', '$10,000'],
              ['Second Prize', '$5,000'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-4xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <Button href="https://airtable.com/shr6ef8fFSIFJ7VvI" className="mt-10 w-full sm:hidden">
            Apply Now
          </Button>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Calling entrepreneurs in Florida! Are you ready to pitch your startup and kick start your future by making history this Black History Month? Then don't miss the eMerge Americas Black History Month Pitch Competition, presented by Venture Miami, eMerge Americas, and Silicon Valley Bank. 
            </p>
            <p>
              This is your chance to showcase your business in front of a panel of VCs, the Miami Tech community, and successful entrepreneurs, and be in the running for grants, coaching, and more. A total of 8 companies will be selected to participate in the competition, where they will have 3 minutes to pitch their business idea to a panel of judges from Venture Miami, eMerge, and SVB. 
            </p>
            <p>
              The grand prize is $10,000, with a second-place prize of $5,000. The prize money will be awarded through a founder-focused Silicon Valley Bank account that offers startup banking products and services tailored to founders.But it’s not just about the prizes - it’s about the opportunity to make history and be a part of something bigger. The winners will also get fast tracked into the 2023 eMerge Americas Startup Showcase  for the opportunity to win $420,000 investment into their company. 
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Criteria 1', 'MVP Established'],
              ['Criteria 2', 'Less than Two Years'],
              ['Criteria 3', 'Less than $1M Raised'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
