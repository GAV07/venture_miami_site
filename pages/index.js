import { Container } from '../components/container'
import { Hero } from '../components/hero'
import { Testimonials } from '../components/testimonials'
import { CallToAction } from '../components/callToAction'
import { SecondaryFeatures } from '../components/secondaryFeatures'
import Layout from '../components/layout'
import Head from 'next/head'


export default function Index({ preview }) {
 
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Venture Miami - Innovation and Economic Development Office</title>
        </Head>
        <Container>
          <Hero />
          <SecondaryFeatures />
          <CallToAction />
          {/* <Testimonials /> */}
        </Container>
      </Layout>
    </>
  )
}

