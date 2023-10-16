import './globals.css'
import { Inter } from 'next/font/google'
import Header from "../components/header";
import Footer from "../components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Venture Miami | Home',
    description: 'Created for the purpose of allowing users to explore important statistics and visual infographics regarding Miami and the economical, technological, and environmental opportunities it aims to bring to a thriving and robust economy.',
}

export default function RootLayout({ children, footer }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header/>
                {children}
                <Footer content={footer}/>
            </body>
        </html>
    )
}
