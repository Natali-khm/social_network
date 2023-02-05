import { NavLink } from "react-router-dom";
import { DialogType } from "../../../redux/testState";
import userAvatar from "../../../assets/images/user_avatar.png";
import styles from './DialogItem.module.css'


const DialogItem = (props: DialogType) => {


    return (
      <li>
        <NavLink to={`/dialogs/${props.id}`} className={(isActive: boolean): string => isActive ? (styles.dialogItemActive + ' ' + styles.dialogItem) : styles.dialogItem}>
          <img src={userAvatar} className={styles.userAvatar} />
          <span>{props.name}</span>
        </NavLink>
      </li>
    );
  };

  export default DialogItem