import { Container } from "../container";
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";

export function Features(props) {
  
  function leftFeature(feature) {
    return (
      <div key={feature.fields.summary} className="mt-24 relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <InboxIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                 {feature.fields.summary}
                </h2>
                <p className="mt-4 text-lg text-white">
                  {feature.fields.description}
                </p>
                <div className="mt-6 space-x-5">
                  {feature.fields.buttons.map((button) => (
                      <a
                        href={button.fields.url}
                        className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm last:text-vm-blue last:bg-white text-black bg-vm-accent hover:text-white hover:bg-blue-900"
                      >
                        {button.fields.text}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature.fields.image.fields.file.url}
                alt="Venture Miami picture"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function rightFeature(feature) {
    return (
      <div key={feature.fields.summary} className="bg-vm-blue">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  {feature.fields.summary}
                </h2>
                <p className="mt-4 text-lg text-white">
                 {feature.fields.description}
                </p>
                <div className="mt-6 space-x-5">
                  {feature.fields.buttons.map((button) => (
                    <a
                      href={button.fields.url}
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm last:text-vm-blue last:bg-white text-black bg-vm-accent hover:text-white hover:bg-blue-900"
                    >
                      {button.fields.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature.fields.image.fields.file.url}
                alt="Venture Miami picture"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Container className="relative bg-vm-blue pt-16 pb-32 overflow-hidden">
      {props.content.features.map((feature, i) => {
        if (i % 2 == 0) {
          return rightFeature(feature);
        } else {
          return leftFeature(feature);
        }
      })}
    </Container>
  );
}
