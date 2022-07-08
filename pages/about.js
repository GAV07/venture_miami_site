import { Container } from '../components/container'
import { Hero } from '../components/heroAbout'
import { Team } from '../components/team'
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/api'

export default function About(props) {
 
  return (
    <>
      <Layout >
        <Head>
          <title>Venture Miami - Innovation and Economic Development Office</title>
        </Head>
        <Container>
          <Hero content={props.hero}/>
          <Team content={props.team}/>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  
  const hero = await Client.getEntry('5I0W4kRIxQafO0LHbQKc01')
  const team = await Client.getEntry('6OjUgBFCrNGHZ7CZ28prHb')

  return {
    props: {
      hero: hero.fields,
      team: team.fields,
    }
  }
}
