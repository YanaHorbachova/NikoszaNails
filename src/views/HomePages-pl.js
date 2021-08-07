import React, { Component } from 'react';
import AppBar from '../components/AppBar';
import Hero from '../components/Hero';
import Priсe from '../components/Price';
class HomePl extends Component {

render () {
    return (
        <div>        
        <AppBar />
        <Hero />        
        <Priсe/>
        </div>
    );
};
}


export default HomePl;