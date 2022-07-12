import Image from 'next/image'
import { ButtonLink } from './button'
import { MeshObject } from './meshObject'
import { Container } from './container'

export function Hero(props) {
  return (
    <Container className="h-screen py-20 px-20 mb-8 text-left lg:pt-32 overflow-visible">
      {/* <h1 className="max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
        {props.content.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg tracking-tight text-white">
        {props.content.subtitle}
      </p> */}
      <MeshObject title={props.content.title} subtitle={props.content.subtitle}/>
    </Container>
  )
}
