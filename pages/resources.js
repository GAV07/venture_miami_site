import React from 'react';
import Resources from '../components/resources/Resources';
import Chat from '../components/chat/Chat';
import {Container} from "../components/container";
import {Head} from "next/document";
import Layout from "../components/layout";


const mockFooter = {
    // Footer content
};
const ResourcesPage = (props) => {
    return (

        <Layout content={props.footer}>
            {/*<Head>
                <title>Venture Miami - Resources</title>
            </Head>*/}
            <Container>
                <Resources />
                <Chat/>
            </Container>
        </Layout>

    );
};

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



export default ResourcesPage;
