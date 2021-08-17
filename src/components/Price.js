import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import s from './Navigation/Navigation.module.css'


class Price  extends Component {

render () {
    return (
        <div >   
             <div>
                <NavLink 
                className={s.Link} 
                to={{pathname: `/salon/`}}>
                    <span>Интерьер</span>
                </NavLink>

                <NavLink 
                className={s.Link} 
                to={{pathname: `/salon/price`}} >
                    <span>Прайс</span>
                </NavLink>
                
                <NavLink 
                className={s.Link} 
                to={{pathname: `/salon/reviews`}} >
                    <span>Отзывы</span>
                </NavLink>

            </div>  
           <h2>Прайс</h2>
        </div>
    );
};
}


export default Price;