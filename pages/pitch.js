import Head from 'next/head'
import { CTA } from '../components/pitch/CTA'
import { Footer } from '../components/pitch/Footer'
import { Header } from '../components/pitch/Header'
import { Hero } from '../components/pitch/Hero'
import { Newsletter } from '../components/pitch/Newsletter'
import { Schedule } from '../components/pitch/Schedule'
import { Speakers } from '../components/pitch/Speakers'
import { Sponsors } from '../components/pitch/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>Black History Month Pitch Competition</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta
          name="description"
          content="Calling entrepreneurs in South Florida! Are you ready to pitch your startup and kick start your future by making history this Black History Month? Then don't miss the eMerge Americas Black History Month Pitch Competition, presented by Venture Miami, eMerge Americas, and Silicon Valley Bank."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <Sponsors /> */}
        {/* <Speakers /> */}
        <Schedule />
        <CTA />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  )
}
