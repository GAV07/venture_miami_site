import { Container } from './Container'
import { Logo } from '../logo-alt'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-slate-900" />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} City of Miami-Venture Miami. All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}
