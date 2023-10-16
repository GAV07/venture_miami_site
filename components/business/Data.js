export function Data(props) {
    return (
        /*      <div className="bg-vm-blue">
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
                                <p className="text-base text-white">"{point.fields.description}"</p>
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  ))}
                </div>*/

        /*        <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            {
                                props.content.dataList.map((section, index) => {

                                    /!* REMOVE THIS IF ONCE CONTENTFUL SECTION IS UPDATED THAT REMOVES THE QUALITY OF LIFE SECTION *!/
                                    if (section.fields.title.toLowerCase() === "business incentives") {

                                        return (<div key={index} className="text-start">
                                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                                    {section.fields.title}
                                                </h2>

                                                <div
                                                    className="mt-16 grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-2">

                                                    {

                                                        section.fields.list.map((point, index) => {

                                                            return (

                                                                <a key={index} href={point.fields.url} className={"p-8 rounded-2xl shadow-sm bg-gray-400/5"}>
                                                                    <div className="mt-8">
                                                                        <h3 className="text-base font-semibold leading-6 text-gray-900 mb-6">
                                                                            <span href={point.fields.url}
                                                                               className="focus:outline-none bg-yellow-100 p-2 rounded-full">
                                                                                {/!* Extend touch target to entire panel *!/}
                                                                                <span className="inset-0" aria-hidden="true"/>
                                                                                {point.fields.title}
                                                                            </span>
                                                                        </h3>
                                                                        <p className="mt-2 text-sm text-gray-500">
                                                                            {point.fields.description}
                                                                        </p>
                                                                    </div>

                                                                </a>
                                                            )

                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>*/
        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[95%] m-auto xl:w-[85%]"}>


                {/* CONTENT */}
                {props.content.dataList.map((section) => {

                    if (section.fields.title.toLowerCase() === "business incentives") {

                        return (
                            /* SECTION */
                            <div className={"w-full"}>
                                {/* SECTION TITLE */}
                                <div className={"max-w-[656px] w-[80%]"}>
                                    <h1 className="text-[28px] md:text-[36px] md:text-[36px] font-bold text-[#0e1012] mb-[40px]">
                                        {section.fields.title}
                                    </h1>
                                    <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                                        {props.content.subtitle}
                                    </p>
                                </div>

                                {/* SECTION IMAGES */}
                                <div className={"mb-[80px]"}>
                                    <div
                                        className={"flex flex-col space-x-0 space-y-[20px] md:flex-row justify-center items-center md:space-x-[40px] md:space-y-0"}>

                                        <div className={"w-full w-[620px] h-[420px] h-full"}>
                                            <img
                                                src="https://images.unsplash.com/photo-1501509497947-782640bc1412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWlhbWklMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
                                                loading="lazy"
                                                // sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 45vw, 46vw"
                                                alt=""
                                                className="rounded-[16px] w-full h-full"/>

                                        </div>

                                        {/*<div className={"w-full h-full"}>*/}
                                        <div className={"w-full w-[620px] h-[420px] h-full"}>
                                            <img
                                                src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6214d8d0431e5ffb78022a5e_esg_Environment_02-p-1080.jpeg"
                                                loading="lazy"
                                                // sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 45vw, 46vw"
                                                alt=""
                                                className="rounded-[16px] w-full h-full"/>

                                        </div>
                                    </div>
                                </div>
                                {/* SECTION ITEMS */}
                                <div className={"grid grid-cols-1 md:grid-cols-3 gap-x-[32px] gap-y-[32px]"}>
                                    {section.fields.list.map((listItem) => {

                                        console.log(listItem);
                                        return (

                                            <div className={"max-w-[350px] w-full flex flex-col"}>
                                                <p className={"font-[20px] font-bold text-[#23262d] md:font-[18px] mb-[8px]"}>{listItem.fields.title}</p>
                                                <p className={"font-[16px] text-[#566171] leading-[24px]"}>{listItem.fields.description}</p>
                                                <p className={"py-[20px] mt-auto"}>
                                                    <a className={"text-[#007afc]"} href={listItem.fields.url}>Learn
                                                        more</a>
                                                </p>
                                            </div>
                                        )

                                    })}


                                </div>
                            </div>

                        )
                    }
                })}
            </div>
        </div>
    )
}
  