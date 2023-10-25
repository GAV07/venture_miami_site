import { Container } from '../components/container'
import Hero from '../components/home/Hero'
import Stats from '../components/home/stats/Stats'
import CTA from '../components/home/CTA'
import Layout from '../components/layout'
import Head from 'next/head'
import PreLoader from '../components/home/PreLoader'
import { Client } from '../lib/contentful'
// import {/*getRecords,*/ getSite} from '../lib/airtable'
import Info from "../components/home/info/Info";


export default function Index(props) {

  return (
      // <PreLoader played={props.storage} setPlayed={props.setStorage}>
      <Layout content={props.footer} transparent={true}>
        <Head>
          <title>Venture Miami - Innovation and Economic Development Office</title>
        </Head>
        <Container>

          <Hero content={props.heroSection}/>
          <Stats content={props.statsSection} />
          {/*<Info content={props.infoSection} />*/}
          <CTA content={props.ctaSection} />
        </Container>
      </Layout>
      // </PreLoader>
  )
}

export async function getStaticProps() {

  const heroSection = (await Client.getEntry('2lONtuW7BxG5DeNo7cHXrP')).fields;
  const statsSection = (await Client.getEntry('ZIqOo0KybKXl16IyTGACL')).fields
  const ctaSection = (await Client.getEntry('5Eh6ec01u2oh1vQjEqivrS')).fields;
  const infoSection = (await Client.getEntry('7a3z9EpBnoMEo0gGAfpAWx')).fields;
  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')
  // const founders = await getRecords("Founder Database", "Pitchbook Miami CSA VC Deals - 2013/2023")

/*
  const filteredFundingData = founders.reduce((accumulator, data) => {
    const dateString = data.fields["Deal Date"];
    const date = new Date(dateString);
    const year = date.getFullYear();

    if (year <= 2022) {
      let total = parseFloat(data.fields["Deal Size"]) * 1000000;

      if (!isNaN(total)) {
        const existingItem = accumulator.find(item => item.name === year.toString());
        if (existingItem) {
          existingItem.growth += total;
        } else {
          accumulator.push({ name: year.toString(), growth: total });
        }
      }
    }

    return accumulator;
  }, []);

  filteredFundingData.sort((a, b) => parseInt(a.name) - parseInt(b.name));

  const filteredInvestorsData = founders.reduce((accumulator, data) => {
    const dateString = data.fields["Deal Date"];
    const date = new Date(dateString);
    const year = date.getFullYear();

    if (year <= 2022) {
      let total = parseFloat(data.fields["Investors"]);

      if (!isNaN(total)) {
        const existingItem = accumulator.find(item => item.name === year.toString());
        if (existingItem) {
          existingItem.growth += total;
        } else {
          accumulator.push({ name: year.toString(), growth: total });
        }
      }
    }

    return accumulator;
  }, []);

  filteredInvestorsData.sort((a, b) => parseInt(a.name) - parseInt(b.name));
*/


  return {
    props: {

      heroSection: heroSection,
      statsSection: statsSection,
      infoSection: infoSection,
      ctaSection: ctaSection,
      footer: footer.fields,
      // founders: {filteredFundingData, filteredInvestorsData},
    }
  }
}


