import { DialogsPage, DialogType, MessageType } from "../../redux/testState";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

type DialogsPropsType = {
  dialogsPage: DialogsPage
}


const Dialogs = (props: DialogsPropsType) => {


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <ul>
          {props.dialogsPage.dialogs.map((dialog: DialogType) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />)}
        </ul>
      </div>
      <div className={styles.messages}>
         {props.dialogsPage.messages.map((message: MessageType) => <MessageItem id={message.id} message = {message.message} key={message.id} />)}
      </div>
    </div>
  );
};

export default Dialogs;
