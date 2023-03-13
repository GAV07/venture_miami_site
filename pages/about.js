import { Container } from '../components/container'
import { Hero } from '../components/about/Hero'
import { Team } from '../components/about/Team'
import { Advisors } from '../components/about/Advisors'
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/contentful'

export default function About(props) {
 
  return (
      <Layout content={props.footer}>
        <Head>
          <title>Venture Miami - Team</title>
        </Head>
        <Container>
          <Hero content={props.hero}/>
          <Team content={props.team}/>
          <Advisors content={props.advisors}/>
        </Container>
      </Layout>
  )
}

export async function getStaticProps() {
  
  const hero = await Client.getEntry('5I0W4kRIxQafO0LHbQKc01')
  const team = await Client.getEntry('6OjUgBFCrNGHZ7CZ28prHb')
  const advisors = await Client.getEntry('7KUM58hhFdQcFqMGM6kLmb')
  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')

  return {
    props: {
      hero: hero.fields,
      team: team.fields,
      advisors: advisors.fields,
      footer: footer.fields
    }
  }
}
