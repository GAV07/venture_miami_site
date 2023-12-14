import React, {useState} from "react";
import {getSite} from "../../lib/airtable";
import {Client} from "../../lib/contentful";
import Layout from "../../components/layout";
import Head from "next/head";
import {Container} from "../../components/container";
import AllEvents from "../../components/events/AllEvents";
import Hero from "../../components/events/Hero";

export default function All(props){

    const [events, setEvents] = useState(props.events);

    return (

        <Layout content={props.footer} transparent={true}>
            <Head>
                <title>Venture Miami - All Events</title>
            </Head>
            <Container>
                {/*<Hero content={props.heroSection}/>*/}
                <AllEvents content={events}/>
            </Container>
        </Layout>
    )

}

export async function getStaticProps() {

    const events = await getSite("Events Calendar")
    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')

    let sortedEvents = events.filter((event)=>{
        return( Object.keys(event.fields).length > 0 && event.fields.Show === "Yes" ) && event
    }).sort((event1, event2)=>{
        return new Date(event1.fields.Date) - new Date(event2.fields.Date)
    });

    // eventsAll page
    const eventsAllPageEntry = await Client.getEntry("UPiqTNq5lggoughkbsI89", {include: 10});

    // hero section
    const heroSection = eventsAllPageEntry.fields.heroSection.fields;

    return {
        props: {
            footer: footer.fields,
            events: sortedEvents,
            heroSection: heroSection
        }
    }
}