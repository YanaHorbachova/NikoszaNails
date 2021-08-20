import React, { Component } from 'react';
import CoursesNav from '../Navigation/Ru/CoursesNav'
import Section from '../Section';


class StartUp  extends Component {

render () {
    return (
        <Section> 
            <CoursesNav/>
            <h2>Курс "StartUp"</h2>
        </Section>
    );
};
}


export default StartUp;