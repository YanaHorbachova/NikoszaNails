import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import InteriorPl from '../../components/SalonItem/Interior/InteriorPl';


class Salon  extends Component {

render () {
    return (
        <div>     
            <Switch>
                <Route  path={routes.salon} component={InteriorPl} />  
            </Switch>
           
        </div>
    );
};
}

export default Salon;