import {getRecords} from "../../lib/airtable";
import Layout from "../../components/layout";
import Head from "next/head";
import {Container} from "../../components/container";
import News from "../../components/news/News";
import Hero from "../../components/news/Hero";
import {Client} from "../../lib/contentful";

export default function Index(props){

    return (
        <>
            <Layout content={props.footer}>
                <Head>
                    <title>Venture Miami - News</title>
                </Head>
                <Container>
                    <Hero />
                    <News content={props.news}/>
                </Container>
            </Layout>
        </>
    )

}

export async function getStaticProps() {
    const news = await getRecords("VM Site", "News");

    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')

    return {
        props: {
            footer: footer.fields,
            news: news,
        },
    };
}