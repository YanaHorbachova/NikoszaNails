import React from 'react';
import Logo from '../Logo';
// import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const NavigationPl = () => {
    return (
      <div className={style.navbg}> 
        <nav className={style.nav}>
          <Logo/>
          <ul className={style.ListItem}>
            <li className={style.Item}>O mnie</li>
            <li className={style.Item}>Usługi</li>
            <li className={style.Item}>Ceny</li>
            <li className={style.Item}>Moje prace</li>            
            <li className={style.Item}>Artykuły</li>
            <li className={style.Item}>Recenzje</li>
            <li className={style.Item}>Łączność</li>
            {/* <li className={style.Item}>Certyfikaty</li> */}
            {/* <li className={style.Item}>Zapisz się</li> */}
          </ul>
        </nav>
      </div>
    );
  };
  export default NavigationPl;