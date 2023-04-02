import { Route, Switch } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Header from "./Components/Header/Header";
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
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
          <Route path="/dialogs"><DialogsContainer/></Route>
          <Route path="/users"><UsersContainer/></Route>
          <Route path="/news">news</Route>
          <Route path="/music">music</Route>
          <Route path="/settings">settings</Route>
          <Route path="/profile/:userId?"><ProfileContainer/></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
