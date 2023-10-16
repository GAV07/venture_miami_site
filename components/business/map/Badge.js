import Pin from "./Pin";
import {useEffect, useState} from "react";

export default function Badge({ type, clickedPOIs, isSelectionsCleared, handleClickedPOI }) {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        // Check if isSelectionsCleared is true and reset isClicked
        if (isSelectionsCleared) {
            setIsClicked(false);
        }

    }, [isSelectionsCleared]);

    const handleClicked = () => {
        const array = clickedPOIs;

        if (isClicked) {
            setIsClicked(false);
            const filteredArray = array.filter((poi) => poi !== type);
            handleClickedPOI(filteredArray);
        } else {
            setIsClicked(true);
            const updatedArray = [...array, type];
            handleClickedPOI(updatedArray);
        }
    }

    return (
        <button onClick={() => { handleClicked(); }} className={"w-full hover:bg-gray-100 p-2"}>
            <span className={`w-[80%] inline-flex items-center gap-x-2 px-2 py-1 rounded-full text-xs font-medium text-gray-900 border-2 ${isClicked ? 'border-blue-600' : 'border-gray-200'} bg-gray-400/10`}>
                <Pin type={type} place={false} />
                <p className={"text-start font-semibold capitalize"}>{type}</p>
            </span>
        </button>
    )
}
