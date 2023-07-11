import EventsCalendar from '../components/events/EventsCalendar';
// import Chat from "../components/chat/Chat";
import React from "react";
import Head from "next/head";
import {Container} from "../components/container";
import Layout from "../components/layout";
import Chat from "../components/chat/Chat";


const mockHero = {
    title: 'Mock Hero Title',
    description: 'Mock hero description',
    image: '/path/to/hero-image.jpg',
};

const mockData = {
    title: 'Mock Data Title',
    items: [
        { title: 'Data Item 1', description: 'Description for Data Item 1' },
        { title: 'Data Item 2', description: 'Description for Data Item 2' },
        { title: 'Data Item 3', description: 'Description for Data Item 3' },
    ],
};

const mockActions = {
    title: 'Mock Actions Title',
    items: [
        { title: 'Action Item 1', description: 'Description for Action Item 1' },
        { title: 'Action Item 2', description: 'Description for Action Item 2' },
        { title: 'Action Item 3', description: 'Description for Action Item 3' },
    ],
};

const mockFooter = {
    // Footer content
};

export default function EventsPage(props) {
    return (

        <Layout content={props.footer}>
            <Head>
                <title>Venture Miami - Events</title>
            </Head>
            <Container>
                    <EventsCalendar />
                    <Chat/>
            </Container>
        </Layout>

    );
}


export async function getStaticProps() {

    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')
    const capital = await Client.getEntry('1ICyRAB3lMZDT343ZWvVrF', {include: 3})
    //const companies = await getTalent("Confirmed Companies");
    //const talent = await getTalent("Talent Database");

    return {
        props: {
            footer: footer.fields,
            hero: capital.fields.hero,
            //data: {companies, talent},
        }
    }
}
