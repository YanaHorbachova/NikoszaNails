import React, { Component } from 'react';
import CoursesNav from '../Navigation/Pl/CoursesNav'
import Section from '../Section';
import Button from '../Button';
import { UpGradePl } from './items.json';
import Slide from '../../img/Courses.jpg'
import s from './Courses.module.css'

class UpGrade  extends Component {

render () {
    return (
        <Section> 
            <CoursesNav/>    
            <div className={s.CoursesUpGrade}>
                <img className={s.CoursesImg} src={Slide} alt='manicure'/>
                <p className={s.CoursesText}>{UpGradePl.text}</p>
            </div>
            <Button text={"Zapisz się na kurs"} link='https://web.telegram.org/z/#463272527'/>
        </Section>
    );
};
}


export default UpGrade;