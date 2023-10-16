import * as React from 'react';
import {BsFillCalendarCheckFill, BsTreeFill} from 'react-icons/bs';
import { GiPineTree } from 'react-icons/gi';
import { IoBasketballSharp, IoRestaurant } from 'react-icons/io5';
import {FaPalette, FaSchool, FaUniversity} from 'react-icons/fa';
import {FaLocationDot, FaSchoolFlag} from "react-icons/fa6";


function Pin({ size = 15, type, place = "" }) {

    return (
        <div className="flex flex-col justify-center items-center gap-y-1">
            {/*{place !== false && (
                <p className="capitalize focus:outline-none font-semibold bg-black text-white px-2 rounded-full text-xs">
                    {place}
                </p>
            )}*/}
            <div
                className={`${getBackgroundColor(type)} rounded-full p-2 ring-2 ring-white w-[27px] h-[27px] flex justify-center items-center`}
            >
                {getIcon(type, size)}
            </div>
        </div>
    );
}

function getBackgroundColor(type) {
    // Background colors for each type
    const backgroundColors = {
        parks: 'bg-green-400',
        sports: 'bg-blue-400',
        arts: 'bg-yellow-400',
        dining: 'bg-pink-400',
        'colleges & universities': 'bg-purple-400',
        'venues': 'bg-black',
        'public schools': 'bg-slate-500',
        'private schools': 'bg-slate-700',
        'point of interest': 'bg-black',
    };

    return backgroundColors[type] || 'gray-400'; // Default to gray if type is not found
}

function getIcon(type, size) {

    const icon = {
        parks: <BsTreeFill size={size} color="white" />,
        sports: <IoBasketballSharp size={size} color="white" />,
        arts: <FaPalette size={size} color="white" />,
        dining: <IoRestaurant size={size} color="white" />,
        'colleges & universities': <FaUniversity size={size} color="white" />,
        venues: <BsFillCalendarCheckFill size={size} color="white" />,
        'public schools': <FaSchoolFlag size={size} color="white" />,
        'private schools': <FaSchool size={size} color="white" />,
        'point of interest': <FaLocationDot size={size} color="white" />,
    };

    return icon[type] || null; // Default to gray if type is not found
}

export default Pin;
