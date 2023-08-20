import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const RightSideBar = () => {
    const [data, setData] = useState([]);


    return (
        <>
            <div className="flex w-full">
                <SearchBar />
            </div>
            <div className="RightSideBar flex-auto">

            </div>
        </>
    );
};

export default RightSideBar;