import { Container } from '../components/container'
import { Hero } from '../components/heroGuide'
import { Tabs } from '../components/tabs'
import { MiamiData } from '../components/miamiData'
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/api'


export default function Guide(props) {
 
  return (
    <>
      <Layout>
        <Head>
          <title>Venture Miami - Innovation and Economic Development Office</title>
        </Head>
        <Container>
          <Hero content={props.hero}/>
          <Tabs content={props.tabs}/>
          <MiamiData content={props.data}/>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  
  const hero = await Client.getEntry('73vwICCj0Av7SVJyuZgMex')
  const tabs = await Client.getEntry('3BI4Nt92AqIWqW7Jz3Rppp')
  const data = await Client.getEntry('yDAWGHZYx0jym4ysQX6JK', {include: 3})
  
  return {
    props: {
      hero: hero.fields,
      tabs: tabs.fields,
      data: data.fields,
    }
  }
}