import React, { Component } from 'react';
import AppBar from '../components/AppBar';
import s from '../App.module.css'

class HomeRus extends Component {

render () {
    return (
        <div className={s.container}>     
            < AppBar /> 
        </div>
    );
};
}


export default HomeRus;