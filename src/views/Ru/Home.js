import React, {Component } from 'react';
// import { Route} from 'react-router-dom';
// import Team from './Team'
import s from './Home.module.css'

class HomeRus extends Component {

  render() {
    return (
      <div className={s.HomePages}> 
        {/* <Route exact path="/" component={Team} />        */}
      </div>
    );
  }
};

export default HomeRus;