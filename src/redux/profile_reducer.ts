import { addMessageAC, updateNewMessageTextAC } from "./dialogs_reducer";
export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const addPostAC = () => ({type: ADD_POST} as const);
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const);

export type ActionTypes = ReturnType<typeof addPostAC> 
                        | ReturnType<typeof updateNewPostTextAC> 
                        | ReturnType<typeof updateNewMessageTextAC>
                        | ReturnType<typeof addMessageAC>




export type PostType = {
    id: string;
    message: string;
    likesCount: string;
};

export type ProfilePageType = {
    posts: Array<PostType>;
    postText: string;
};

const initialState: ProfilePageType = {
    posts: [
      { id: "1", message: "Hi", likesCount: "1" },
      { id: "2", message: "Bye", likesCount: "0" },
    ],
    postText: '',
  }

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {

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

  