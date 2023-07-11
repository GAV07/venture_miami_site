import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Dropdown = ({ color, categories, handleSearch, updateFilterMethod }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryClick = (category) => {

        if( category === "All" ){

            category = "";
            updateFilterMethod(false);
        }else{
            updateFilterMethod(true);
        }
        setSelectedCategory(category);
        handleSearch(category);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div className={"w-[300px] flex justify-center items-center"}>
                <span className="mr-2 text-white">Filter by:</span>
                <button
                    type="button"
                    className={`inline-flex justify-center items-center space-x-4 px-5 py-2 ${color} border rounded-md font-semibold bg-white text-black hover:${color} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:${color} max-w-full`}
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                >
                    <span>{selectedCategory || categories[0]}</span>
                    <IoIosArrowDropdownCircle />
                </button>
            </div>

            {isOpen && (
                <div
                    id="dropdown-menu"
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        {categories.map((category) => (
                            <p
                                key={category}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
