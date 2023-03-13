import { useState } from 'react'
import { Container } from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/contentful'
import { Hero } from '../components/hiring-fair/Hero'
import { Features } from '../components/hiring-fair/Features'
import { FAQs } from '../components/hiring-fair/FAQ'
import { Stats } from '../components/hiring-fair/Stats'
import { Summmit } from '../components/hiring-fair/Summit'
import { CompanyForm } from '../components/hiring-fair/companyForm'



export default function HiringFair(props) {

  return (

    <Layout content={props.footer}>
        <Head>
          <title>Venture Miami Hiring Fair</title>
        </Head>
        <Container>
            <Hero content={props.hero}/>
            <Features content={props.benefits}/>
            <Stats content={props.stats}/>
            <Summmit content={props.summit}/>
            <CompanyForm />
            <FAQs content={props.fair.faQs}/>
        </Container>
      </Layout>
  )
}

export async function getStaticProps() {
  
  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')
  const fair = await Client.getEntry('5wTKqb1brRs6WiE5MbjDS', {include: 3})

  return {
    props: {
      footer: footer.fields,
      fair: fair.fields,
      hero: fair.fields.hiringFairHero.fields,
      benefits: fair.fields.fairBenefits.fields,
      stats: fair.fields.hiringStats.fields,
      summit: fair.fields.talentSummit.fields,
    }
  }
}
