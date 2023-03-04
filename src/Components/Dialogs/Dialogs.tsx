import { ChangeEvent, KeyboardEvent } from "react";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogs_reducer";
import { ActionTypes, DialogsPageType, DialogType, MessageType } from "../../redux/testState";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

type DialogsPropsType = {
  dialogsPage: DialogsPageType
  dispatch: (action: ActionTypes) => void
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(updateNewMessageTextAC(e.currentTarget.value))

  const addMessageHandler = () => props.dispatch(addMessageAC())

  const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter'){
      addMessageHandler()
    }
  } 
  

  return (

    <div className={styles.dialogs}>

      {/* dialogs */}
      <ul className={styles.dialogsItems}>
        {props.dialogsPage.dialogs.map((dialog: DialogType) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />)}
      </ul>

      {/* messages */}
      <div className={styles.messages}>
        <div>
          {props.dialogsPage.messages.map((message: MessageType) => 
                  <MessageItem id={message.id} 
                               message = {message.message} 
                               key={message.id}
                  />)}
        </div>
        <div className={styles.inputBlock}>
          <textarea placeholder = "Enter your message..."
                    className = {styles.textArea} 
                    value = {props.dialogsPage.newMessageText} 
                    onChange = {changeMessageHandler} 
                    onKeyDown = {onEnter}>
          </textarea>
          <button onClick={addMessageHandler}>add message</button>
        </div>
      </div>

    </div>
  );
};

export default Dialogs;
