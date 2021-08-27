import React from 'react';
import s from '../Navigation.module.css'
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';

const SalonNav = () =>  {
    return ( 
        <div>
            <NavLink 
            className={s.Link_cours} 
            activeClassName={s.LinkActive_cours}
            to={{pathname: `${routes.start_up}`}}>
               Курс "StartUp"
            </NavLink>

            <NavLink 
            className={s.Link_cours} 
            activeClassName={s.LinkActive_cours}
            to={{pathname: `${routes.up_grade}`}} >
                Курс "UpGrade"
            </NavLink>
        </div>              
    );
};



export default SalonNav;