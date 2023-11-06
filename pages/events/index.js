import { Container } from '../../components/container'
import Layout from "../../components/layout";
import Head from 'next/head'
import {Client} from "../../lib/contentful";
import {getSite} from "../../lib/airtable";
import EventsInfo from "../../components/events/Events";
import Hero from "../../components/events/Hero";
import React from "react";

export default function Index(props) {
    return (
        // <PreLoader played={props.storage} setPlayed={props.setStorage}>
        <Layout content={props.footer} transparent={true}>
            <Head>
                <title>Venture Miami - Events</title>
            </Head>
            <Container>
                <Hero content={props.heroSection}/>
                <EventsInfo content={props.events}/>
            </Container>
        </Layout>
        // </PreLoader>
    )
}

export async function getStaticProps() {

    const events = await getSite("Events Calendar")
    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')



    // events page
    const eventsPageEntry = await Client.getEntry("2wbz2i7s1dSVNkSL1FPeTT", {include: 10});


    // hero section
    const heroSection = eventsPageEntry.fields.heroSection.fields;



    return {
        props: {
            footer: footer.fields,
            events: events,
            heroSection: heroSection
        }
    }
}







