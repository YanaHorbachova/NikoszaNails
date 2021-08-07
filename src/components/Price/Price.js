import React from 'react';
import items from './price.json';
import PriseList from './PriceList';
import style from './Priсe.module.css';

const Prise = () => {
    const Url = window.location.pathname
      return (    
        <div  className={style.Priсe}> 
            {Url === '/' ? 
           <PriseList items={items.ru} /> : <PriseList items={items.pl}/>}
        </div> 
      );
    };
    
    export default Prise;