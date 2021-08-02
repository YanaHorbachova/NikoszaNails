import React, { Component } from 'react';
import AppBar from '../components/AppBar';
import Hero from '../components/Hero';
import s from '../App.module.css'

class HomeRus extends Component {

render () {
    return (
        <div className={s.container}>     
            <AppBar /> 
            <Hero />
        </div>
    );
};
}


export default HomeRus;