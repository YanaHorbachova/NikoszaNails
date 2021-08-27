import React, { Component } from 'react';
import SalonNav from '../../Navigation/Ru/SalonNav'
import Section from '../../Section'
import Slider from '../../Swiper';
import {ParamsSalon} from '../../Swiper/ParamsSwiper';
import image from './InteriorItem';
import s from './Interior.module.css';

class Interior  extends Component {

render () {
    return (
        <Section>  
            <SalonNav/> 
            <div className={s.Interior}>
                <Slider slides={image} params={ParamsSalon}/>
            </div>         
        </Section>
    );
};
}

export default Interior;