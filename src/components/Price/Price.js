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
            <Button text='Запись' />
            : <Button text='Zapisz sie' />}
        </div> 
      );
    };
    
    export default Price;