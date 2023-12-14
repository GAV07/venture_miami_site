import { Container } from '../components/container'
import Hero from '../components/home/Hero'
import Stats from '../components/home/stats/Stats'
import CTA from '../components/home/CTA'
import Layout from '../components/layout'
import Head from 'next/head'
import PreLoader from '../components/home/PreLoader'
import { Client } from '../lib/contentful'
// import {/*getRecords,*/ getSite} from '../lib/airtable'
import { getSite } from "../lib/airtable";
import Info from "../components/home/info/Info";
import MayorsQuote from "../components/home/MayorsQuote";


export default function Index(props) {


    console.log(props.mayorsQuoteSection)
    return (
      // <PreLoader played={props.storage} setPlayed={props.setStorage}>
      <Layout content={props.footer} transparent={true}>
        <Head>
          <title>Venture Miami - Innovation and Economic Development Office</title>
        </Head>
        <Container>

          <Hero content={props.heroSection} video={props.bgVideo}/>
          <MayorsQuote content={props.mayorsQuoteSection} />
          <Stats content={props.statsSection} />
          <Info content={props.infoSection} />
          <CTA content={props.ctaSection} />
        </Container>
      </Layout>
      // </PreLoader>
  )
}

export async function getStaticProps() {

    // home page
    const homePageEntry = await Client.getEntry("6gZiocNJVwo7xWGjuL7dBB", {include: 10});

    // hero section
    const hero = homePageEntry.fields.heroSection;
    const heroSection = (await Client.getEntry(hero.sys.id, {include: 10})).fields;

    // stats section
    const mayorsQuote = homePageEntry.fields.mayorsQuote;
    const mayorsQuoteSection = (await Client.getEntry(mayorsQuote.sys.id, {include: 10})).fields;

    // stats section
    const stats = homePageEntry.fields.statsSection;
    const statsSection = (await Client.getEntry(stats.sys.id, {include: 10})).fields;

    // cta section
    const cta = homePageEntry.fields.ctaSection;
    const ctaSection = (await Client.getEntry(cta.sys.id, {include: 10})).fields;

    // info section
    const info = homePageEntry.fields.infoSection;
    const infoSection = (await Client.getEntry(info.sys.id, {include: 10})).fields;


    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')

    // main bg video
    const bgVideo = await getSite("Media Content");
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
      bgVideo: bgVideo,
      heroSection: heroSection,
      mayorsQuoteSection: mayorsQuoteSection,
      statsSection: statsSection,
      infoSection: infoSection,
      ctaSection: ctaSection,
      footer: footer.fields,
      // founders: {filteredFundingData, filteredInvestorsData},
    }
  }
}


