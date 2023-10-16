import Resource from './Resource.js'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from "react";

export default function Resources(props){

    useEffect(()=>{

        Aos.init({ duration: 200 });
    }, [])

    let smallBusiness = {
        heading: "Small Businesses",
        subheading: "Boosting Growth, Innovation, and Success for Entrepreneurs",
        color: "bg-[#F0728B]"
    };

    let artsAndCulture = {
        heading: "Arts & Culture",
        subheading: "Fueling Creativity, Celebrating Diversity, and Inspiring Communities",
        color: "bg-[#DDED97]"
    };

    let education = {
        heading: "Education",
        subheading: "Expanding Knowledge, Fostering Curiosity, and Transforming Lives",
        color: "bg-[#D79EC6]"
    };

    return(

        <div data-aos={"fade-right"} className={"w-[100%] m-auto mt-28 bg-[url('/images/wave1.svg')] bg-no-repeat bg-cover"}>
            <div className={"w-[90%] m-auto"}>

                <p className={'text-3xl text-[#170F49] font-black'}>Discover Our Resources</p>
                <p className={'text-[#6B7280] text-xl mt-5'}>Explore the diverse range of resources we offer:</p>

                <div className="flex justify-center items-center flex-wrap sm:justify-start sm:items-center">
                    <Resource
                        content={smallBusiness}
                    />
                    <Resource
                        content={artsAndCulture}
                    />
                    <Resource
                        content={education}
                    />
                </div>


                <button className="rounded-[40px] bg-[#170F49] py-3 px-12 shadow-md  text-white mt-20 transition-transform hover:scale-105">
                    Explore Resources
                </button>

            </div>

        </div>
    )


}