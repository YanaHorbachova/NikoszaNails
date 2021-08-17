import React, {Component } from 'react';
import { Route} from 'react-router-dom';
import Team from './Team'

class HomeRus extends Component {

  render() {
    return (
      <> 
        <Route exact path="/" component={Team} />       
      </>
    );
  }
};

export default HomeRus;