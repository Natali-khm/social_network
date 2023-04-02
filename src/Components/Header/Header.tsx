import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { HeaderContainerType } from "./HeaderContainer";
import userAvatar from "../../assets/images/user_avatar.png";
import s from './Header.module.css'


const Header = (props: HeaderContainerType) => {
  debugger
  return (
    <>
      <header className={styles.header}>
        <div>
          {props.isAuth
          ? <div className = {s.login}>
              <img src={props.userPhoto ? props.userPhoto : userAvatar} className = {s.avatar}/>
              <div>{props.login}</div>
            </div>  
          : <NavLink to = '/login'>Login</NavLink>}
        </div>
      </header>
    </>
  )
};

export default Header;
