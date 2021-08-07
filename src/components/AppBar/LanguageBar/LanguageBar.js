import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';
import  s  from './LanguageBar.module.css';

const LanguageBar = () => {
    return (
      <div>
        <ul className={s.LanguageBar}>
          <li className={s.LanguageItem}>
            <NavLink
              exact
              to={routes.home_rus}
              className={s.rus}
              activeClassName={s.item_active}
            >
              Ru
            </NavLink>
          </li>
          <li className={s.LanguageItem}>
            <NavLink
              exact
              to={routes.home_pl}
              className={s.pl}
              activeClassName={s.item_active}
            >
              Pl
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };
  
  export default LanguageBar;