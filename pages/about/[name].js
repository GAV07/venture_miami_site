import {Client} from "../../lib/contentful";
import {useRouter} from "next/router";
import Layout from "../../components/layout";
import Head from "next/head";
import {Container} from "../../components/container";
import EventDetails from "../../components/events/EventDetails";
import AboutDetails from "../../components/about/AboutDetails";


export default function AboutDetail(props) {

    const router = useRouter();

    const {name} = router.query;
    console.log(props.advisors);

    let team = [];

    // put them all into one array
    for(let x = 0; x < props.team.teammates.length; x++  ){

        team.push(props.team.teammates[x]);
    }

    for(let x = 0; x < props.advisors.teammates.length; x++  ){

        team.push(props.advisors.teammates[x]);
    }

    // find the matching person
    let index = team.findIndex((team)=>{

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
                        team: team,
                        index: index
                    }}/>

                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {

    const hero = await Client.getEntry('5I0W4kRIxQafO0LHbQKc01')
    const team = await Client.getEntry('6OjUgBFCrNGHZ7CZ28prHb')
    const advisors = await Client.getEntry('7KUM58hhFdQcFqMGM6kLmb')
    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')


    return {
        props: {
            hero: hero.fields,
            team: team.fields,
            advisors: advisors.fields,
            footer: footer.fields
        }
    }
}

export async function getStaticPaths() {

    const team = await Client.getEntry('6OjUgBFCrNGHZ7CZ28prHb')
    const advisors = await Client.getEntry('7KUM58hhFdQcFqMGM6kLmb')

    let teams = [];

    for(let x = 0; x < team.fields.teammates.length; x++  ){

        teams.push(team.fields.teammates[x]);
    }

    for(let x = 0; x < advisors.fields.teammates.length; x++  ){

        teams.push(advisors.fields.teammates[x]);
    }

    const paths = teams.map((teammate) =>{
        return {
            params: {name: teammate.fields.name.trim().toLowerCase().split(" ").join("-")},
        }
    });
    return {
        paths,
        fallback: false,
    };
}
