import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const RightSideBar = () => {
    const [data, setData] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:5000/api/hashtags')
            .then(response => {
                setHashtags(response.data);
            })
            .catch(error => {
                console.error('Error fetching hashtags:', error);
            });
    }, []);


    return (
        <>
            <div className="flex w-full">
                <SearchBar />
            </div>
            <div className="RightSideBar flex-auto">
                <ul>
                    {hashtags.map((hashtag, index) => (
                        <li key={index}>#{hashtag}</li>

                    ))}

                </ul>
            </div>

        </>
    );
};

export default RightSideBar;