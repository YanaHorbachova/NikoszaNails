import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import './Navigation.module.css';

const Navigation = () =>{

  return (

    <nav className="nav">
      <ul> 
        <li>
          <NavLink
            className="Link"
            to={routes.team}
            activeClassName="LinkActive" >
            <span>Team</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Link"
            to={routes.salon}
            activeClassName="LinkActive" >
            <span>Salon</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Link"
            to={routes.work}
            activeClassName="LinkActive" >
            <span>Work</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Link"
            to={routes.courses}
            activeClassName="LinkActive" >
            <span>Courses</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Link"
            to={routes.contacts}
            activeClassName="LinkActive" >
            <span>Cotact</span>
          </NavLink>
        </li>
      </ul>


     </nav>

  );
}
 

  export default Navigation;