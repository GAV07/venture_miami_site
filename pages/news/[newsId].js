import {useRouter} from "next/router";
import {getRecords} from "../../lib/airtable";
import {Client} from "../../lib/contentful";
import Layout from "../../components/layout";
import Head from "next/head";
import {Container} from "../../components/container";
import News from "../../components/news/News";
import NewsDetails from "../../components/news/NewsDetails";


export default function NewsDetail(props) {

    const router = useRouter();

    const {newsId} = router.query;

    return (
        <>
            <Layout content={props.footer}>
                <Head>
                    <title>Venture Miami - News</title>
                </Head>
                <Container>
                    <NewsDetails content={{
                        newsId: newsId,
                        news: props.news
                    }}/>
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

export async function getStaticPaths() {

    const news = await getRecords("VM Site", "News");

    const paths = news.map((newsItem) => ({
        params: {newsId: newsItem.id.toString()},
    }));

    return {
        paths,
        fallback: false
    };
}
