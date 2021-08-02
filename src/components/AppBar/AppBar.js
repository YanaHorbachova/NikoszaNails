import React from 'react';
import LanguageBar from '../LanguageBar';
import Navigation from '../Navigation/Navigation';
import NavigationPl from '../Navigation/NavigationPl';
import style from './AppBar.module.css';

const AppBar = () => {
  const Url = window.location.pathname
    return (     
      <header className={style.AppBar}>
          <LanguageBar />
          {Url === '/' ? <Navigation /> : <NavigationPl/>}
      </header>
    );
  };
  
  export default AppBar;