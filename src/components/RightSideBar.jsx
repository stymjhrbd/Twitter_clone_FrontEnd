import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const RightSideBar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            <div className="container">
                <SearchBar />
            </div>
            <div className="RightSideBar flex-auto">
                <ul>
                    {data.map((user) => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default RightSideBar;