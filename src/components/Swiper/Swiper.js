import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Swiper.css";

// install Swiper modules
SwiperCore.use([Navigation]);


export default function Slider({slides,params}) { 
    // console.log(slides)
  return (
      <Swiper {...params}    
      className="mySwiper">
        
        {slides.map((slide) => (
        <SwiperSlide key={slide.key} >
            {slide}
        </SwiperSlide>))} 
      </Swiper>
  )
}