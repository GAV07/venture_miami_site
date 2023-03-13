
export function Features(props) {
   return(
    <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">{props.content.lead}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {props.content.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {props.content.subtitle}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {props.content.benefits.map((benefit) => (
                <div key={benefit.fields.title} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                      <img
                          className="rounded"
                          src={benefit.fields.image.fields.file.url}
                          alt="Your Company"
                      />
                    </div>
                    {benefit.fields.title}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{benefit.fields.subtitle}</p>
                    {/* <p className="mt-6">
                      <a href={benefit.href} className="text-sm font-semibold leading-6 text-indigo-400">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p> */}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
   )
}