import { Container } from '../components/container'
import { Hero } from '../components/heroAbout'
import { Team } from '../components/team'
import Layout from '../components/layout'
import Head from 'next/head'


export default function About() {
 
  return (
    <>
      <Layout >
        <Head>
          <title>Venture Miami - Innovation and Economic Development Office</title>
        </Head>
        <Container>
          <Hero />
          <Team />
        </Container>
      </Layout>
    </>
  )
}

