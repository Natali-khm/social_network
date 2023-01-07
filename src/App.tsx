import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import { DialogType, MessageType, PostType } from "./redux/testState";
import React from 'react'


export type AppPropsType = {
  dialogs: Array <DialogType>
  messages: Array <MessageType>
  posts: Array<PostType>
  addPostText: (postText: string) => void
}

const App = (props: AppPropsType) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
          <Route path="/dialogs"><Dialogs dialogs={props.dialogs} messages={props.messages}/></Route>
          <Route path="/news">news</Route>
          <Route path="/music">music</Route>
          <Route path="/settings">settings</Route>
          <Route path="/"><Profile posts = {props.posts}  addPostText={props.addPostText}/></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
