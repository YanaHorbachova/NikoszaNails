import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';
import s from'../Navigation.module.css';

const Navigation = () =>{

  return (

    <nav >
      <ul className={s.nav}> 
        <li>
          <NavLink
            className={s.Link}
            to={routes.team}
            activeClassName={s.LinkActive} >
            <span>Zespół</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.Link}
            to={routes.salon}
            activeClassName={s.LinkActive} >
            <span>Salon</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.Link}
            to={routes.work}
            activeClassName={s.LinkActive} >
            <span>Praca</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.Link}
            to={routes.courses}
            activeClassName={s.LinkActive} >
            <span>Kursy</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.Link}
            to={routes.contacts}
            activeClassName={s.LinkActive} >
            <span>Łączność</span>
          </NavLink>
        </li>
      </ul>


     </nav>

  );
}
 

  export default Navigation;