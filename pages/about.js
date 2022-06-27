import { Container } from '../components/container'
import { Hero } from '../components/hero-about'
import Layout from '../components/layout'
import Head from 'next/head'


export default function About({ preview }) {
 
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Venture Miami - Innovation and Economic Development Office</title>
        </Head>
        <Container>
          <Hero />
          
        </Container>
      </Layout>
    </>
  )
}

