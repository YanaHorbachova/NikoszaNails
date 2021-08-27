import React from 'react';
import s from '../Navigation.module.css'
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';


const SalonNav = () =>  {
    return ( 
        <div>
            <NavLink 
            className={s.Link_salon} 
            activeClassName={s.LinkActive_salon}
            to={{pathname: `${routes.interior}`}}>
                Интерьер
            </NavLink>

            <NavLink 
            className={s.Link_salon} 
            activeClassName={s.LinkActive_salon}
            to={{pathname: `${routes.price}`}} >
                Прайс
            </NavLink>
            
            <NavLink 
            className={s.Link_salon} 
            activeClassName={s.LinkActive_salon}
            to={{pathname: `${routes.reviews}`}} >
                Отзывы
            </NavLink>

        </div>              
    );
};



export default SalonNav;