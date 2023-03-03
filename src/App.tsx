import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import { ActionTypes, TestStateType } from "./redux/testState";


export type AppPropsType = {
  state: TestStateType;
  dispatch: (action: ActionTypes) => void;
};

const App: React.FC <AppPropsType> = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
          <Route path="/dialogs"><Dialogs dialogsPage={props.state.dialogsPage}                             
                                          dispatch = {props.dispatch}
                                          /></Route>
          <Route path="/news">news</Route>
          <Route path="/music">music</Route>
          <Route path="/settings">settings</Route>
          <Route path="/"><Profile 
                            profilePage = {props.state.profilePage} 
                            dispatch = {props.dispatch}
                            /></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
