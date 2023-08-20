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
        <div className="relative flex items-center border-[1px] border-gray-300 w-[400px] rounded-full">
            <input
                placeholder="Search your news here..."
                className="bg-[#E2E2E3] p-4 outline-none"
            />
            <BsSearch className="absolute right-6" />
        </div>
    );
};

export default SearchBar;