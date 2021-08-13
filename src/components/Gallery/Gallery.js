import React from 'react';
import image from './GalleryItem';
import params from './ParamsSlider';
import Slider from '../Swiper/Swiper';
import Button from '../Button/Button';
import Section from '../Section';

const Gallery = () => { 
  const Url = window.location.pathname
    return (   
      <> 
        <Section title='Мои работы'>
          <Slider slides={image} params={params} />
          {Url === '/' ?           
            <Button text='Больше работ' link='https://www.instagram.com/nikosza.nails/?hl=ru' />
            : <Button text='Więcej' link='https://www.instagram.com/nikosza.nails/?hl=ru' />}
        </Section>
      </> 
       );
    };
    
    export default Gallery;