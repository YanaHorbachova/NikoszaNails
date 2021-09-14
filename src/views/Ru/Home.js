import React, {Component } from 'react';
// import { Route} from 'react-router-dom';
// import Team from './Team'
import s from '../Home.module.css'
// import Image from '../../img/BiBody.jpg';

class HomeRus extends Component {

  render() {
    return (
      <>
      {/* <img className={s.HomeImage} src={Image} alt='фон'/>  */}
      <div className={s.HomePages}> 
        
        {/* <Route exact path="/" component={Team} />        */}
      </div>
      </>
    );
  }
};

export default HomeRus;