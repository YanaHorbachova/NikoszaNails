import React from 'react';
import LanguageBar from './LanguageBar';
import NavigationBar from '../NavigationBar/';
import MobileNavigationBar from '../NavigationBar/MobileNavigationBar';
import style from './AppBar.module.css';

const AppBar = () => {  
  const innerWidth = window.innerWidth
  console.log(innerWidth)
    return (     
      <header className={style.AppBar}>
          <LanguageBar />
          {innerWidth < 767 ? <MobileNavigationBar/> : <NavigationBar />}
      </header>
    );
  };
  
  export default AppBar;