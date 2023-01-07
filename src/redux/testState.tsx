import { reRender } from "..";

export type DialogType = {
  id: string;
  name: string;
};

export type MessageType = {
  id: string;
  message: string;
};

export type PostType = {
  id: string
  message: string;
  likesCount: string;
};


export type messagesPage = {
    messages: Array <MessageType>
    dialogs: Array <DialogType>
}

export type ProfilePageType = {
    posts: Array <PostType>
}


type testState = {
    profilePage: ProfilePageType
    dialogsPage: messagesPage
}


let testState = {
  profilePage: {
    posts: [
      { id: '1', message: "Hi", likesCount: "1" },
      { id: '2', message: "Bye", likesCount: "0" },
    ],
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
};

export const addPostText = (postText: string) => {
  testState.profilePage.posts.push({
    id: '3',
    message: postText,
    likesCount: "0",
  });
  reRender();
};

export default testState;
