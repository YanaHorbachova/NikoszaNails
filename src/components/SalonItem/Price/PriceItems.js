import React from 'react';
import photo1 from '../../../img/manicure.jpg'
import photo2 from '../../../img/pedicure.jpg'
import photo3 from '../../../img/other.jpg'
import s from './Price.module.css'

const Manicure  = ({items,text}) => {
    return (
        <div className={s.PriceList}>
            <div className={s.PriceListItems}>
                <img className={s.PricePhoto} src={photo1} alt='img manicure'/>
                <h3 className={s.PriceTitle}>{text}</h3>
            </div>
            <ul>
                {items.map(({title,priсe,value}) => (
                    <li className={s.PriceItems}>          
                        <span>{title}</span>
                        <span>{priсe}{value}</span>
                    </li>  
                ))}
            </ul>  
        </div>     
    );
};

const Pedicure  = ({items,text}) => {
    return (
        <div className={s.PriceList}>
            <div className={s.PriceListItems}>
                <img className={s.PricePhoto} src={photo2} alt='img pedicure'/>
                <h3 className={s.PriceTitle}>{text}</h3>
            </div>
            <ul>
                {items.map(({title,priсe,value}) => (
                    <li className={s.PriceItems}>          
                        <span>{title}</span>
                        <span>{priсe}{value}</span>
                    </li>  
                ))}
            </ul>  
        </div>     
    );
};

const Other  = ({items,text}) => {
    return (
        <div className={s.PriceList}>
            <div className={s.PriceListItems}>
                <img className={s.PricePhoto} src={photo3} alt='img other services'/>
                <h3 className={s.PriceTitle}>{text}</h3>
            </div>
            <ul>
                {items.map(({title,priсe,value}) => (
                    <li className={s.PriceItems}>          
                        <span>{title}</span>
                        <span>{priсe}{value}</span>
                    </li>  
                ))}
            </ul>  
        </div>     
    );
};

export {Manicure, Pedicure, Other};