import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import messageIcon from '../../assets/images/icons/messages.svg'
import profileIcon from '../../assets/images/icons/profile.svg'
import musicIcon from '../../assets/images/icons/mic.svg'
import settingsIcon from '../../assets/images/icons/settings.svg'
import newsfeed from '../../assets/images/icons/newsfeed.svg'


const Navbar: React.FC = (): JSX.Element => {
  return (
  <nav className={styles.nav}>

    <ul className={styles.navList}>
      <li>
        <NavLink to='/profile' className={(isActive: boolean): string => isActive ? styles.active : styles.inactive}>
          <div className={styles.imgContainer}><img src={profileIcon}/></div><span>Profile</span> 
        </NavLink> 
      </li>
      <li>
        <NavLink to='/dialogs' className={(isActive: boolean): string => isActive ? styles.active : styles.inactive}>
        <div className={styles.imgContainer}><img src={messageIcon}/></div><span>Messages</span> 
        </NavLink>
      </li>
      <li>
        <NavLink to='/news' className={(isActive: boolean): string => isActive ? styles.active : styles.inactive}>
        <div className={styles.imgContainer}><img src={newsfeed}/></div><span>News</span> 
        </NavLink>
      </li>
      <li>
        <NavLink to='/music' className={(isActive: boolean): string => isActive ? styles.active : styles.inactive}>
        <div className={styles.imgContainer}><img src={musicIcon}/></div><span>Music</span> 
        </NavLink>
      </li>
      <li>
        <NavLink to='/settings' className={(isActive: boolean): string => isActive ? styles.active : styles.inactive}>
        <div className={styles.imgContainer}><img src={settingsIcon}/></div><span>Settings</span> 
        </NavLink>
      </li>
    </ul>

  </nav>
  )
};

export default Navbar;
