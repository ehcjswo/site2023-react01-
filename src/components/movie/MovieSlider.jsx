import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const MovieImg = ({movie}) => {
    return (
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' rel="noreferrer">
            <img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.title} />   
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
                        slidesPerView={"5"}
                        initialSlide="3"
                        autoplay={{
                          delay: 4500,
                          disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
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
