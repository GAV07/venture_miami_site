//import { ButtonLink } from './button'
import { Container } from '../container'

export function CTA(props) {
  return (
    
      <Container className="relative">
        <div className="mx-auto max-w-lg px-5 text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            {props.content.title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {props.content.subtitle}
          </p>
          {/* <ButtonLink href={props.content.button.fields.url} color="white" className="mt-10">
            {props.content.button.fields.text}
          </ButtonLink> */}
        </div>
      </Container>
  )
}
