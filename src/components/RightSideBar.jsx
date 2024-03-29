import React, { useState, useEffect } from "react";
import axios from 'axios';

import SearchBar from "./SearchBar";

const RightSideBar = () => {
    const [data, setData] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    useEffect(() => {

        axios.get('http://localhost:5000/api/hashtags')

            .then(response => {

                setHashtags(response.data.hashtags);
                console.log(response)
            })
            .catch(error => {
                console.error('Error fetching hashtags:', error);
            });
    }, []);


    return (
        <div className="flex justify-center object-contain">
            <div className="flex w-fit ">
                <SearchBar />
            </div>
            <div className="RightSideBar flex justify-center">
                <ul>
                    {hashtags.map((hashtag, index) => (
                        <li key={index}>#{hashtag}</li>


                    ))}


                </ul>
                {/* {console.log(hashtags.data)} */}
            </div>

        </div>

    );
};

export default RightSideBar;