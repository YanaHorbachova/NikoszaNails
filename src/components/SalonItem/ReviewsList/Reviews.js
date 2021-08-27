import React from 'react';
import SalonNav from '../../Navigation/Ru/SalonNav';
import Section from '../../Section';
import Slider from '../../Swiper';
import {ParamsReviews} from '../../Swiper/ParamsSwiper';
import {ItemsRu} from './ReviewsItem'
import s from './Reviews.module.css'


const Reviews = () => {
    return (
        <Section>   
           <SalonNav/> 
            <div className={s.Reviews} >
                <Slider slides={ItemsRu} params={ParamsReviews}/>
           </div>
        </Section>
    );
};


export default Reviews;