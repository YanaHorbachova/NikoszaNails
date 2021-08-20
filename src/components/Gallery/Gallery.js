import React from 'react';
import image from './GalleryItem';
import params from './ParamsSlider';
import Slider from '../Swiper/Swiper';
import Button from '../Button/Button';
import s from './Gallery.module.css';


const Gallery = () => { 
  const Url = window.location.pathname
    return (   
      <div className={s.Gallery}>
          <Slider slides={image} params={params} name='manicure' />
          {Url === '/ru' ?           
            <Button text='Больше работ' link='https://www.instagram.com/nikosza.nails/?hl=ru' />
            : <Button text='Więcej' link='https://www.instagram.com/nikosza.nails/?hl=ru' />}

      </div> 
       );
    };
    
    export default Gallery;