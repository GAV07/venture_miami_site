import {getSite} from "../../lib/airtable";
import {Client} from "../../lib/contentful";
import {useRouter} from "next/router";
import Layout from "../../components/layout";
import Head from "next/head";
import {Container} from "../../components/container";
import EventDetails from "../../components/events/EventDetails";
import NotFound from "../../pages/404";


export default function EventsDetail(props) {

    const router = useRouter();
    const {event} = router.query;

    let sortedEvents = props.events.filter((event)=>{
        return( Object.keys(event.fields).length > 0 && event.fields.Show === "Yes" ) && event
    }).sort((event1, event2)=>{
        return new Date(event1.fields.Date) - new Date(event2.fields.Date)
    });



    const index = sortedEvents.findIndex((ev) => {
        return ev.fields.Name.trim().toLowerCase() === event.trim().toLowerCase().split("-").join(" ");
    });



    return (

        (
            index === -1 ?
                <NotFound/>
                :
                <Layout content={props.footer} >
                    <Head>
                        <title>Venture Miami - Event | {sortedEvents[index].fields.Name}</title>
                    </Head>
                    <Container>
                        <EventDetails content={{
                            sortedEvents: sortedEvents,
                            index: index
                        }}/>
                    </Container>
                </Layout>

        )
    )
}

/*export async function getServerSideProps() {

    const events = await getSite("Events Calendar")
    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')

    return {
        props: {
            footer: footer.fields,
            events: events
        }
    }
}*/

export async function getServerSideProps() {

    const events = await getSite("Events Calendar")
    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')

    return {
        props: {
            footer: footer.fields,
            events: events
        }
    }
}
/*
export async function getStaticPaths() {

    const events = await getSite("Events Calendar");

    const filteredEvents = events.filter((event)=>{

        return ( Object.keys(event.fields).length > 0 && event.fields.Show === "yes") && event
    });

    const paths = filteredEvents.map((event) =>{
        return {
            params: {event: event.fields.Name.trim().toLowerCase().split(" ").join("-")},
        }
    });

    return {
        paths,
        fallback: false,
    };
}*/
