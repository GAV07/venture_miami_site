import {Client} from "../lib/contentful";
import Layout from "../components/layout";
import Head from 'next/head'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {MARKS, BLOCKS} from '@contentful/rich-text-types';
import {CameraIcon} from '@heroicons/react/solid'
import PartnershipInfo from "../components/partnerships/PartnershipInfo";
import Partnerships from "../components/partnerships/Partnerships";
import CTA from "../components/partnerships/CTA";
import { PartnerRotate } from "../components/partnerships/PartnerRotate";



export default function Contact(props) {

    return (
        <Layout content={props.footer}>
            <Head>
                <title>Venture Miami - Partnerships</title>
            </Head>
             {/*<Partnerships />*/}
             {/*<PartnerRotate content={props.partnersSection}/>*/}
            <CTA content={props.heroSection}/>
            <PartnershipInfo content={props.partnershipsSection}/>
        </Layout>
    );
}

export async function getStaticProps() {
    // const partnership = await Client.getEntry("1FPFwaRFMiQMlidjdgswAb");
    const footer = await Client.getEntry("6ismKzbJGVMc3w7KWoEvfA");

    // partnerships page
    const partnershipsPageEntry = await Client.getEntry("1FPFwaRFMiQMlidjdgswAb", {include: 10});


    // hero section
    const hero = partnershipsPageEntry.fields.heroSection;
    const heroSection = (await Client.getEntry(hero.sys.id, {include: 10})).fields;


    // gallery section
    const gallery = partnershipsPageEntry.fields.gallery;

    // partnerships section
    const partnerships = partnershipsPageEntry.fields.partnerships;
    const partnershipsSection = (await Client.getEntry(partnerships.sys.id, {include: 10})).fields;

    // partners section (fix this!!!!!!)
    // const partners = aboutPageEntry.fields.partnersSection;
    // const rotateSection = (await Client.getEntry(partners.sys.id, {include: 10})).fields;


    return {
        props: {
            heroSection: {
                heroSection,
                gallery
            },
            gallerySection: gallery,
            partnershipsSection: partnershipsSection,
            footer: footer.fields,
        },
    };
}
