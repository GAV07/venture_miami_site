import { Client } from "../lib/contentful";
import Layout from "../components/layout";
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS, BLOCKS } from '@contentful/rich-text-types';
import { CameraIcon } from '@heroicons/react/solid'


const Bold = ({ children }) => <p className="bold">{children}</p>;

const H2 = ({ children }) => <h2 className="mt-6 mb-2 text-2xl underline">{children}</h2>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
  },
};

export default function Contact(props) {
  return (
    <Layout content={props.footer}>
      <Head>
        <title>Venture Miami - Partnerships</title>
      </Head>
      
        <div className="overflow-hidden bg-white pt-20">
      <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-indigo-600">{props.partnership.leadIn}</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">{props.partnership.title}</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src={props.partnership.image.fields.file.url}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                {/* <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span className="ml-2">Photograph by Marcus O’Leary</span>
                </figcaption> */}
              </figure>
            </div>
          </div>
            <div className="text-black">
              {documentToReactComponents(props.partnership.mainText, options)}
            </div>
        </div>
      </div>
    </div>
     

      
            
    </Layout>
  );
}

export async function getStaticProps() {
  const partnership = await Client.getEntry("1FPFwaRFMiQMlidjdgswAb");
  const footer = await Client.getEntry("6ismKzbJGVMc3w7KWoEvfA");

  return {
    props: {
      partnership: partnership.fields,
      footer: footer.fields,
    },
  };
}
