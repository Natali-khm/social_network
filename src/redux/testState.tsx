import { addMessageAC, ADD_MESSAGE, dialogsReducer, updateNewMessageTextAC, UPDATE_NEW_MESSAGE_TEXT } from "./dialogs_reducer";
import { addPostAC, ADD_POST, profileReducer, updateNewPostTextAC, UPDATE_NEW_POST_TEXT } from "./profile_reducer";

export type ActionTypes = ReturnType<typeof addPostAC> 
                        | ReturnType<typeof updateNewPostTextAC> 
                        | ReturnType<typeof updateNewMessageTextAC>
                        | ReturnType<typeof addMessageAC>


export type DialogType = {
  id: string;
  name: string;
};

export type MessageType = {
  id: string;
  message: string;
};

export type PostType = {
  id: string;
  message: string;
  likesCount: string;
};



export type DialogsPageType = {
  messages: Array<MessageType>
  dialogs: Array<DialogType>
  newMessageText: string
};

export type ProfilePageType = {
  posts: Array<PostType>;
  postText: string;
};

export type TestStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
};


export type StoreType = {
  _state:      TestStateType
  getState:        () => TestStateType
  _rerender: (state: TestStateType) => void
  subscribe:       (observer: (state: TestStateType) => void) => void
  dispatch:        (action: ActionTypes) => void
}


let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi", likesCount: "1" },
        { id: "2", message: "Bye", likesCount: "0" },
      ],
      postText: "",
    },
    dialogsPage: {
      messages: [
        { id: "1", message: "Hello" },
        { id: "2", message: "Whats up" },
        { id: "3", message: "What have you been up to?" },
        { id: "4", message: "I have been abroad" },
      ],
      dialogs: [
        { id: "1", name: "Katya" },
        { id: "2", name: "Marina" },
        { id: "3", name: "Denis" },
        { id: "4", name: "Liana" },
      ],
      newMessageText: ''
    },
  },
  getState (){ return this._state },
  _rerender: () => {},
  subscribe (observer) { this._rerender = observer },
  dispatch (action: ActionTypes) { 

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._rerender(this.getState());
  } 
};

  

// export default store;
