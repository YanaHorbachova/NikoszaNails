import React, { Component } from 'react';
import CoursesNav from '../Navigation/Pl/CoursesNav'
import Section from '../Section';


class StartUpPl  extends Component {

render () {
    return (
        <Section>
            <CoursesNav/>         
           <h2>Kurs "StartUp"</h2>
        </Section>
    );
};
}

export default StartUpPl;