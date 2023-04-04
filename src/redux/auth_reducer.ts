import { Dispatch } from "redux"
import { authAPI, usersAPI } from "../api/api"
import { AppActionsType } from "./redux_store"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'


export const setAuthUserData = (data:UserAuthData) => ({type: SET_USER_DATA, payload: data} as const)
export const setUserPhoto = (userPhoto:string) => ({type: SET_USER_PHOTO, userPhoto} as const)


export type UserAuthData = {
  id: number | null
  email: string | null
  login: string | null
}

type AuthStateType = {
  authData: UserAuthData
  userPhoto: string | null,
  isFetching: boolean
  isAuth: boolean
}


export type AuthActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setUserPhoto>



const initialState = {
  authData: {
    id: null,
    email: null,
    login: null  
  },
  userPhoto: null,
  isFetching: false,
  isAuth: false
}


export const authReducer = (state: AuthStateType = initialState, action:AuthActionsType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, authData: action.payload, isAuth: true}

        case SET_USER_PHOTO:
            return {...state, userPhoto: action.userPhoto}
    
        default:
            return state
    }
}

export const getAuthUserData = () => (dispatch: Dispatch<AppActionsType>) => {

  authAPI
    .auth()
    .then(response => {

      response.data.resultCode === 0 && dispatch(setAuthUserData(response.data.data))
    
      const userId = response.data.data.id

      userId && usersAPI
                  .getProfile(userId)
                  .then(data => dispatch(setUserPhoto(data.photos.small)))
    })
}