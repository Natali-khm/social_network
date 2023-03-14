import { dialogsReducer } from './dialogs_reducer';
import { profileReducer } from './profile_reducer';
import { combineReducers, createStore } from "redux";
import { StoreType } from './testState';
import { usersReducer } from './users_reducer';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


console.log(store);
