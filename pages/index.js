import { Container } from '../components/container'
import { Hero } from '../components/home/Hero'
import { InfoSection } from '../components/home/Info'
import { Events } from '../components/home/Events'
import { CTA } from '../components/home/CTA'
import { Features } from '../components/home/Features'
import Layout from '../components/layout'
import Head from 'next/head'
import PreLoader from '../components/home/PreLoader'
import Banner from '../components/home/Banner'
import { Client } from '../lib/contentful'
import { getSite } from '../lib/airtable'


export default function Index(props) {
  
  return (
    <PreLoader played={props.storage} setPlayed={props.setStorage}>
      <Layout content={props.footer}>
        <Head>
          <title>Venture Miami - Innovation and Economic Development Office</title>
        </Head>
        <Container>
          <Banner content={props.banner} />
          <Hero content={props.hero}/>
          <InfoSection content={props.mayor} />
          {/* <Events content={props.events} /> */}
          <Features content={props.features}/>
          <CTA content={props.cta} />
        </Container>
      </Layout>
    </PreLoader>
  )
}

export async function getStaticProps() {
  
  const hero = await Client.getEntry('6WLwahfXarspVrYhJzVyUY')
  const banner = await Client.getEntry('5GU3ItwJF4hGtffkrP02i4')
  const rankings = await Client.getEntry('6WLwahfXarspVrYhJzVyUY')
  const mayor = await Client.getEntry('2m2xTF7Yyl3unkoXwEFs4U')
  const features = await Client.getEntry('7gs8HupYmj0jeWzQHHryJj', {include: 3})
  const cta = await Client.getEntry('1l4KOGbKXloI5m3NU3UC0w')
  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')
  const events = await getSite("Events Calendar")
  //const cards = await getCards()
  

  return {
    props: {
      hero: hero.fields,
      banner: banner.fields,
      rankings: rankings.fields,
      mayor: mayor.fields,
      features: features.fields,
      cta: cta.fields,
      footer: footer.fields,
      events: events,
    }
  }
}


