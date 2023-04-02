import { dialogsReducer } from './dialogs_reducer';
import { profileReducer } from './profile_reducer';
import { combineReducers, createStore } from "redux";
import { usersReducer } from './users_reducer';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


// @ts-ignore
window.store = store

console.log(store);
