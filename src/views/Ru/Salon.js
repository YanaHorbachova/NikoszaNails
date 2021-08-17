import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import s from '../../components/Navigation/Navigation.module.css'
import Interior from '../../components/Interior';
import Reviews from '../../components/Reviews';
import Price from '../../components/Price'

class Salon  extends Component {

render () {
    return (
        <div >     
           <div>
                <NavLink 
                className={s.Link} 
                activeClassName={s.LinkActive}
                to='/salon'>
                    <span>Интерьер</span>
                </NavLink>

                <NavLink 
                className={s.Link} 
                activeClassName={s.LinkActive}
                to='/salon/price' >
                    <span>Прайс</span>
                </NavLink>

                <NavLink 
                className={s.Link}
                activeClassName={s.LinkActive} 
                to='/salon/reviews' >
                    <span>Отзывы</span>
                </NavLink>
                
            </div>

            <Switch>
            <Route exact path="/salon" component={Interior} />  
            <Route exact path="/salon/reviews" component={Reviews} />
            <Route exact path="/salon/price" component={Price} />
            </Switch>
           
        </div>
    );
};
}


export default Salon;