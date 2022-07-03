import Image from 'next/image'

import { ButtonLink } from './button'
import { Container } from './container'
import backgroundImage from '../public/images/background-call-to-action.jpg'

export function CallToAction(props) {
  console.log(props)
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32 -mx-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            {props.content.title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {props.content.subtitle}
          </p>
          <ButtonLink href={props.content.button.fields.url} color="white" className="mt-10">
            {props.content.button.fields.text}
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
