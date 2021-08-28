import React, { Component } from 'react';
import CoursesNav from '../Navigation/Ru/CoursesNav';
import Section from '../Section';
import Button from '../Button';
import { StartUpRu } from './items.json';
import Slide from '../../img/Courses.jpg'
import s from './Courses.module.css';


class StartUp  extends Component {

render () {
    return (
        <Section> 
            <CoursesNav/>
            <div className={s.CoursesStartUp}>
                <img className={s.CoursesImg} src={Slide} alt='manicure'/>
                <p className={s.CoursesText}>{StartUpRu.text}</p>
            </div>
            <Button text={"Записаться на курс"} link='https://web.telegram.org/z/#463272527'/>
        </Section>
    );
}};


export default StartUp;