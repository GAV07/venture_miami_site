
const values = [


    {
        name: 'C.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        /*icon: RocketLaunchIcon,*/
    },
    {
        name: 'O.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        /*icon: HandRaisedIcon,*/
    },
    {
        name: 'R.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.',
        /*icon: UserGroupIcon,*/
    },
    {
        name: 'E.',
        description: 'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
        /*icon: AcademicCapIcon,*/
    }
]

export default function Values(props){

    return(
        <div className="relative px-6 mx-auto max-w-7xl xl:rounded-lg py-40  bg-vm-lavender text-vm-brown">


                <div className={"absolute top-0 right-0 -z-1 h-[500px] w-[500px] -right-40 bg-clip"}>

                    <img src={"/images/blob.png"} className={"w-full h-full object-cover"} alt=""/>
                </div>


            <div className="relative z-1 mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-7xl font-bold tracking-tight">Our C.O.R.E values</h2>
                <p className="mt-6 text-lg leading-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
                    dolor cupiditate blanditiis.
                </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                {values.map((value) => (
                    <div key={value.name} className="relative pl-9">
                        <dt className="inline font-semibold text-3xl">
                            {/*<value.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />*/}
                            {value.name}
                        </dt>{' '}
                        <dd className="inline">{value.description}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )

}