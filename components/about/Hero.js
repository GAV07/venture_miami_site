/* This example requires Tailwind CSS v2.0+ */
  
  export function Hero(props) {
    return (
      <div className="pt-20 relative bg-gray-900">
        <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src={props.content.image.fields.file.url}
                alt="People working on laptops"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-sm font-semibold text-indigo-300 tracking-wide uppercase">{props.content.kicker}</h2>
            <p className="mt-3 text-3xl font-extrabold text-white">
              {props.content.title}
            </p>
            <p className="mt-5 text-lg text-gray-300">
              {props.content.description}
            </p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              {props.content.stats.map((item, i) => (
                <p key={i}>
                  <span className="block text-2xl font-bold text-white">{item.fields.title}</span>
                  <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">{item.fields.statistic}</span> {item.fields.description}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  