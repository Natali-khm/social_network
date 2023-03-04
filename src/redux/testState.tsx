import { ADD_MESSAGE, dialogsReducer, UPDATE_NEW_MESSAGE_TEXT } from "./dialogs_reducer";
import { ADD_POST, profileReducer, UPDATE_NEW_POST_TEXT } from "./profile_reducer";


export const addPostAC = () => ({type: ADD_POST} as const);
export const addMessageAC = () => ({type: ADD_MESSAGE} as const);
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const);
export const updateNewMessageTextAC = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText} as const);


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


export type Store = {
  _testState:      TestStateType
  getState:        () => TestStateType
  _callSubscriber: (state: TestStateType) => void
  subscribe:       (observer: (state: TestStateType) => void) => void
  dispatch:        (action: ActionTypes) => void
}


// let store: Store = {
//   _testState: {
//     profilePage: {
//       posts: [
//         { id: "1", message: "Hi", likesCount: "1" },
//         { id: "2", message: "Bye", likesCount: "0" },
//       ],
//       postText: "",
//     },
//     dialogsPage: {
//       messages: [
//         { id: "1", message: "Hello" },
//         { id: "2", message: "Whats up" },
//         { id: "3", message: "What have you been up to?" },
//         { id: "4", message: "I have been abroad" },
//       ],
//       dialogs: [
//         { id: "1", name: "Katya" },
//         { id: "2", name: "Marina" },
//         { id: "3", name: "Denis" },
//         { id: "4", name: "Liana" },
//       ],
//       newMessageText: ''
//     },
//   },
//   getState (){ return this._testState },
//   _callSubscriber: () => {},
//   subscribe (observer) { this._callSubscriber = observer },
//   dispatch (action: ActionTypes) { 

//     this._testState.profilePage = profileReducer(this._testState.profilePage, action)
//     this._testState.dialogsPage = dialogsReducer(this._testState.dialogsPage, action)

//     this._callSubscriber(this.getState());
//   } 
// };

  

// export default store;
