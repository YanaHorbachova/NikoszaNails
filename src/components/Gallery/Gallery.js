import React from 'react';
import image from './GalleryItem';
import params from './ParamsSlider';
import Slider from '../Swiper/Swiper';
import Button from '../Button/Button';

const Gallery = () => { 
  const Url = window.location.pathname
    return (   
      <>
          <Slider slides={image} params={params} />
          {Url === '/ru' ?           
            <Button text='Больше работ' link='https://www.instagram.com/nikosza.nails/?hl=ru' />
            : <Button text='Więcej' link='https://www.instagram.com/nikosza.nails/?hl=ru' />}

      </> 
       );
    };
    
    export default Gallery;