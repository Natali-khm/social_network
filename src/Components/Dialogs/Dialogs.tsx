import { ChangeEvent, KeyboardEvent } from "react";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogs_reducer";
import { ActionTypes, DialogsPageType, DialogType, MessageType } from "../../redux/testState";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import { DialogsPropsType } from "./DialogsContainer";
import MessageItem from "./MessageItem/MessageItem";

// type DialogsPropsType = {
//   dialogs: Array<DialogType>
//   messages: Array<MessageType>
//   newMessageText: string
//   changeMessage: (newMessageText: string) => void
//   addMessage: () => void
//   onEnter: (e: KeyboardEvent<HTMLTextAreaElement>) => void
// }


const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.changeMessage(e.currentTarget.value)

  const addMessageHandler = () => props.addMessage()

  const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => props.onEnter(e)
  

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
                               message={message.message} 
                               key={message.id}
                  />)}
        </div>

        <div className = {styles.inputBlock}>
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
