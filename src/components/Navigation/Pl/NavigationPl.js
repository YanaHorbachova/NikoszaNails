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
            Zespół
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.Link}
            to={routes.salon}
            activeClassName={s.LinkActive} >
            Salon
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.Link}
            to={routes.work}
            activeClassName={s.LinkActive} >
            Praca
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.Link}
            to={routes.courses}
            activeClassName={s.LinkActive} >
            Kursy
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.Link}
            to={routes.contacts}
            activeClassName={s.LinkActive} >
            Łączność
          </NavLink>
        </li>
      </ul>


     </nav>

  );
}
 

  export default Navigation;