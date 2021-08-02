import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutMePl from '../AboutMe/AboutMePl'
import style from './Hero.module.css';

const Hero = () => {
    const Url = window.location.pathname
      return (    
        <div  className={style.Hero}> 
            {Url === '/' ? 
           <AboutMe /> : <AboutMePl/>}
        </div> 
      );
    };
    
    export default Hero;