import {getRecords} from "../../lib/airtable";
import Layout from "../../components/layout";
import Head from "next/head";
import {Container} from "../../components/container";
import News from "../../components/news/News";
import NewsHero from "../../components/news/NewsHero";
import {Client} from "../../lib/contentful";
import AirtableManager from "../../services/AirtableManager";

export default function Index(props){

    console.log(props.news)
    return (
        <>
            <Layout content={props.footer}>
                <Head>
                    <title>Venture Miami - News</title>
                </Head>
                <Container>
                    <NewsHero content={props.heroSection}/>
                    <News content={props.news}/>
                </Container>
            </Layout>
        </>
    )

}

export async function getStaticProps() {

    // about page
    const aboutPageEntry = await Client.getEntry("2PibIds1nATurNHUvLSc8g", {include: 10});

    // hero section
    const hero = aboutPageEntry.fields.heroSection;
    const heroSection = (await Client.getEntry(hero.sys.id, {include: 10})).fields;

    // from airtable
    // const news = await getRecords("VM Site", "News");

    const table = process.env.NEXT_PUBLIC_NEWS_TABLE;
    const baseId = process.env.NEXT_PUBLIC_VM_SITE_ID;
    const airtableManager = new AirtableManager(baseId, table);
    // const news = await airtableManager.getRecords();
    const news = await airtableManager.getSortedRecords('Date', 'desc');

    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')

    return {
        props: {
            footer: footer.fields,
            // news: news,
            news: news.records,
            heroSection: heroSection,
        },
    };
}