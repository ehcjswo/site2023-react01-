import React, { useEffect, useState } from "react";

import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";

import UnsplashSlider from "../unsplash/UnsplashSlider";
import UnsplashSearch from "../unsplash/UnsplashSearch";
import UnsplashTag from "../unsplash/UnsplashTag";
import UnsplashCont from "../unsplash/UnsplashCont";

// const [images, setImage] = useState([]);

// useEffect(() => {

// }, [])
// 이게 한세트
const UnsplashPage = () => {
    const [images, setImage] = useState([]);

    const search = async (query) => {
        await fetch(
            `https://api.unsplash.com/search/photos?client_id=sQ3sJzwQov0V5BVY9XCXj8l_3l9WdWdz9aTX9OgY1a0&per_page=30&query=${query}`,
        )
            .then((response) => response.json())
            .then((result) => setImage(result.results))
            .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            "https://api.unsplash.com/photos?client_id=sQ3sJzwQov0V5BVY9XCXj8l_3l9WdWdz9aTX9OgY1a0&per_page=30",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setImage(result))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <Contents>
                <ContTitle title="unsplash" />
                <UnsplashSlider images={images}/>
                <UnsplashSearch onSearch={search} />
                <UnsplashTag />
                <UnsplashCont images={images} />
            </Contents>
        </>
    );
};

export default UnsplashPage;
