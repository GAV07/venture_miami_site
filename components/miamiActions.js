
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export function MiamiActions(props) {
    return (
      <>
        <div className="px-3 lg:px-0 mx-auto max-w-lg lg:max-w-7xl">
          <h2 className="text-4xl text-left md:text-center mb-4 tracking-tight font-bold text-white sm:text-5xl sm:tracking-tight">{props.content.name}</h2>
          <p className="text-white text-left md:text-center text-indigo-100 text-lg">{props.content.subtitle}</p>
        </div>
        {props.content.group.map((section, i) => (
          <div key={i} className="bg-vm-blue pt-16 pb-20 px-3 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
              <div>
                <h2 className="text-3xl tracking-tight font-bold text-white sm:text-4xl sm:tracking-tight">
                  {section.fields.title}
                </h2>
                <p className="mt-3 text-xl text-white sm:mt-4">
                  {section.fields.subtitle}
                </p>
              </div>
              <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                {section.fields.actions.map((action) => (
                  <div key={action.fields.title}>
                    <div>
                      <a href={action.fields.url} className="inline-block">
                        <span
                          className={classNames(
                            'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-vm-accent'
                          )}
                        >
                          {action.fields.title}
                        </span>
                      </a>
                    </div>
                    <a href={action.url} className="block mt-4">
                      <p className="text-xl font-semibold text-white">{action.fields.title}</p>
                      <p className="mt-3 text-base text-white">{action.fields.description}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }
  