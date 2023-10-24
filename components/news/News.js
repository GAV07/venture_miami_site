export default function News(props){


    return (


        <>

        {
            /* IF NO NEWS AVAILABLE */
            props.content.length === 0 ?

                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-4xl flex flex-col justify-center items-center gap-y-10">

                            <div className={"flex flex-col justify-center items-center space-y-10"}>
                                <p className={"text-7xl font-bold text-center"}>Looks like there aren't any <span className={"italic bg-pink-200 text-white uppercase"}>news</span></p>
                                <p className={"text-2xl text-gray-400 font-light text-center"}>Come back later</p>
                            </div>

                            <div className={"aspect-[16/9] w-full"}>
                                <img
                                    className={"h-[400px] w-full object-cover"}
                                    src={"/images/newspaper.jpg"}
                                    alt={"newspaper"}
                                />
                            </div>

                        </div>
                    </div>
                </div>

                :
                <div className={"w-full m-auto pt-16"}>
                    <div className={"w-[90%] m-auto xl:w-[85%]"}>
                        <div className={"max-w-[656px] mx-auto w-[80%] m-auto text-center"}>
                            <h2 className="text-[36px] md:text-[56px] font-bold text-[#0e1012] mb-3">From Venture <span className={"italic bg-pink-200 text-white uppercase"}>Miami</span></h2>

                            <p className="text-[16px] md:text-[20px] text-[#566171] leading-8 text-vm-blue">
                                Stay up-to-date with all Venture Miami news.
                            </p>
                        </div>

                            <div className="w-[90%] mx-auto mt-16 divide-y-2 space-y-20 lg:mt-20 lg:space-y-20 flex flex-col items-center">
                                {props.content.map((post) => (
                                    <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                                        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                            <img
                                                src={post.fields.ImageUrl}
                                                alt=""
                                                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                            />
                                            {/*<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />*/}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-x-4 text-xs">
                                                <time dateTime={post.fields.Date} className="text-gray-500 text-sm">
                                                    {post.fields.Date}
                                                </time>
                                                {
                                                    post.fields.Tag1 &&
                                                    <p
                                                        className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600 bg-slate-100 text-sm"
                                                    >
                                                        {post.fields.Tag1}
                                                    </p>
                                                }

                                                {
                                                    post.fields.Tag2 &&
                                                    <p
                                                        className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600 bg-slate-100 text-sm"
                                                    >
                                                        {post.fields.Tag2}
                                                    </p>
                                                }

                                                {
                                                    post.fields.Tag3 &&
                                                    <p
                                                        className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600 bg-slate-100 text-sm"
                                                    >
                                                        {post.fields.Tag3}
                                                    </p>
                                                }

                                            </div>
                                            <div className="group relative max-w-xl">
                                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-2xl">
                                                    <a
                                                        href={`/news/${post.fields.Title.trim().toLowerCase().split(" ").join("-")}`}
                                                        className={'bg-vm-blue text-white italic'}
                                                    >
                                                        <span className="absolute inset-0" />
                                                        {post.fields.Title}
                                                    </a>
                                                </h3>
                                                <p className="mt-5 text-lg leading-6 text-gray-600">{post.fields.Description}</p>
                                            </div>
                                            {/*<div className="mt-6 flex border-t border-gray-900/5 pt-6">
                                        <div className="relative flex items-center gap-x-4">
                                            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-gray-900">
                                                    <a href={post.author.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.author.name}
                                                    </a>
                                                </p>
                                                <p className="text-gray-600">{post.author.role}</p>
                                            </div>
                                        </div>
                                    </div>*/}
                                        </div>
                                    </article>
                                ))}
                            </div>
                    </div>
                </div>
        }

        </>

    )

}