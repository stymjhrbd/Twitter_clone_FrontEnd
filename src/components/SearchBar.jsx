import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Search for: " + value);
    };

    return (
        <div className="relative flex items-center border-[1px] border-gray-300 w-[400px] rounded-full pl-5">
            <input
                placeholder="Search your tweets here..."
                className=" p-4 outline-none bg-inherit w-[90%] overflow-x-none"
            />
            <BsSearch className="absolute right-6 text-lg ml-3" />
        </div>

    );
};

export default SearchBar;