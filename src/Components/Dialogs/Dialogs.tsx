import { DialogsPageType, DialogType, MessageType } from "../../redux/testState";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

type DialogsPropsType = {
  dialogsPage: DialogsPageType
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {


  return (

    <div className={styles.dialogs}>

      <ul className={styles.dialogsItems}>
        {props.dialogsPage.dialogs.map((dialog: DialogType) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />)}
      </ul>

      <div className={styles.messages}>
        <div>
          {props.dialogsPage.messages.map((message: MessageType) => <MessageItem id={message.id} message = {message.message} key={message.id} />)}
        </div>
        <div className={styles.inputBlock}>
          <textarea className={styles.textArea}></textarea>
          <button>add message</button>
        </div>
      </div>

    </div>
  );
};

export default Dialogs;
