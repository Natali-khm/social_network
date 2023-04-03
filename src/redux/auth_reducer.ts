const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'

export type UserAuthData = {
  id: number | null
  email: string | null
  login: string | null
};

type AuthStateType = {
  authData: UserAuthData
  userPhoto: string | null,
  isFetching: boolean
  isAuth: boolean
};

const initialState = {
  authData: {
    id: null,
    email: null,
    login: null  
  },
  userPhoto: null,
  isFetching: false,
  isAuth: false
};

export type AuthActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setUserPhoto>

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

export const setAuthUserData = (data:UserAuthData) => ({type: SET_USER_DATA, payload: data} as const)
export const setUserPhoto = (userPhoto:string) => ({type: SET_USER_PHOTO, userPhoto} as const)