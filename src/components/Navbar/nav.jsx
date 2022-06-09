import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

let NavActive = (navData) => {
  return navData.isActive ? s.activeLink : s.navLink
}

const Navbar = (props) => {
  return <nav className={s.nav}>
    <div className={s.item} >
      <NavLink to='/profiles' className={NavActive}> Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs' className={NavActive}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/news' className={NavActive}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/music' className={NavActive}>Music</NavLink>
    </div>
    <div className={s.item}>
      <a href='settings'>Settings</a>
    </div>
  </nav>
}
export default Navbar;
