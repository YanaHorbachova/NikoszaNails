import React, { Component } from 'react';
import CoursesNav from '../Navigation/Pl/CoursesNav'
import Section from '../Section';
import { StartUpPl } from './items.json';
import Slide from '../../img/Courses.jpg'
import s from './Courses.module.css'


class StartUp  extends Component {

render () {
    return (
        <Section>
            <CoursesNav/>      
            <div className={s.CoursesStartUp}>
                <img className={s.CoursesImg} src={Slide} alt='manicure'/>
                <p className={s.CoursesText}>{StartUpPl.text}</p>
            </div>
        </Section>
    );
};
}

export default StartUp;