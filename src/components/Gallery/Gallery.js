import React from 'react';
import image from './GalleryItem';
import Slider from '../Swiper/Swiper';

const Gallery = () => { 
    return (    
       
        <Slider images={image}/>
      );
    };
    
    export default Gallery;