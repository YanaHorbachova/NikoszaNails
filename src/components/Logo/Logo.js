import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import LogoImage from '../../img/Logo.png';
import styles  from './Logo.module.css';

const Logo = () => {
    return (      
      <div>
        <Link exact
              to={routes.home_rus}
              className={styles.Logo}>
          <img
            className={styles.Image}
            src={LogoImage}
            alt={Logo}
          />
        </Link>
      </div>
    );
  };
  
  export default Logo;