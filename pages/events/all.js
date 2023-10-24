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
                <Hero content={{
                    text: "Upcoming Events",
                    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fHww"
                }}/>
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

    return {
        props: {
            footer: footer.fields,
            events: sortedEvents
        }
    }
}