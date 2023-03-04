import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TestStateType } from "./redux/testState";
import store from "./redux/redux_store";


let renderApp = (state: TestStateType) => ReactDOM.render(
  <BrowserRouter>
    <App state = {state}
         dispatch = {store.dispatch.bind(store)}/>
  </BrowserRouter>,
  document.getElementById("root")
);

renderApp(store.getState())

store.subscribe(()=>renderApp(store.getState())) 