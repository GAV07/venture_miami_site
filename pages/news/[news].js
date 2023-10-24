import {useRouter} from "next/router";
import {getRecords} from "../../lib/airtable";
import {Client} from "../../lib/contentful";
import Layout from "../../components/layout";
import Head from "next/head";
import {Container} from "../../components/container";
import News from "../../components/news/News";
import NewsDetails from "../../components/news/NewsDetails";
import NotFound from "../404";


export default function NewsDetail(props) {

    const router = useRouter();

    const {news} = router.query;

    // sorts newest to oldest
    let sortedNews = props.news.sort((event1, event2) => {
        return new Date(event2.fields.Date) - new Date(event1.fields.Date);
    });

    const index = sortedNews.findIndex((ne) => {
        return ne.fields.Title.trim().toLowerCase() === news.trim().toLowerCase().split("-").join(" ");
    });

    return (

        (
            index === -1 ?
                <NotFound/>
                :
                <Layout content={props.footer}>
                    <Head>
                        <title>Venture Miami - News</title>
                    </Head>
                    <Container>
                         <NewsDetails content={{
                        sortedNews: sortedNews,
                        index: index
                    }}/>
                    </Container>
                </Layout>
        )

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
        params: {news: newsItem.fields.Title.trim().toLowerCase().split(" ").join("-")},
    }));

    return {
        paths,
        fallback: false
    };
}
