import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { routes } from '../../routes';
import LanguageBar from '../LanguageBar'
import style from './Navigation.module.css';

const Navigation = () => {
    return (
      <header className={style.nav}>
          <LanguageBar />

      </header>
    );
  };
  
  export default Navigation;