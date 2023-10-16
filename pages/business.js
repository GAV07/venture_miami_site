import { Container } from '../components/container'
import { Hero } from '../components/business/Hero'
import { Data } from '../components/business/Data'
import { Actions } from '../components/business/Actions'
import { CityMap } from '../components/business/map/CityMap'
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/contentful'
import {getRecords} from "../lib/airtable";
import CTA from "../components/business/CTA";
import Form from "../components/business/Form";


export default function Guide(props) {
 
  return (
    <>
      <Layout content={props.footer}>
        <Head>
          <title>Venture Miami - Companies</title>
        </Head>
        <Container>
          <Hero content={props.hero}/>
          <CityMap content={props.map} />
          <Data content={props.data}/>
          {/*<Actions content={props.actions}/>*/}
          <CTA/>
          {/*<Form/>*/}
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
  const map = await getRecords("VM Site", "Map");

  // const formTable = await getTable("VM Site", "Website Intake");
  return {
    props: {
      hero: hero.fields,
      data: data.fields,
      actions: actions.fields,
      footer: footer.fields,
      map: map,
      // form:formTable
    }
  }
}