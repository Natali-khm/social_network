import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar: React.FC = (): JSX.Element => {
  return (
  <nav className={styles.nav}>

    <ul className={styles.navList}>
      <li><NavLink to='/profile' className={(isActive: boolean): string => isActive ? styles.active : styles.inactive}>Profile</NavLink></li>
      <li><NavLink to='/dialogs' className={(isActive: boolean): string => isActive ? styles.active : styles.inactive}>Messages</NavLink></li>
      <li><NavLink to='/news' className={(isActive: boolean): string => isActive ? styles.active : styles.inactive}>News</NavLink></li>
      <li><NavLink to='/music' className={(isActive: boolean): string => isActive ? styles.active : styles.inactive}>Music</NavLink></li>
      <li><NavLink to='/settings' className={(isActive: boolean): string => isActive ? styles.active : styles.inactive}>Settings</NavLink></li>
    </ul>

  </nav>
  )
};

export default Navbar;
