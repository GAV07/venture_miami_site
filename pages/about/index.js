import { Container } from '../../components/container'
import { Hero } from '../../components/about/Hero'
import { Team } from '../../components/about/Team'
import Layout from '../../components/layout'
import Head from 'next/head'
import { Client } from '../../lib/contentful'
import {Partnerships} from "../../components/about/Partnerships";
import Community from "../../components/about/Community";
import {Achievements} from "../../components/about/Achievements";
import Values from "../../components/about/Values";

export default function Index(props) {

    console.log(props.heroSection)
  return (
      <Layout content={props.footer}>
        <Head>
          <title>Venture Miami - Team</title>
        </Head>
        <Container>
          <Hero content={props.heroSection}/>
          {/*<Community/>*/}
          {/*<Achievements/>*/}
          {/*<Values/>*/}
          {/*<Team content={{team: props.team, advisors: props.advisors}}/>*/}
          {/*<Partnerships/>*/}
        </Container>
      </Layout>
  )
}

export async function getStaticProps() {
  
  const heroSection = (await Client.getEntry('6eOV7sQdGhbNkB6GyVB6qD')).fields;
  // const team = await Client.getEntry('6OjUgBFCrNGHZ7CZ28prHb')
  // const advisors = await Client.getEntry('7KUM58hhFdQcFqMGM6kLmb')
  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')

  return {
    props: {
      heroSection: heroSection,
      // team: team.fields,
      // advisors: advisors.fields,
      footer: footer.fields
    }
  }
}
