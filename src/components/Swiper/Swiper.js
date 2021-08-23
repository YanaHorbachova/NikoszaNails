import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, Virtual} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Swiper.css";

// install Swiper modules
SwiperCore.use([Navigation,Virtual,]);


export default function Slider({slides,params}) { 
    // console.log(slides)
  return (
      <Swiper {...params}    
      className="mySwiper">
        
        {slides.map((slide, index) => (
        <SwiperSlide key={slide.key} virtualIndex={index}>
            {slide}
        </SwiperSlide>))} 
      </Swiper>
  )
}