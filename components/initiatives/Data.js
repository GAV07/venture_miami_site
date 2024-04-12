  
  export function Data(props) {
    return (
      <div className="bg-vm-blue">
          {props.content.dataList.map((section) => (
            <div key={section.sys.id} id={section.fields.id} className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white">{section.fields.title}</h2>
              <div className="mt-8">
                <dl className="divide-y divide-white">
                  {section.fields.list.map((point, i) => (
                    <div key={point.sys.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                      <dt className="text-base font-medium text-white md:col-span-5">
                        <a className="link link--elara" href={point.fields.url}>
                          <span className="underline md:no-underline vm-green">{point.fields.title}</span>
                        </a>
                      </dt>
                      <dd className="mt-2 md:mt-0 md:col-span-7">
                        <p className="text-base text-white">{point.fields.description}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
    )
  }
  