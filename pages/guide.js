import { Container } from '../components/container'
import { Hero } from '../components/heroGuide'
import { Tabs } from '../components/tabs'
import { MiamiData } from '../components/miamiData'
import Layout from '../components/layout'
import Head from 'next/head'


export default function Guide() {
 
  return (
    <>
      <Layout>
        <Head>
          <title>Venture Miami - Innovation and Economic Development Office</title>
        </Head>
        <Container>
          <Hero />
          <Tabs />
          <MiamiData />
        </Container>
      </Layout>
    </>
  )
}

