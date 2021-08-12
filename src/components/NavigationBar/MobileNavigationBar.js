import React from 'react';
import Logo from '../Logo';
import style from './Navigation/Navigation.module.css';
import MenuMobile from './MenuMobile/MenuMobile';
import MenuMobilePl from './MenuMobile/MenuMobilePl';


const NavigationBar = () => {
  const Url = window.location.pathname

    return ( 
      <div className={style.navbg}>     
      <nav className={style.nav}>
        <Logo/>
            {Url === '/' ? <MenuMobile /> : <MenuMobilePl/>}
      </nav>
      </div>
    );
  };
  
  export default NavigationBar;