import Image from 'next/image'
import { Button } from './Button'
import { Container } from '../container'


export function Hero(props) {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
        Venture Miami Capital Map
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-white">
        Your guide to financial, social, or intellectual capital in Miami.
      </p>
      <div className="mt-10 flex text-white justify-center gap-x-6">
        <Button href="https://airtable.com/shrpSfDi7abBqUQl3">Miami Startups</Button>
        <Button
          href="https://airtable.com/shrWHXzYskuJO98Ox"
          variant="outline"
        >
          Miami Talent
        </Button>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-white">
          Our partners
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          
        </ul>
      </div>
    </Container>
  )
}
