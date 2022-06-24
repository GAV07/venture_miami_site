import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'


export default function Index({ preview, allPosts }) {
 
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Venture Miami</title>
        </Head>
        {/* <Container>
          <Intro />
          
        </Container> */}
      </Layout>
    </>
  )
}

