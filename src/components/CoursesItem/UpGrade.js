import React, { Component } from 'react';
import CoursesNav from '../Navigation/Ru/CoursesNav'
import Section from '../Section';
import Button from '../Button';
import { UpGradeRu } from './items.json';
import Slide from '../../img/Courses.jpg'
import s from './Courses.module.css'

class UpGrade  extends Component {

render () {
    return (
        <Section>  
            <CoursesNav/>   
            <div className={s.CoursesUpGrade}>
                <img className={s.CoursesImg} src={Slide} alt='manicure'/>
                <p className={s.CoursesText}>{UpGradeRu.text}</p>
            </div>
            <Button text={"Записаться на курс"} link='https://t.me/nikosza'/>
        </Section>
    );
};
}

export default UpGrade;