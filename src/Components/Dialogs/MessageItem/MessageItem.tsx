import { MessageType } from '../../../redux/testState';
import styles from '../Dialogs.module.css'

const MessageItem = (props: MessageType) => {
    return <div className={styles.message}>{props.message}</div>;
  };

  export default MessageItem;