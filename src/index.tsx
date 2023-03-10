import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StoreType, TestStateType } from "./redux/testState";
import { store } from "./redux/redux_store";
import { StoreContext } from "./StoreContext";


let renderApp = (store: StoreType) => ReactDOM.render(
  <BrowserRouter>
    <StoreContext.Provider value = {store}>
      <App/>
    </StoreContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

renderApp(store)

store.subscribe(()=>renderApp(store)) 