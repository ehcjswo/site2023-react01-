import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-coverflow";

const MovieImg = ({movie}) => {
    return (
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_black'>
            <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={movie.title} />   
        </a>
    )
}

const movieSlider = ({movies}) => {
    return (
        <div className="movie__slider">
            <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView = '2'
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation, Pagination]}
                    >
                        {movies.map((movie, index) => (
                                <SwiperSlide key={index}>
                                    <MovieImg movie={movie} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
        </div>
    );
};

export default movieSlider;
