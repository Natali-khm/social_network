import { MessageType } from '../../../redux/testState';
import styles from './MessageItem.module.css'
import userAvatar from "../../../assets/images/user_avatar.png";


const MessageItem = (props: MessageType) => {

  return <div className={styles.messageItem}>
           <img src={userAvatar} className={styles.userAvatar} />
           <div>
              <div className={styles.name}>Name</div>
              <div>{props.message}</div>
           </div>
         </div>;
};

export default MessageItem;