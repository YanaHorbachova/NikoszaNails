import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation/Navigation.module.css'


class Reviews  extends Component {

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
            <h2>Отзывы</h2>
        </div>
    );
};
}


export default Reviews;