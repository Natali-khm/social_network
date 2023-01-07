import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import testState, { addPostText } from './redux/testState'

let renderApp = () => ReactDOM.render(
  <BrowserRouter>
    <App dialogs={testState.dialogsPage.dialogs} 
    messages={testState.dialogsPage.messages} 
    posts = {testState.profilePage.posts} 
    addPostText={addPostText}/>
  </BrowserRouter>,
  document.getElementById("root")
);

renderApp()
export const reRender = () => { renderApp() }