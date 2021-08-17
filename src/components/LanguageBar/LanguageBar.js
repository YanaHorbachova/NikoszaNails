import React from 'react';
import { NavLink } from 'react-router-dom';
import  s  from './LanguageBar.module.css';

const LanguageBar = () => {
    return (
      <div className={s.LanguageBar}>



        
        {/* <ul >
          <li className={s.LanguageItem}>
            <NavLink
              exact
              to="/"
              className={s.rus}
              activeClassName={s.item_active}
            >
              Ru
            </NavLink>
          </li>
          <li className={s.LanguageItem}>
            <NavLink
              exact
              to="/pl"
              className={s.pl}
              activeClassName={s.item_active}
            >
              Pl
            </NavLink>
          </li>
        </ul> */}
      </div>
    );
  };
  
  export default LanguageBar;