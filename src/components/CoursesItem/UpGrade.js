import React, { Component } from 'react';
import CoursesNav from '../Navigation/Ru/CoursesNav'
import Section from '../Section';


class UpGrade  extends Component {

render () {
    return (
        <Section>  
            <CoursesNav/>   
            <h2>Курс "UpGrade"</h2>
        </Section>
    );
};
}

export default UpGrade;