import {Client} from "../../lib/contentful";
import {useRouter} from "next/router";
import Layout from "../../components/layout";
import Head from "next/head";
import {Container} from "../../components/container";
import AboutDetails from "../../components/about/AboutDetails";


export default function AboutDetail(props) {

    const router = useRouter();

    const {name} = router.query;


    // find the matching person
    let index = props.teamSection.findIndex((team)=>{

        return team.fields.name.trim().toLowerCase() === name.trim().toLowerCase().split("-").join(" ")
    });

    return (
        <>
            <Layout content={props.footer} transparent={true}>
                <Head>
                    <title>Venture Miami - About | {name.split("-").join(" ")}</title>
                </Head>
                <Container>

                    <AboutDetails content={{
                        team: props.teamSection,
                        index: index
                    }}/>

                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {

    // about page
    const aboutPageEntry = await Client.getEntry("6tHurDmzti6EYjCOCb9qLD", {include: 10});

    // team section
    const team = aboutPageEntry.fields.teamSection;
    const teamSection = (await Client.getEntry(team.sys.id, {include: 10})).fields;

    // advisors section
    const advisors = aboutPageEntry.fields.advisorsSection;
    const advisorsSection = (await Client.getEntry(advisors.sys.id, {include: 10})).fields;


     const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')


    return {
        props: {
            teamSection: teamSection.members.concat(advisorsSection.members),
            footer: footer.fields
        }
    }
}

export async function getStaticPaths() {


    // about page
    const aboutPageEntry = await Client.getEntry("6tHurDmzti6EYjCOCb9qLD", {include: 10});

    // team section
    const team = aboutPageEntry.fields.teamSection;
    const teamSection = (await Client.getEntry(team.sys.id, {include: 10})).fields;

    // advisors section
    const advisors = aboutPageEntry.fields.advisorsSection;
    const advisorsSection = (await Client.getEntry(advisors.sys.id, {include: 10})).fields;


    const teamsArray = teamSection.members.concat(advisorsSection.members);

    const paths = teamsArray.map((teammate) =>{

        return {
            params: {name: teammate.fields.name.trim().toLowerCase().split(" ").join("-")},
        }
    });
    return {
        paths,
        fallback: false,
    };
}
