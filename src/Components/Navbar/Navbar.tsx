import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import messageIcon from '../../assets/images/icons/messages.svg'
import profileIcon from '../../assets/images/icons/profile.svg'
import musicIcon from '../../assets/images/icons/mic.svg'
import settingsIcon from '../../assets/images/icons/settings.svg'
import newsfeed from '../../assets/images/icons/newsfeed.svg'
import happy from '../../assets/images/icons/happy.svg'


const Navbar: React.FC = (): JSX.Element => {

  const linkClassName = (isActive: boolean): string => isActive ? styles.active : styles.inactive

  return (
  <nav className={styles.nav}>

    <ul className={styles.navList}>
      <li>
        <NavLink to='/profile' className={linkClassName}>
          <div className={styles.imgContainer}><img src={profileIcon}/></div><span>Profile</span> 
        </NavLink> 
      </li>
      <li>
        <NavLink to='/dialogs' className={linkClassName}>
          <div className={styles.imgContainer}><img src={messageIcon}/></div><span>Messages</span> 
        </NavLink>
      </li>
      <li>
        <NavLink to='/users' className={linkClassName}>
          <div className={styles.imgContainer}><img src={happy}/></div><span>Users</span> 
        </NavLink>
      </li>
      <li>
        <NavLink to='/news' className={linkClassName}>
          <div className={styles.imgContainer}><img src={newsfeed}/></div><span>News</span> 
        </NavLink>
      </li>
      <li>
        <NavLink to='/music' className={linkClassName}>
          <div className={styles.imgContainer}><img src={musicIcon}/></div><span>Music</span> 
        </NavLink>
      </li>
      <li>
        <NavLink to='/settings' className={linkClassName}>
          <div className={styles.imgContainer}><img src={settingsIcon}/></div><span>Settings</span> 
        </NavLink>
      </li>
    </ul>

  </nav>
  )
};

export default Navbar;
