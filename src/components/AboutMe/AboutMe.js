import React from 'react';
import Section from '../Section';
import BgText from '../../img/bgherotext.png'
import Mi from '../../img/Mi.jpg';
import style from './AboutMe.module.css';

const AboutMe = () => {
      return (
            <Section title='Обо мне'>
                    <img
                        className={style.Image}
                        src={Mi}
                        alt= 'Моя фотография'
                    />
                    <p className={style.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                   </p>
                   <img
                        className={style.ImageBg}
                        src={BgText}
                        alt= 'Фон текста'
                    />

            </Section>
      );
    };
    
    export default AboutMe;