import { MeshObject } from './meshObject'
import { Container } from '../container'

export function Hero(props) {
  return (
    <Container className="h-screen px-4 lg:pt-32">
      <MeshObject title={props.content.title} subtitle={props.content.subtitle} trees={true}/>
      <div className="absolute z-10 md:hidden top-[15vh] ">
        <h1 className=" font-display text-7xl font-medium tracking-tight leading-tight text-white">
          {props.content.title}
        </h1>
        <p className="mt-3 text-lg leading-tight text-white">
          {props.content.subtitle}
        </p>
      </div>
    </Container>
  )
}
