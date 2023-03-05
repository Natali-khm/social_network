import { ChangeEvent, KeyboardEvent } from "react";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogs_reducer";
import { ActionTypes, DialogsPageType, DialogType, MessageType } from "../../redux/testState";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

type DialogsPropsType = {
  dialogsPage: DialogsPageType
  dispatch: (action: ActionTypes) => void
}


const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

  const changeMessage = (newMessageText: string) => props.dispatch(updateNewMessageTextAC(newMessageText))

  const addMessage = () => props.dispatch(addMessageAC())

  const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter'){
      addMessage()
    }
  } 
  

  return (
    <Dialogs dialogs={props.dialogsPage.dialogs} 
             messages={props.dialogsPage.messages} 
             newMessageText={props.dialogsPage.newMessageText} 
             changeMessage={changeMessage} 
             addMessage={addMessage}
             onEnter={onEnter}
    
    />
  );
};

export default DialogsContainer;
