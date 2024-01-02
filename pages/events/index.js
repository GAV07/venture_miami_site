import { Container } from '../../components/container'
import Layout from "../../components/layout";
import Head from 'next/head'
import {Client} from "../../lib/contentful";
import {getSite} from "../../lib/airtable";
import EventsInfo from "../../components/events/Events";
import EventsHero from "../../components/events/EventsHero";
import React from "react";
import AirtableManager from "../../services/AirtableManager";

export default function Index(props) {
    return (
        <Layout content={props.footer} transparent={true}>
            <Head>
                <title>Venture Miami - Events</title>
            </Head>
            <Container>
                <EventsHero content={props.heroSection}/>
                <EventsInfo content={props.events}/>
            </Container>
        </Layout>
    )
}

export async function getStaticProps() {

    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')

    // events page
    const eventsPageEntry = await Client.getEntry("2wbz2i7s1dSVNkSL1FPeTT", {include: 10});


    // hero section
    const heroSection = eventsPageEntry.fields.heroSection.fields;

    // const events = await getSite("Events Calendar");

    const table = process.env.NEXT_PUBLIC_EVENTS_CALENDAR_TABLE;
    const baseId = process.env.NEXT_PUBLIC_VM_SITE_ID;
    const airtableManager = new AirtableManager(baseId, table);
    const events = await airtableManager.getSortedRecords('Date', 'asc');

    return {
        props: {
            footer: footer.fields,
            events: events.records,
            heroSection: heroSection
        }
    }
}







