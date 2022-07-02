import Image from 'next/image'

import { ButtonLink } from './button'
import { Container } from './container'

export function Hero(props) {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
        {props.content.title}
        <span className="relative whitespace-nowrap text-vm-green">
          <span className="relative">Capital of Capital</span>
        </span>{' '}
        for the US.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-white">
        {props.content.subtitle}
      </p>
      <div className="mt-10 flex justify-center space-x-6">
        {props.content.buttons.map((button, i) => (
          <ButtonLink color="white" href={button.fields.url}>{button.fields.text}</ButtonLink>
        ))}
      </div>
    </Container>
  )
}
