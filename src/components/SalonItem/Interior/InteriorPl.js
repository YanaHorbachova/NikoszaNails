import React, { Component } from 'react';
import SalonNavPl from '../../Navigation/Pl/SalonNav';
import Section from '../../Section';
import Slider from '../../Swiper/Swiper';
import {ParamsSalon} from '../../Swiper/ParamsSwiper';
import image from './InteriorItem';
import s from './Interior.module.css';

class InteriorPl  extends Component {

    render () {
        return (
            <Section>  
                <SalonNavPl/> 
                <div className={s.Interior}>
                    <Slider slides={image} params={ParamsSalon}/>
                </div>         
            </Section>
        );
    };
    }

export default InteriorPl;