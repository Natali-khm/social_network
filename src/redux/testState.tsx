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



export type DialogsPage = {
  messages: Array<MessageType>;
  dialogs: Array<DialogType>;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  postText: string;
};



export type TestState = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPage;
};

export type Store = {
  _testState: TestState
  getState: () => TestState
  addPostText: () => void
  changePostText: (text: string) => void
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
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
  addPostText() {
    this._testState.profilePage.posts.push({
      id: "3",
      message: this._testState.profilePage.postText,
      likesCount: "0",
    });
    this._testState.profilePage.postText = "";
    this._callSubscriber();
  },
  changePostText(text: string) {
    this._testState.profilePage.postText = text;
    this._callSubscriber();
  },
  _callSubscriber: () => {},
  subscribe(observer: () => void) { this._callSubscriber = observer; },
};



export default store;
