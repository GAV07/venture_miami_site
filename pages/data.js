import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/api'
import { getPosts } from "../lib/getPosts"
import { Container } from '../components/container'
import { Hero } from '../components/data/Hero'
import { Dashboard } from '../components/data/Dashboard'


export default function Data(props) {
  return (
    <Layout content={props.footer}>
        <Head>
          <title>Venture Miami - Data</title>
        </Head>
        <Container className="bg-vm-blue p-10">
          <Hero content={props.hero}/>
          <Dashboard data={props.data}/>
        </Container>
      </Layout>
  )
}

export async function getStaticProps() {
  
  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')
  const capital = await Client.getEntry('1ICyRAB3lMZDT343ZWvVrF', {include: 3})
  const companies = await getPosts("Confirmed Companies");
  const talent = await getPosts("Talent Database");
  
  return {
    props: {
      footer: footer.fields,
      hero: capital.fields.hero,
      data: {companies, talent}
    }
  }
}