import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StoreType, TestStateType } from "./redux/testState";
import { store } from "./redux/redux_store";
import { StoreContext } from "./StoreContext";
import { Provider } from "react-redux";


let renderApp = () => ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

renderApp()

store.subscribe(()=>renderApp()) 