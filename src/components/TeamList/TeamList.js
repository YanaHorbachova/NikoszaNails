import React from 'react';
import {ParamsTeam} from '../Swiper/ParamsSwiper';
import Slider from '../Swiper';


const TeamList = ({items}) => {
    console.log(items)
    return (
        <div>
            <Slider slides={items} params={ParamsTeam}/>
        </div>
    )
};

export default TeamList;