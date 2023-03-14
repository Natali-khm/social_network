import { ActionTypes } from "./profile_reducer";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const followAC = (id: string) => ({type: FOLLOW, userId: id} as const);
export const unfollowAC = (id: string) => ({type: UNFOLLOW, userId: id} as const);
export const setUsersAC = (users: any) => ({type: SET_USERS, users} as const);             // any

export type UserType = {
    id: string
    fullName: string
    status: string
    location: {country: string, city: string}
    followed: boolean
    photoUrl: string
};

export type UsersPageType = {
    users: UserType[];
};

const initialState: UsersPageType = {
    users: []
  }

export const usersReducer = (state: UsersPageType = initialState, action: ActionTypes): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        
        case UNFOLLOW: 
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case SET_USERS: 
            return {...state, users: [...state.users, ...action.users]}
        
        default: return state         
    }
}

  