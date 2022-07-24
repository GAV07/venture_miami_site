/* This example requires Tailwind CSS v2.0+ */
  
  export function Hero(props) {
    console.log(props)
    return (
      <div className="relative bg-gray-900">
        <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
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
  