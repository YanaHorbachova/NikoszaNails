import React, { Component } from 'react';
import SalonNav from '../../Navigation/Ru/SalonNav';
import Section from '../../Section';
import Button from '../../Button'
import {Manicure, Pedicure, Other} from './PriceItems';
import {ru} from './price.json'
import s from './Price.module.css'

class Price  extends Component {

render () {
    return (
        <Section>   
            <SalonNav/> 
            <div className={s.Price}>
                <Manicure items={ru.Manicure} text={'Маникюр'}/>
                <Pedicure items={ru.Pedicure} text={'Педикюр'}/>
                <Other items={ru.Other} text={'Другие услуги'}/>
            </div>
            <Button text={'Запись'} link='https://booksy.com/pl-pl/80275_nikosza-nails_paznokcie_13750_wroclaw'/>
            <p className={s.text}>*Запись осуществляется через cервис Booksy</p>
        </Section>
    );
};
}

export default Price;