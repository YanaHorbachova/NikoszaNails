import React, { Component } from 'react';
import SalonNav from '../Navigation/Ru/SalonNav'
import Section from '../Section'

class Interior  extends Component {

render () {
    return (
        <Section>  
           <SalonNav/> 
           <h2>Интерьер</h2>           
        </Section>
    );
};
}

export default Interior;