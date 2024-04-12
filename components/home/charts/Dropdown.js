import { Transition } from '@headlessui/react';
import { useEffect, useState, useRef } from 'react';

export default function Dropdown({ selections, selected, handleSelection, bgColor, textColor }) {
    const [isShowing, setIsShowing] = useState(false);
    const [selection, setSelection] = useState(selected);

    const dropdownRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsShowing(false);
            }
        }
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative z-10 w-full sm:w-[400px] relative" ref={dropdownRef}>
            <button
                className={`w-full px-4 py-2 rounded-lg ${bgColor} ${textColor} flex items-center justify-between items-center space-x-4`}
                onClick={() => setIsShowing(!isShowing)}
            >
                <span>{selected}</span>
                <span className="text-xs">{isShowing ? '▲' : '▼'}</span>
            </button>

            <div className="absolute z-10 w-full overflow-y-auto rounded-md shadow-md mt-2 min-w-max bg-white max-h-[300px] h-max">
                <Transition
                    show={isShowing}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className=""
                >
                    {selections.map((selection) => (
                        <div
                            className="w-full overflow-hidden p-3 hover:bg-slate-50 cursor-pointer"
                            onClick={(e) => {
                                const newSelection = e.target.innerHTML;
                                handleSelection(newSelection);
                                setSelection((prevSelection) => newSelection);
                                setIsShowing(false);
                            }}
                        >
                            {selection}
                        </div>
                    ))}
                </Transition>
            </div>
        </div>
    );
}
