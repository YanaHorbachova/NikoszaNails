import React from 'react';
import {ParamsTeam} from '../Swiper/ParamsSwiper';
import Slider from '../Swiper/Swiper';


const TeamList = ({items}) => {
    return (
        <div>
            <Slider slides={items} params={ParamsTeam}/>
        </div>
    )
};

export default TeamList;