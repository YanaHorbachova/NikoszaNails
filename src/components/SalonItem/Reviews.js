import React, { Component } from 'react';
import SalonNav from '../Navigation/Ru/SalonNav'
import Section from '../Section'

class Reviews  extends Component {

render () {
    return (
        <Section>   
           <SalonNav/> 
            <h2>Отзывы</h2>
        </Section>
    );
};
}

export default Reviews;