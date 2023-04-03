import { addMessageAC, updateNewMessageTextAC } from "./dialogs_reducer";
export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const addPostAC = () => ({type: ADD_POST} as const);
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const);
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const);                     // any

//----------------------------------------------------------------------------------------------------------------//

export type ProfileActionsType =  ReturnType<typeof addPostAC> 
                                | ReturnType<typeof updateNewPostTextAC> 
                                | ReturnType<typeof updateNewMessageTextAC>
                                | ReturnType<typeof addMessageAC>
                                | ReturnType<typeof setUserProfile>


export type PostType = {
    id: string;
    message: string;
    likesCount: string;
};

export type ProfilePageType = {
    posts: Array<PostType>;
    postText: string;
    profile: ProfileType | null
};


type ContactsType = {
  facebook: string | null
  github: string | null
  instagram: string | null
  mainLink: string | null
  twitter: string | null
  vk: string | null
  website: string | null
  youtube: string | null
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
      small: string
      large: string
    }
  }

//----------------------------------------------------------------------------------------------------------------//

const initialState: ProfilePageType = {
    posts: [
      { id: "1", message: "Hi", likesCount: "1" },
      { id: "2", message: "Bye", likesCount: "0" },
    ],
    postText: '',
    profile: null
  }

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {

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
        
        case SET_USER_PROFILE:
            const res = {...state, profile: action.profile}
            return res
        
        default: return state         
    }
}

  