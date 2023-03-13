import { ChangeEvent, KeyboardEvent } from "react";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogs_reducer";
import { ActionTypes, DialogsPageType, DialogType, MessageType } from "../../redux/testState";
import { StoreContext } from "../../StoreContext";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

// type DialogsPropsType = {
//   dialogsPage: DialogsPageType
//   dispatch: (action: ActionTypes) => void
// }


const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        if (store) {

          const dialogsPage = store.getState().dialogsPage
          const changeMessage = (newMessageText: string) =>
            store.dispatch(updateNewMessageTextAC(newMessageText));

          const addMessage = () => store.dispatch(addMessageAC());

          const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter") {
              addMessage();
            }
          };

          return (
            <Dialogs
              dialogs={dialogsPage.dialogs}
              messages={dialogsPage.messages}
              newMessageText={ dialogsPage.newMessageText}
              changeMessage={changeMessage}
              addMessage={addMessage}
              onEnter={onEnter}
            />
          );
        }
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
