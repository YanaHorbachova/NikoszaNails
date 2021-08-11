import React from 'react';
import BgText from '../../../img/bgherotext.png'
import Mi from '../../../img/Mi.jpg';
import style from './AboutMe.module.css';

const AboutMePl = () => {
      return (
            <div className={style.AboutMe}>
                <h2 className={style.title}>O mnie</h2>
                <img
                    className={style.Image}
                    src={Mi}
                    alt= 'Moje zdjęcie'
                />
                <p className={style.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                </p>
                <img
                    className={style.ImageBg}
                    src={BgText}
                    alt= 'Tło'
                />

            </div>
      );
    };
    
    export default AboutMePl;