import React from 'react';
import Section from '../Section';
import Mi from '../../img/Mi.jpg';
import style from './AboutMe.module.css';

const AboutMePl = () => {
      return (
            <Section title='O mnie'>
                    <img
                        className={style.Image}
                        src={Mi}
                        alt= 'Moje zdjęcie'
                    />
                    <p className={style.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                    </p>

            </Section>
      );
    };
    
    export default AboutMePl;