import { dialogsReducer } from './dialogs_reducer';
import { profileReducer } from './profile_reducer';
import { combineReducers, createStore } from "redux";

const reducers = combineReducers({
    profilePage: profileReducer,
    
    dialogsPage: dialogsReducer,
})

let store = createStore(reducers)

export default store