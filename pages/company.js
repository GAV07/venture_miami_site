import { Container } from '../components/container'
import { Hero } from '../components/heroGuide'
import { MiamiData } from '../components/miamiData'
import { MiamiActions } from '../components/miamiActions'
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/api'


export default function Guide(props) {
 
  return (
    <>
      <Layout content={props.footer}>
        <Head>
          <title>Venture Miami - Relocating?</title>
        </Head>
        <Container>
          <Hero content={props.hero}/>
          <MiamiData content={props.data}/>
          <MiamiActions content={props.actions}/>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  
  const hero = await Client.getEntry('73vwICCj0Av7SVJyuZgMex')
  const data = await Client.getEntry('yDAWGHZYx0jym4ysQX6JK', {include: 3})
  const actions = await Client.getEntry('7kinZ9VBC4G4X7S45RR0GY', {include: 3})
  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')
  
  return {
    props: {
      hero: hero.fields,
      data: data.fields,
      actions: actions.fields,
      footer: footer.fields,
    }
  }
}