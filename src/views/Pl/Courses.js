import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import StartUpPl from '../../components/CoursesItem/StartUpPl'


class Courses  extends Component {

render () {
    return (
        <div >
            <Switch>
                <Route  path={routes.courses} component={StartUpPl} />  
            </Switch>     
        </div>
    );
};
}


export default Courses;