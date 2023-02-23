import { Container } from '../components/container'
import { Hero } from '../components/talent/Hero'
import { Data } from '../components/talent/Data'
import { Companies } from '../components/talent/Companies'
import { getTalent } from "../lib/airtable"
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/contentful'


export default function Talent(props) {
  return (
    <>
      <Layout content={props.footer}>
        <Head>
          <title>Venture Miami - Initiatives</title>
        </Head>
        <Container>
          <Hero content={props.hero}/>
          <Data content={props.data}/>
          {/* <Companies companies={props.companies}/> */}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  
  const hero = await Client.getEntry('sPfwnHFfvJaLjE40fe0xM', {include: 3})
  const tabs = await Client.getEntry('30iQqtglBuXGa77V3dZL5J')
  const data = await Client.getEntry('27Tb8oRqA4rOI4T5IUtUBn', {include: 3})
  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')
  const records = await getTalent("Confirmed Companies");
  
  return {
    props: {
      hero: hero.fields,
      tabs: tabs.fields,
      data: data.fields,
      companies: records,
      footer: footer.fields
    }
  }
}