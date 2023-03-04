import { ActionTypes, DialogsPageType } from "./testState";
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
  messages: [
    { id: "1", message: "Hello" },
    { id: "2", message: "Whats up" },
    { id: "3", message: "What have you been up to?" },
    { id: "4", message: "I have been abroad" },
  ],
  dialogs: [
    { id: "1", name: "Katya" },
    { id: "2", name: "Marina" },
    { id: "3", name: "Denis" },
    { id: "4", name: "Liana" },
  ],
  newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.newText}

        case ADD_MESSAGE:
            const newMessage = {
                id: "5",
                message: state.newMessageText,
            }
    
            return {...state, messages: [newMessage, ...state.messages], newMessageText: ''}

        default: return state
    }
}    


