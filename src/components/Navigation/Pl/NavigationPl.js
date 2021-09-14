import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';
import s from'../Navigation.module.css';

const Navigation = () =>{

  return (

    <nav >
      <ul className={s.nav}> 
        <li  className={s.LinkItem}>
          <NavLink
            className={s.Link}
            to={routes.team}
            activeClassName={s.LinkActive} >
            Team
          </NavLink>
        </li>
        <li  className={s.LinkItem}>
          <NavLink
            className={s.Link}
            to={routes.salon}
            activeClassName={s.LinkActive} >
            Salon
          </NavLink>
        </li>
        <li  className={s.LinkItem}>
          <NavLink
            className={s.LinkBig}
            to={routes.work}
            activeClassName={s.LinkActive} >
            Nasze Prace
          </NavLink>
        </li>
        <li  className={s.LinkItem}>
          <NavLink
            className={s.Link}
            to={routes.courses}
            activeClassName={s.LinkActive} >
            Kursy
          </NavLink>
        </li>
        <li  className={s.LinkItem}>
          <NavLink
            className={s.Link}
            to={routes.contacts}
            activeClassName={s.LinkActive} >
            Kontakt
          </NavLink>
        </li>
      </ul>


     </nav>

  );
}
 

  export default Navigation;