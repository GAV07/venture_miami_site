import Image from 'next/image'
import { ButtonLink } from './button'
import { MeshObject } from './meshObject'
import { Container } from './container'

export function Hero(props) {
  return (
    <Container className="h-screen px-20 lg:pt-32">
      {/* <h1 className="max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
        {props.content.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg tracking-tight text-white">
        {props.content.subtitle}
      </p> */}
      <MeshObject title={props.content.title} subtitle={props.content.subtitle} trees={true}/>
      <div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-t from-[#3F47FF] "/>
    </Container>
  )
}
