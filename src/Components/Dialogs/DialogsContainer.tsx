import { KeyboardEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addMessageAC, updateNewMessageTextAC, DialogsPageType } from "../../redux/dialogs_reducer";
import { RootStateType } from "../../redux/redux_store";
import Dialogs from "./Dialogs";


type MapStateToPropsType = {
  dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
  changeMessage: (newMessageText: string) => void
  addMessage: () => void
  onEnter: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType



const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
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
