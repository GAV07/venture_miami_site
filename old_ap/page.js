import RootLayout from "./layout";
import Header from "../components/header";
import {Client} from "../lib/contentful";
import {getRecords, getSite} from "../lib/airtable";
import Hero from "../components/home/Hero";
import Footer from "../components/footer";

export default async function Home(props) {

    const data = await getSiteData();

    return (

        <>
            <Hero content={data.hero}/>
        </>
    )
}

export async function getSiteData() {

    const hero = await Client.getEntry('6WLwahfXarspVrYhJzVyUY')
    const banner = await Client.getEntry('5GU3ItwJF4hGtffkrP02i4')
    const rankings = await Client.getEntry('6WLwahfXarspVrYhJzVyUY')
    const mayor = await Client.getEntry('2m2xTF7Yyl3unkoXwEFs4U')
    const features = await Client.getEntry('7gs8HupYmj0jeWzQHHryJj', {include: 3})
    const cta = await Client.getEntry('1l4KOGbKXloI5m3NU3UC0w')
    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')
    const events = await getSite("Events Calendar")
    // const founders = await getRecords("Founder Database", "Pitchbook Miami CSA VC Deals - 2013/2023")
    //const cards = await getCards()

    /*const filteredFundingData = founders.reduce((accumulator, data) => {
        const dateString = data.fields["Deal Date"];
        const date = new Date(dateString);
        const year = date.getFullYear();

        if (year <= 2022) {
            let total = parseFloat(data.fields["Deal Size"]) * 1000000;

            if (!isNaN(total)) {
                const existingItem = accumulator.find(item => item.name === year.toString());
                if (existingItem) {
                    existingItem.growth += total;
                } else {
                    accumulator.push({ name: year.toString(), growth: total });
                }
            }
        }

        return accumulator;
    }, []);

    filteredFundingData.sort((a, b) => parseInt(a.name) - parseInt(b.name));

    const filteredInvestorsData = founders.reduce((accumulator, data) => {
        const dateString = data.fields["Deal Date"];
        const date = new Date(dateString);
        const year = date.getFullYear();

        if (year <= 2022) {
            let total = parseFloat(data.fields["Investors"]);

            if (!isNaN(total)) {
                const existingItem = accumulator.find(item => item.name === year.toString());
                if (existingItem) {
                    existingItem.growth += total;
                } else {
                    accumulator.push({ name: year.toString(), growth: total });
                }
            }
        }

        return accumulator;
    }, []);

    filteredInvestorsData.sort((a, b) => parseInt(a.name) - parseInt(b.name));

*/
    return {
            hero: hero.fields,
            banner: banner.fields,
            rankings: rankings.fields,
            mayor: mayor.fields,
            features: features.fields,
            cta: cta.fields,
            footer: footer.fields,
            events: events,
            // founders: {filteredFundingData, filteredInvestorsData},
    }
}




