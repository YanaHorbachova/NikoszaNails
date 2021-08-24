import React from 'react';
import image from './GalleryItem';
import {ParamsGallary} from '../Swiper/ParamsSwiper';
import Slider from '../Swiper/Swiper';
import Button from '../Button/Button';
import s from './Gallery.module.css';


const Gallery = ({battonName}) => { 

    return (   
      <div className={s.Gallery}>
          <Slider slides={image} params={ParamsGallary}/>
          <Button text={battonName} link='https://www.instagram.com/nikosza.nails/?hl=ru'/>
      </div> 
       );
    };
    
    export default Gallery;