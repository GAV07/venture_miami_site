export function Summmit(props) {
    return(
        <div className="mt-12 sm:mt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">{props.content.lead}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{props.content.title}</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {props.content.subtitle}
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src={props.content.image.fields.file.url}
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-vm-blue pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {props.content.benefits.map((benefit, i) => (
                <div key={i} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <img
                      src={benefit.fields.image.fields.file.url}
                      alt="App screenshot"
                      className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                      width={2432}
                      height={1442}
                    />
                    {benefit.fields.title}
                  </dt>{' '}
                  <dd className="inline">{benefit.fields.subtitle}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
    )
}