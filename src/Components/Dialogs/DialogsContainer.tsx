import { ChangeEvent, KeyboardEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addMessageAC, updateNewMessageTextAC, DialogsPageType } from "../../redux/dialogs_reducer";
import { RootState } from "../../redux/redux_store";
import { ActionTypes, DialogType, MessageType } from "../../redux/testState";
import { StoreContext } from "../../StoreContext";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

// type DialogsPropsType = {
//   dialogsPage: DialogsPageType
//   dispatch: (action: ActionTypes) => void
// }


// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         if (store) {

//           const dialogsPage = store.getState().dialogsPage
//           const changeMessage = (newMessageText: string) =>
//             store.dispatch(updateNewMessageTextAC(newMessageText));

//           const addMessage = () => store.dispatch(addMessageAC());

//           const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
//             if (e.key === "Enter") {
//               addMessage();
//             }
//           };

//           return (
//             <Dialogs
//               dialogs={dialogsPage.dialogs}
//               messages={dialogsPage.messages}
//               newMessageText={ dialogsPage.newMessageText}
//               changeMessage={changeMessage}
//               addMessage={addMessage}
//               onEnter={onEnter}
//             />
//           );
//         }
//       }}
//     </StoreContext.Consumer>
//   );
// };


type MapStateToPropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
  changeMessage: (newMessageText: string) => void
  addMessage: () => void
  onEnter: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType



const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  dialogsPage: state.dialogsPage,
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  changeMessage: (newMessageText: string) => dispatch(updateNewMessageTextAC(newMessageText)),
  addMessage: () => dispatch(addMessageAC()),
  onEnter: (e: KeyboardEvent<HTMLTextAreaElement>) => { if (e.key === "Enter") { 
    dispatch(addMessageAC()) }}
})



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
