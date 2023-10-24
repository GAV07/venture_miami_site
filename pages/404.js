import Layout from "../components/layout";
import {Client} from "../lib/contentful";
import Head from "next/head";
import {Container} from "../components/container";

export default function NotFound(props){


    return (

        <Layout content={props.footer} >
            <Head>
                <title>Venture Miami - Page Not Found</title>
            </Head>
            <Container>
                <div className={"w-full m-auto pt-16"}>

                    <div className={"w-[90%] mx-auto flex flex-col-reverse md:flex-row justify-center items-center space-x-[50px]"}>
                        <div className={"basis-1/2 flex flex-col justify-center items-center md:justify-start md:items-start space-y-[40px]"}>
                            <h1 className={"lg:text-[50px] md:text-[40px] md:text-start text-center text-[30px] font-bold uppercase"}>Looks like the page you're looking for doesn't exist</h1>
                            <a href={"/"} className={"max-w-max text-[14px] bg-vm-blue py-[10px] px-[30px] text-white uppercase"}>Venture Home</a>
                        </div>

                        <div className={"basis-1/2"}>
                            <h1 className={"text-center font-bold lg:text-[300px] md:text-[200px] text-[200px] text-vm-blue italic"}>404</h1>
                        </div>

                    </div>
                </div>
            </Container>
        </Layout>
    )

}

export async function getStaticProps() {

    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')

    return {
        props: {
            footer: footer.fields,
        }
    }
}