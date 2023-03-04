import { ActionTypes, addPostAC, ProfilePageType, updateNewMessageTextAC } from "./testState";
export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
    posts: [
      { id: "1", message: "Hi", likesCount: "1" },
      { id: "2", message: "Bye", likesCount: "0" },
    ],
    postText: '',
  }

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADD_POST: 
        
            const newPost = {
                id: "3",
                message: state.postText,
                likesCount: "0",
            }

            return {...state, posts: [newPost, ...state.posts], postText: ''}
        
        case UPDATE_NEW_POST_TEXT: 
            return {...state, postText: action.newText}
        
        default: return state         
    }
}

  