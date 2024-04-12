import { Container } from '../components/container'
import { InitiativesHero } from '../components/initiatives/InitiativesHero'
import { Data } from '../components/initiatives/Data'
//import { Companies } from '../components/initiatives/Companies'
//import { getTalent } from "../lib/airtable"
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/contentful'
import Initiatives from "../components/initiatives/Initiatives";


export default function Talent(props) {

  return (
    <>
      <Layout content={props.footer}>
        <Head>
          <title>Venture Miami - Initiatives</title>
        </Head>
        <Container>
          <InitiativesHero content={props.heroSection} />
          <Initiatives content={props.initiativesSection}/>
          {/*<Data content={props.data}/>*/}
          {/* <Companies companies={props.companies}/> */}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  
  // const hero = await Client.getEntry('sPfwnHFfvJaLjE40fe0xM', {include: 3})
  // const tabs = await Client.getEntry('30iQqtglBuXGa77V3dZL5J')
  // const data = await Client.getEntry('27Tb8oRqA4rOI4T5IUtUBn', {include: 3})
  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')
  //const records = await getTalent("Confirmed Companies");

  // initiatives page
  const initiativesPageEntry = await Client.getEntry("5MGgo41UeA4MfpxWBnrYGD", {include: 10});


  // hero section
  const hero = initiativesPageEntry.fields.heroSection;
  const heroSection = (await Client.getEntry(hero.sys.id, {include: 10})).fields;


  // initiatives section
  const initiativesSection = initiativesPageEntry.fields.initiativesSection;

  // gets the entries for each initiatives in the array
  const initiatives = await Promise.all(
      initiativesSection.map(async (initiative) => {
        const init = (await Client.getEntry(initiative.sys.id, { include: 10 })).fields;
        return init;
      })
  );


  return {
    props: {
      initiativesSection: initiatives,
      heroSection: heroSection,
      // initiativesSection: initiativesSection,
      // tabs: tabs.fields,
      // data: data.fields,
      footer: footer.fields
    }
  }
}