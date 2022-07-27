//import Alert from '../components/alert'
import Footer from './footer'
import Meta from '../components/meta'
import Header from '../components/header'

export default function Layout({ children, content }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-vm-blue">
        <Header />
        <main>{children}</main>
      </div>
      <Footer socials={content}/>
    </>
  )
}
