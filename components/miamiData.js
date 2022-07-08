  
  export function MiamiData(props) {
    
    //const test = await Client.getEntry('yDAWGHZYx0jym4ysQX6JK')
    console.log(props.content)
    return (
      <div className="bg-vm-blue">
          {props.content.dataList.map((section) => (
            <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white">{section.fields.title}</h2>
              <div className="mt-8">
                <dl className="divide-y divide-white">
                  {section.fields.list.map((point, i) => (
                    <div key={point.sys.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                      <dt className="text-base font-medium text-white md:col-span-5"><a href={point.fields.url}>{point.fields.title}</a></dt>
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
  