import React, { Component } from 'react';
import SalonNavPl from '../../Navigation/Pl/SalonNav'
import Section from '../../Section'
import Button from '../../Button'
import {Manicure, Pedicure, Other} from './PriceItems';
import {pl} from './price.json'
import s from './Price.module.css'

class PricePl  extends Component {

render () {
    return (
        <Section>  
           <SalonNavPl/> 
           <div className={s.Price}>
                <Manicure items={pl.Manicure} text={'Manicure'}/>
                <Pedicure items={pl.Pedicure} text={'Pedicure'}/>
                <Other items={pl.Other} text={'Inne usługi'}/>
            </div>
            <Button text={'Zapisz się'} link='https://booksy.com/pl-pl/80275_nikosza-nails_paznokcie_13750_wroclaw'/>
            <p className={s.text}>*Zarejestruj się za pośrednictwem serwisu Booksy</p>         
        </Section>
    );
};
}

export default PricePl;