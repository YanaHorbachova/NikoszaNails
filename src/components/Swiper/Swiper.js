import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, Virtual, Lazy} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/lazy/lazy.min.css";
import "./Swiper.css";

// install Swiper modules
SwiperCore.use([Navigation,Virtual,Lazy]);


export default function Slider({slides,params,name}) { 
    // console.log(slides)
  return (
      <Swiper {...params}    
      className="mySwiper">
        
        {slides.map((slide) => (
        <SwiperSlide key={slide.key} virtualIndex={slide.index}>
          <img class="swiper-lazy"
            src={slide}
            alt={name}
          />          
        </SwiperSlide>))} 
      </Swiper>
  )
}