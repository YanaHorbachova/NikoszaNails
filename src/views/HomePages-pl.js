import React, { Component } from 'react';
import AppBar from '../components/AppBar';
import Hero from '../components/Hero';
import Priсe from '../components/Price';
import s from '../App.module.css'

class HomePl extends Component {

render () {
    return (
        <div className={s.container}>        
            <AppBar />
            <Hero />        
            <Priсe/>
        </div>
    );
};
}


export default HomePl;