import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

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
                centeredSlides={false}
                slidesPerView={"3"}
                initialSlide="3"
                autoplay={{
                  delay: 0,
                  disableOnInteraction: true,
                  stopOnLastSlide: false,
                }}
                speed={"5000"}
                loop={true}
                loopedSlides= {"5"} 
                observer={false}
                observeParents={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"     
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
