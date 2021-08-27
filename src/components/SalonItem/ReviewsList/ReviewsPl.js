import React from 'react';
import SalonNavPl from '../../Navigation/Pl/SalonNav'
import Section from '../../Section'
import Slider from '../../Swiper';
import {ParamsReviews} from '../../Swiper/ParamsSwiper';
import {ItemsPl} from './ReviewsItem'
import s from './Reviews.module.css'

const RewiewsPl = () => {
    return (
        <Section>  
           <SalonNavPl/> 
           <div className={s.Reviews} >
                <Slider slides={ItemsPl} params={ParamsReviews}/> 
           </div>        
        </Section>
    );
};


export default RewiewsPl;