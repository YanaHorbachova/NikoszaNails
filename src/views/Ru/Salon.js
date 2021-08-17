import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { routes } from '../../routes';
import Interior from '../../components/SalonItem/Interior';

class Salon  extends Component {

render () {
    return (
        <div >     
            <Route  path={routes.salon} component={Interior} />  
        </div>
    );
}};

export default Salon;