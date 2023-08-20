import React, { useEffect, useState } from 'react'

const Feed = (props) => {
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    const updateFeed = async () => {

        const url = `https://twitter154.p.rapidapi.com/trends?woeid=${props.woeid}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        setArticles(parsedData.articles);

    };
    return (
        <div>

        </div>
    )
}

export default Feed


Feed.defaultProps = {
    country: "India",
    woeid: 2282863,
    countryCode: "IN",
};