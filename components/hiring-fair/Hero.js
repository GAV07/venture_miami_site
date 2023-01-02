

export function Hero(props) {
  return (
    <div className="mt-32 relative flex flex-col-reverse items-center overflow-hidden">
      <div className="">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight leading-tight text-white text-center sm:text-5xl md:text-6xl">
                {props.content.hiringFairHero.fields.title}
              </h1>
              <p className="mt-3 text-base text-center text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                {props.content.hiringFairHero.fields.subtitle}
              </p>
              {/* <div className="mt-5 flex flex-wrap gap-4 sm:mt-8 justify-center lg:justify-start">
                    {props.content.hiringFairHero.fields.buttons.map((button) => (
                        <div className="rounded-md shadow">
                            <a
                                href={button.fields.url}
                                className="flex w-full items-center justify-center shadow-sm rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-vm-accent md:py-4 md:px-10 md:text-lg last:text-vm-blue last:bg-white"
                            >
                                {button.fields.text}
                            </a>
                        </div>
                    ))}
              </div> */}
            </div>
          </main>
        </div>
      </div>
      <div className="lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover rounded-lg sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={props.content.hiringFairHero.fields.image.fields.file.url}
          alt=""
        />
      </div>
    </div>
  )
}
