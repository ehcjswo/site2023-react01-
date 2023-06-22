import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-coverflow";

const YoutubeImg = ({youtube}) => {
    return (
        <a href={`https://youtube.com/watch?v=${youtube.id.videoId}`} target='_black' >
            <img src={youtube.snippet.thumbnails.high.url} alt="유튜브 이미지" />   
        </a>
    )
}

const youtubeSlider = ({youtubes}) => {
    return (
        <div className="youtube__slider">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView = '3'
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                navigation={false}
                modules={[Autoplay, Navigation, Pagination]}
            >
                {youtubes.map((youtube, index) => (
                        <SwiperSlide key={index}>
                            <YoutubeImg  youtube={youtube} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default youtubeSlider;
