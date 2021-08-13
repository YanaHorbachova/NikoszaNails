import React, { Component } from 'react';
import AppBar from '../components/AppBar';
import Hero from '../components/Hero';
import Priсe from '../components/Price';
import Gallery from '../components/Gallery/Gallery'
import s from '../App.module.css'

class HomeRus extends Component {

render () {
    return (
        <div className={s.container}>     
            <AppBar /> 
            <Hero />
            <Priсe/>
            <Gallery/>
        </div>
    );
};
}


export default HomeRus;