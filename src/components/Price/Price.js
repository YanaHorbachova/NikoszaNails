import React from 'react';
import Button from '../Button/Button';
import items from './price.json';
import PriceList from './PriceList';
import style from './Priсe.module.css';

const Price = () => {
    const Url = window.location.pathname
      return (    
        <div  className={style.Priсe}> 
          {Url === '/' ? 
             <PriceList items={items.ru} title='Услуги и цены' /> 
            : <PriceList items={items.pl} title='Eckeub b wtys'/> }
          {Url === '/' ?           
            <Button text='Записатся' link='https://booksy.com/pl-pl/80275_nikosza-nails_paznokcie_13750_wroclaw' />
            : <Button text='Zapisz się' link='https://booksy.com/pl-pl/80275_nikosza-nails_paznokcie_13750_wroclaw' />}
          {Url === '/' ? 
             <p>*Запись осуществляется через сервис Booksy </p>
            : <p>*Rejestracja odbywa się za pośrednictwem serwisu Booksy </p> }
        </div> 
      );
    };
    
    export default Price;