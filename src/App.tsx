import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import { TestState } from "./redux/testState";


export type AppPropsType = {
  state: TestState;
  addPostText: () => void;
  changePostText: (text: string) => void;
};

const App = (props: AppPropsType) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
          <Route path="/dialogs"><Dialogs dialogsPage={props.state.dialogsPage}/></Route>
          <Route path="/news">news</Route>
          <Route path="/music">music</Route>
          <Route path="/settings">settings</Route>
          <Route path="/"><Profile profilePage = {props.state.profilePage} addPostText={props.addPostText} changePostText = {props.changePostText}/></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
