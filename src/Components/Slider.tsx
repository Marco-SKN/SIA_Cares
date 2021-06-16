import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import slide_1 from "../image/slider_1.jpg";
import slide_2 from "../image/slider_2.jpg";

const Slider = () => {
  const handleClick = () => {};

  return (
    <div className="slider">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
        }}
      >
        <SwiperSlide>
          <div
            className="slider_image"
            style={{ backgroundImage: `url(${slide_1})` }}
            onClick={() =>
              window.open(
                "https://www.singaporeair.com/en_UK/sg/travel-info/covid19-measures/"
              )
            }
          >
            <div className="slider_details">
              <p>
                <b>Travel Safely with us</b>
              </p>
              <p>Protecting your well-being throughout your journey</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider_image"
            style={{ backgroundImage: `url(${slide_2})` }}
            onClick={() =>
              window.open(
                "https://www.singaporeair.com/en_UK/sg/ppsclub-krisflyer/membership-support-measures/"
              )
            }
          >
            <div className="slider_details">
              <p>
                <b>KrisFlyer/PPS Club support measures</b>
              </p>
              <p>
                Tier renewal, miles expiry extension, and more ways to earn.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
