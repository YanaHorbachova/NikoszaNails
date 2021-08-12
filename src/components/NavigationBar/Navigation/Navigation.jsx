import React from 'react';
import Logo from '../../Logo';
// import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
    return (
      <div className={style.navbg}> 
        <nav className={style.nav}>
          <Logo/>
          <ul className={style.ListItem}>
            <li className={style.Item}>Обо мне</li>
            <li className={style.Item}>Услуги и Цены</li>
            <li className={style.Item}>Мои работы</li>            
            <li className={style.Item}>Статьи</li>
            <li className={style.Item}>Отзывы</li>
            <li className={style.Item}>Контакты</li>
            {/* <li className={style.Item}>Сертификаты</li> */}
          </ul>
        </nav>
      </div>
    );
  };
  export default Navigation;