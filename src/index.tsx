import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store, { TestState } from "./redux/testState";


let renderApp = (state: TestState) => ReactDOM.render(
  <BrowserRouter>
    <App state = {state}
         addPostText = {store.addPostText.bind(store)}
         changePostText = {store.changePostText.bind(store)}
    />
  </BrowserRouter>,
  document.getElementById("root")
);

renderApp(store.getState())

store.subscribe(()=>renderApp(store.getState()))