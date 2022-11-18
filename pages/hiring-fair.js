import { Container } from '../components/container'
import { Hero } from '../components/heroHF'
import { Companies } from '../components/companyList'
import { QRCodes } from '../components/qrCodes'
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/api'
import { getPosts } from "../lib/getPosts"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HiringFair(props) {
  return (
    <Layout content={props.footer}>
        <Head>
          <title>Venture Miami - Talent Ecosystem</title>
        </Head>
        <Container className="bg-vm-blue p-10">
          <Hero content={props.fair}/>
          <QRCodes content={props.fair}/>
          <div className="sm:pt-16 lg:pt-24">
            <div className="max-w-7xl">
              <div className="text-left">
                <h2 className="leading-normal text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{props.fair.companyIntro}</h2>
                <p className="mt-4 text-xl text-white">
                {props.fair.subtitle}
                </p>
              </div>
            </div>
          </div>
          <Companies records={props.records}/>
        </Container>
      </Layout>
  )
}

export async function getStaticProps() {
  
  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')
  const fair = await Client.getEntry('5NW1zqsPglhtj0FuiCpxgC', {include: 3})
  const records = await getPosts();
  
  return {
    props: {
      fair: fair.fields,
      footer: footer.fields,
      records: records,
    }
  }
}