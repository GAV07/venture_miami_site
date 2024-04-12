import Footer from './Footer'
import Meta from '../components/meta'
import Header from './Header'

export default function Layout({ children, content, transparent }) {

    return (
    <div className={"selection:bg-[#ffecbc] bg-white font-sans"}>
      <Meta />
      <div className="relative overflow-hidden min-h-screen scroll-smooth">
         <Header makeTransparent={transparent}/>
        <main>{children}</main>
          <Footer socials={content}/>
      </div>
    </div>
  )
}
