import React, { useEffect, useState } from "react";

import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";

import MovieSlider from "../movie/MovieSlider";
import MovieSearch from "../movie/MovieSearch";
import MovieTag from "../movie/MovieTag";
import MovieCont from "../movie/MovieCont";

const MoviePage = () => {
    const [movies, setMovies] = useState([]);


    const search = async (query) => {
        await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=77d6ca74699e19cd03456654aa0ead98&query=${query}`,
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=77d6ca74699e19cd03456654aa0ead98",

        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <Contents>
                <ContTitle title="movie" />
                <MovieSlider movies={movies} />
                <MovieSearch onSearch={search} />
                <MovieTag onSearch={search}/>
                <MovieCont movies={movies} />
            </Contents>
        </>
    );
};

export default MoviePage;
