import { Container } from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/api'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HiringFair(props) {
  return (
    <Layout content={props.footer}>
        <Head>
          <title>Venture Miami - Talent Ecosystem</title>
        </Head>
        <Container className="bg-vm-blue p-10">
          <div className="mt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center">
                {props.fair.logos.map((logo) => (
                  <div className="w-[75vw] flex justify-center align-center">
                    <img className="" src={logo.fields.image.fields.file.url} alt={logo.fields.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sm:pt-16 lg:pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="px-10 text-left md:text-center">
                <h2 className="leading-5 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{props.fair.title}</h2>
                <p className="mt-4 text-xl text-white">
                  {props.fair.subtitle}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            {props.fair.blocks.map((block, i) => (
              <div
                key={block.fields.title}
                className={classNames(
                  i === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                  i === 1 ? 'sm:rounded-tr-lg' : '',
                  'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                )}
              >
                <div>
                    <img className="h-12 rounded-md" src={block.fields.logo.fields.file.url} alt={block.fields.logo.fields.name} />
                </div>
                <div className="mt-8">
                  <div className="flex space-x-2">
                    <p className="text-md text-vm-blue font-bold">{block.fields.date}</p>
                    {console.log(block.fields.time)}
                    <p className="text-md text-slate-500">{block.fields.time !== undefined ? "at" : ""} {block.fields.time}</p>
                  </div>
                  <h3 className="text-lg font-medium">
                    <a href={block.fields.link} className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {block.fields.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {block.fields.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Layout>
  )
}

export async function getStaticProps() {
  
  const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')
  const fair = await Client.getEntry('5NW1zqsPglhtj0FuiCpxgC')
  
  return {
    props: {
      fair: fair.fields,
      footer: footer.fields
    }
  }
}