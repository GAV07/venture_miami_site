import { Client } from "../lib/api";
import Layout from "../components/layout";
import {
  MenuIcon,
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/react/outline";

export default function Contact(props) {
  return (
    <Layout content={props.footer}>
      <header className="pt-40 relative pb-36 bg-blue-gray-800">
        <div className="absolute inset-0">
          <div className="absolute opacity-80 bg-vm-blue w-full h-full" />
          <img
            className="w-full h-full object-cover"
            src={props.contact.image.fields.file.url}
            alt=""
          />
          <div
            className="absolute inset-0 bg-blue-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative pt-10 max-w-md mx-auto px-4 pb-32 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl md:tracking-tight lg:text-6xl lg:tracking-tight">
            {props.contact.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-white">
            {props.contact.subtitle}
          </p>
        </div>
      </header>

      <div className="bg-blue-gray-50">
        {/* Cards */}
        <section
          className="-mt-32 max-w-md mx-auto relative z-10 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="flex-wrap justify-between md:flex">
            {props.contact.pointsofcontact.map((link) => (
              <div
                key={link.fields.title}
                className="mb-12 md:max-w-[40%] flex flex-col bg-white rounded-2xl shadow-xl"
              >
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <PhoneIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-blue-gray-900">
                    {link.fields.title}
                  </h3>
                  <p className="mt-4 text-base text-blue-gray-500">
                    {link.fields.description}
                  </p>
                </div>
                <div className="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a
                    href={link.fields.url}
                    className="text-base font-medium text-blue-700 hover:text-blue-600"
                  >
                    Contact us<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        {/* <section
          className="max-w-md mx-auto py-24 px-4 divide-y-2 divide-blue-gray-200 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
          aria-labelledby="faq-heading"
        >
          <h2
            className="text-3xl tracking-tight font-bold text-white"
            id="faq-heading"
          >
            Frequently asked questions
          </h2>
          <div className="mt-6 pt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
              {props.contact.faqs.map((faq) => (
                <div key={faq.fields.title}>
                  <dt className="text-lg font-medium text-white">
                    {faq.fields.title}
                  </dt>
                  <dd className="mt-2 text-base text-white">
                    {faq.fields.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section> */}
      </div>

      {/* CTA Section */}
      <section className="relative bg-vm-blue md:py-32" aria-labelledby="join-heading">
        <div
          className="hidden absolute inset-x-0 h-1/2 bg-vm-blue lg:block"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto bg-blue-600 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div
                className="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden"
                aria-hidden="true"
              />
              <div className="max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <img
                    className="object-cover object-center md:rounded-3xl shadow-2xl"
                    src={props.contact.repositories.fields.image.fields.file.url}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-white lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div
                className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-blue-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <h2
                  className="text-3xl tracking-tight font-bold text-vm-blue"
                  id="join-heading"
                >
                  {props.contact.repositories.fields.title}
                </h2>
                <p className="text-lg text-vm-blue">
                  {props.contact.repositories.fields.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 w-full justify-start">
                    {props.contact.repositories.fields.buttons.map((button) => (
                        <a
                        className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm last:text-vm-blue last:bg-white text-black bg-vm-accent hover:text-white hover:bg-blue-900"
                        href={button.fields.url}
                        >
                        {button.fields.text}
                        </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const contact = await Client.getEntry("5q7uEexqg1qmDZr7F6JEnS", {include: 3});
  const footer = await Client.getEntry("6ismKzbJGVMc3w7KWoEvfA");

  return {
    props: {
      contact: contact.fields,
      footer: footer.fields,
    },
  };
}
