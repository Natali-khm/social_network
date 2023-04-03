import { AuthActionsType, authReducer } from './auth_reducer';
import { DialogsPageActionsType, dialogsReducer } from './dialogs_reducer';
import { ProfileActionsType, profileReducer } from './profile_reducer';
import { combineReducers, createStore, applyMiddleware } from "redux";
import { UsersPageActionType, usersReducer } from './users_reducer';
// import thunkMiddleware from "redux-thunk";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppActionsType = UsersPageActionType | ProfileActionsType | DialogsPageActionsType | AuthActionsType

// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export const store = createStore(rootReducer, applyMiddleware(thunk))


// @ts-ignore
window.store = store

console.log(store);
