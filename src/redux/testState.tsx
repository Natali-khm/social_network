const ADD_POST = 'ADD_POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'

export const addPostActionCreator = (): ActionType => ({type: ADD_POST});

export const changeNewPostTextActionCreator = (newText: string): ActionType => ({type: CHANGE_NEW_POST_TEXT, newText});


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
  messages: Array<MessageType>;
  dialogs: Array<DialogType>;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  postText: string;
};



export type TestStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
};

export type ActionType = {
  type: 'ADD_POST' | 'CHANGE_NEW_POST_TEXT'
  newText?: string
}

export type Store = {
  _testState: TestStateType
  getState: () => TestStateType
  addPostText: () => void
  changeNewPostText: (text: string) => void
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionType) => void
}


let store = {
  _testState: {
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
    },
  },
  getState(){ return this._testState },
  _callSubscriber: () => {},
  subscribe(observer: () => void) { this._callSubscriber = observer; },
  dispatch (action: ActionType) {
    if (action.type === 'ADD_POST'){ 
        this._testState.profilePage.posts.push({
          id: "3",
          message: this._testState.profilePage.postText,
          likesCount: "0",
        });
        this._testState.profilePage.postText = "";
        this._callSubscriber();      
     }
    if (action.type === 'CHANGE_NEW_POST_TEXT'){
          if (action.newText) { this._testState.profilePage.postText = action.newText;}
          this._callSubscriber();
    }
  } 
};



export default store;
