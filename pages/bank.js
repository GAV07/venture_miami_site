import { BankLanding } from '../components/bankLanding'
import { Client } from '../lib/api'
import Layout from '../components/layout'
import Head from 'next/head'
import { Container } from '../components/container'

export default function Bank(props) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Venture Miami - Innovation and Economic Development Office
          </title>
        </Head>
        <Container>
          <BankLanding content={props.bank} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const bank = await Client.getEntry("2hlW8Zt6650XDsCPdAQfum");

  return {
    props: {
      bank: bank.fields,
    },
  };
}
