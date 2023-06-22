import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-coverflow";

const UnsplashImg = ({image}) => {
    return (
        <a href={`https://unsplash.com/photos/${image.id}`} target='_black' >
            <img src={image.urls.small} alt="언스플래쉬 이미지" />   
        </a>
    )
}

const UnsplashSlider = ({images}) => {
    return (
        <div className="unsplash__slider">
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
                navigation={false}
                modules={[Autoplay, Navigation, Pagination]}
            >
                {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <UnsplashImg  image={image} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default UnsplashSlider;
