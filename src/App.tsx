import { Route, Switch } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/Users/UsersContainer";


// export type AppPropsType = {
//   state: TestStateType;
//   dispatch: (action: ActionTypes) => void;
// };

const App = () => {

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
          <Route path="/dialogs"><DialogsContainer/></Route>
          <Route path="/users"><UsersContainer/></Route>
          <Route path="/news">news</Route>
          <Route path="/music">music</Route>
          <Route path="/settings">settings</Route>
          <Route path="/login"><Login/></Route>
          <Route path="/profile/:userId?"><ProfileContainer/></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
