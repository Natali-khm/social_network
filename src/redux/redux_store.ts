import { dialogsReducer } from './dialogs_reducer';
import { profileReducer } from './profile_reducer';
import { combineReducers, createStore } from "redux";
import { StoreType } from './testState';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

type RootState = ReturnType<typeof rootReducer>

export const store: StoreType = createStore(rootReducer)


  