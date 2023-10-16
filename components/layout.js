import Footer from './footer'
import Meta from '../components/meta'
import Header from '../components/header'

export default function Layout({ children, content }) {

    return (
    <div className={"selection:bg-[#ffecbc] bg-white font-sans"}>
      <Meta />
      <div className="relative overflow-hidden min-h-screen scroll-smooth">
         <Header/>
        <main>{children}</main>
          <Footer socials={content}/>
      </div>
    </div>
  )
}
