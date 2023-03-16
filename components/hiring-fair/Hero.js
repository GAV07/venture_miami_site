import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS, BLOCKS } from '@contentful/rich-text-types';


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

export function Hero(props) {
    return (
        <div className="relative isolate overflow-hidden">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
            </svg>
            <svg
                viewBox="0 0 1108 632"
                aria-hidden="true"
                className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            >
                <path
                    fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
                    fillOpacity=".2"
                    d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
                />
                <defs>
                    <linearGradient
                        id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
                        x1="1220.59"
                        x2="-85.053"
                        y1="432.766"
                        y2="638.714"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4F46E5" />
                        <stop offset={1} stopColor="#80CAFF" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <img
                        className="h-11"
                        src={props.content.logo.fields.file.url}
                        alt="Your Company"
                    />
                    {/* <div className="mt-24 sm:mt-32 lg:mt-16">
                        <a href="#" className="inline-flex space-x-6">
                            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                                Latest updates
                            </span>
                            <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                                <span>Just shipped v1.0</span>
                                <ChevronDoubleRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                            </span>
                        </a>
                    </div> */}
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        {props.content.title}
                    </h1>
                    <div className="mt-6 text-lg leading-8 text-gray-300">
                        {documentToReactComponents(props.content.subtitle)}
                    </div>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="https://www.eventbrite.com/e/venture-miami-tech-hiring-fair-4-and-talent-summit-tickets-568374271747?aff=erelexpmlt"
                            target="_blank"
                            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                            Attend Hiring Fair →
                        </a>
                        <button onClick={() => props.setOpen(true)} className="text-sm font-semibold leading-6 text-white hover:text-gray-200">
                            Employer Registration
                        </button>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <img
                            src={props.content.image.fields.file.url}
                            alt="App screenshot"
                            width={2432}
                            height={1442}
                            className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}