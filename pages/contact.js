import { Container } from '../components/container'
import ContactHero from '../components/contact/ContactHero'
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/contentful'
import {/*getRecord,*/ getRecords/*, getSchema, postRecord*/} from "../lib/airtable";
import ContactForm from "../components/contact/ContactForm";


export default function Contact(props) {

    console.log(props.formSection)
    return (
        <>
            <Layout content={props.footer}>
                <Head>
                    <title>Venture Miami - Companies</title>
                </Head>
                <Container>
                    <ContactHero content={props.heroSection}/>
                    <ContactForm content={props.formSection} />
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {

    // contact page
    const contactPageEntry = await Client.getEntry("5q7uEexqg1qmDZr7F6JEnS", {include: 10});

    // hero section
    const hero = contactPageEntry.fields.heroSection;
    const heroSection = (await Client.getEntry(hero.sys.id, {include: 10})).fields;

    // from section
    const form = contactPageEntry.fields.formSection;
    const formSection = (await Client.getEntry(form.sys.id, {include: 10})).fields;

    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')

    return {
        props: {
            footer: footer.fields,
            heroSection: heroSection,
            formSection: formSection
        }
    }
}