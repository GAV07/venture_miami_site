import { Container } from '../components/container'
import CompaniesHero from '../components/business/CompaniesHero'
import Data from '../components/business/Data'
import Actions from '../components/business/Actions'
import CityMap from '../components/business/map/CityMap'
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/contentful'
import {/*getRecord,*/ getRecords/*, getSchema, postRecord*/} from "../lib/airtable";
import CompaniesCTA from "../components/business/CompaniesCTA";
import CompaniesStats from "../components/business/CompaniesStats";


export default function Guide(props) {

  return (
    <>
      <Layout content={props.footer}>
        <Head>
          <title>Venture Miami - Companies</title>
        </Head>
        <Container>
          <CompaniesHero content={props.heroSection}/>
          <CompaniesStats content={props.statsSection} />
          <CityMap content={props.mapSection} />
          <Data content={props.incentivesSection}/>
          {/*<Actions content={props.actions}/>*/}
           <CompaniesCTA content={props.formSection}/>
          {/*<ContactForm/>*/}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  // business page
  const businessPageEntry = await Client.getEntry("2tzuviGPn9Szt5greBXhpo", {include: 10});

  // hero section
  const hero = businessPageEntry.fields.heroSection;
  const heroSection = (await Client.getEntry(hero.sys.id, {include: 10})).fields;

  // achievement section
  const stats = businessPageEntry.fields.statsSection;
  const statsSection = (await Client.getEntry(stats.sys.id, {include: 10})).fields;

  // incentives section
  const incentives = businessPageEntry.fields.incentivesSection;
  const incentivesSection = (await Client.getEntry(incentives.sys.id, {include: 10})).fields;

  // from section
  const form = businessPageEntry.fields.formSection;
  const formSection = (await Client.getEntry(form.sys.id, {include: 10})).fields;


  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')


  // map section
  const mapboxData = await getRecords("VM Site", "Map");
  const mapHero = (await Client.getEntry('2EfKHxbjjf45rZrqvV0g9i')).fields;
  const mapSection = {

    mapboxData: mapboxData,
    mapHero: mapHero
  }
  // const airtableData = await getRecord("VM SITE", "Website Intake");

  // const postData = await postRecord("VM SITE", "Website Intake");
  // console.log(postData);

  // const schema = await getSchema("VM SITE", "Website Intake");

  // const formTable = await getTable("VM Site", "Website Intake");


  return {
    props: {
      //companiesPageData: companiesPageData,
      // data: data.fields,
      // actions: actions.fields,
      footer: footer.fields,
      heroSection: heroSection,
      statsSection: statsSection,
      incentivesSection: incentivesSection,
      mapSection: mapSection,
      formSection: formSection,
      // airtableData: airtableData
      // form:formTable
    }
  }
}