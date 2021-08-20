import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import StartUp from '../../components/CoursesItem/StartUp'

class Courses  extends Component {

render () {
    return (

        <Switch>
            <Route  path={routes.courses} component={StartUp} />  
        </Switch> 

    );
};
}


export default Courses;