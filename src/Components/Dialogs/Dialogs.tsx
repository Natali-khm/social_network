import { ChangeEvent, KeyboardEvent } from "react";
import { DialogType, MessageType } from "../../redux/testState";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import { DialogsPropsType } from "./DialogsContainer";
import MessageItem from "./MessageItem/MessageItem"
import { Redirect } from "react-router-dom"



const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.changeMessage(e.currentTarget.value)

  const addMessageHandler = () => props.addMessage()

  const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => props.onEnter(e)

  if(!props.isAuth) {
    return <Redirect to={'/login'}/>
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
