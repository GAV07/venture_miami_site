//import Alert from '../components/alert'
import Footer from './footer'
import Meta from '../components/meta'
import Header from '../components/header'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
