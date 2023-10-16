import Link from "next/link";
import {FaLinkedin, FaTwitter} from "react-icons/fa"
export function TeamCard(props){


    return(

/*        <div className="flex flex-col justify-center items-center max-w-[390px] w-[390px]">
            <div
                className={`bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80')]`}></div>

            <div className="w-[80%] bg-[#9229e5] -mt-10 shadow-lg rounded-lg overflow-hidden">
                <div className="py-2 text-center text-white font-bold uppercase tracking-wide">{props.content.fields.name}</div>
                <div className="flex flex-col items-center justify-center py-2 px-3 bg-white gap-y-4">
                    <h1 className="text-black font-bold text-center">{props.content.fields.jobTitle}</h1>

                    <div className={"flex justify-start items-center gap-x-6"}>
                        <Link className="group shadow-lg flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white transition-transform hover:scale-105" href={props.content.fields.twitter}>
                            <FaTwitter size={25} color={"#1D9BF0"}/>
                        </Link>
                        <Link className="group shadow-lg flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white transition-transform hover:scale-105" href={props.content.fields.linkedIn}>
                            <FaLinkedin size={25} color={"#1D9BF0"}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>*/

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
            >
                {team.map((person) => (
                    <li key={person.name}>
                        <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                        <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                        <p className="text-base leading-7 text-gray-300">{person.role}</p>
                        {/*<p className="text-sm leading-6 text-gray-500">{person.location}</p>*/}
                    </li>
                ))}
            </ul>
        </div>

    )
}