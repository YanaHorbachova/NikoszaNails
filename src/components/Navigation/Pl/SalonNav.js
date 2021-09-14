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
                Wnętrze
            </NavLink>

            <NavLink 
            className={s.Link_salon} 
            activeClassName={s.LinkActive_salon}
            to={{pathname: `${routes.price}`}} >
               Cennik
            </NavLink>
            
            <NavLink 
            className={s.Link_salon} 
            activeClassName={s.LinkActive_salon}
            to={{pathname: `${routes.reviews}`}} >
                Opinię
            </NavLink>

        </div>              
    );
};



export default SalonNav;