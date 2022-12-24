import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/api'
import { getPosts } from "../lib/getPosts"
import { Container } from '../components/container'
import { Hero } from '../components/hub/Hero'
import { PrimaryFeatures } from '../components/hub/PrimaryFeatures'
// import { Pricing } from '../components/hub/Pricing'
import { Faqs } from '../components/hub/Faqs'


export default function HiringFair(props) {
  return (
    <Layout content={props.footer}>
        <Head>
          <title>Venture Miami - Capital Map</title>
        </Head>
        <Container className="bg-vm-blue p-10">
          <Hero content={props.hero}/>
          <PrimaryFeatures content={props.databases}/>
          {/* <Pricing /> */}
          <Faqs content={props.faqs}/>
        </Container>
      </Layout>
  )
}

export async function getStaticProps() {
  
  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')
  const capital = await Client.getEntry('1ICyRAB3lMZDT343ZWvVrF', {include: 3})
  const records = await getPosts("Confirmed Companies");
  
  return {
    props: {
      footer: footer.fields,
      capital: capital.fields,
      hero: capital.fields.hero,
      databases: capital.fields.databaseSection,
      faqs: capital.fields.faqs,
      records: records,
    }
  }
}