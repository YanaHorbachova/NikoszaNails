import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, Virtual} from 'swiper/core';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "./Swiper.css";

// install Swiper modules
SwiperCore.use([Navigation,Virtual]);


export default function Slider({images}) { 

  const params = {
    // loop: true,
    // loopFillGroupWithBlank: true,
    navigation: true,
    virtual: true,
    breakpoints: {
      320: {
        slidesPerView: 1,                         
        slidesPerGroup: 1,
        spaceBetween: 5
      },
      768: {
        slidesPerView: 2,                
        slidesPerGroup: 2,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 3,                
        slidesPerGroup: 3,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 4,                
        slidesPerGroup: 4,
        spaceBetween: 15
      }
    }    
  };
  
  console.log(images)
  return (
      <Swiper {...params}    
      className="mySwiper">
        
        {images.map((image) => (
        <SwiperSlide key={image.index} virtualIndex={image.index}>
          <img
            src={image}
            alt='manicure'
          />          
        </SwiperSlide>))} ;
      </Swiper>

  )
}