import { Dispatch } from "redux"
import { followAPI, usersAPI } from "../api/api"
import { AppActionsType } from "./redux_store"

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const IS_FETCHING = 'IS_FETCHING'
export const FOLLOW_TOGGLE_PROGRESS = 'FOLLOW_TOGGLE_PROGRESS'

export const followUser = (id: number) => ({type: FOLLOW, userId: id} as const);
export const unfollowUser = (id: number) => ({type: UNFOLLOW, userId: id} as const);
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const);
export const setTotalUsersCount = (count: number) => ({type: SET_TOTAL_USERS_COUNT, count} as const);
export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, page} as const);
export const setIsFetching = (isFetching: boolean) => ({type: IS_FETCHING, isFetching} as const);
export const setFollowToggle = (followProgress: boolean, id:number) => ({type: FOLLOW_TOGGLE_PROGRESS, followProgress, id} as const);

export type UsersPageActionType = | ReturnType<typeof followUser>
                            | ReturnType<typeof unfollowUser>
                            | ReturnType<typeof setUsers>
                            | ReturnType<typeof setTotalUsersCount>
                            | ReturnType<typeof setCurrentPage>
                            | ReturnType<typeof setIsFetching>
                            | ReturnType<typeof setFollowToggle>


export type UserType = {
    id: number
    name: string
    status: string | null
    // location: {country: string, city: string}
    followed: boolean
    photos: {
        small: string | null
        large: string | null
    }
};

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followToggleProgress: number[]
};

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followToggleProgress: []
  }


export const usersReducer = (state: UsersPageType = initialState, action: UsersPageActionType): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        
        case UNFOLLOW: 
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case SET_USERS: 
            return {...state, users: action.users}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}

        case IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case FOLLOW_TOGGLE_PROGRESS:
            return {...state,
                    followToggleProgress: action.followProgress 
                    ? [...state.followToggleProgress, action.id] 
                    : state.followToggleProgress.filter(id => id !== action.id)
                    }
        
        default: return state         
    }
}



export const getUsers = (currentPage: number, pageSize: number) => {

  return (dispatch: Dispatch<AppActionsType>) => {

    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage))

    usersAPI
      .getUsers(currentPage, pageSize)

      .then((data) => {
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
      })
      .finally(() => dispatch(setIsFetching(false)))
  }
}


export const unfollow = (userId:number) => {

  return (dispatch: Dispatch<AppActionsType>) => {

    dispatch(setFollowToggle(true, userId));

    followAPI
        .unfollow(userId)
        .then((response) => {
            dispatch(setFollowToggle(false, userId));
            response.data.resultCode === 0 && dispatch(unfollowUser(userId));
    })
  }
}

export const follow = (userId: number) => {

  return (dispatch: Dispatch<AppActionsType>) => {

    dispatch(setFollowToggle(true, userId))

    followAPI
      .follow(userId)
      .then((response) => {
        response.data.resultCode === 0 && dispatch(followUser(userId))
      })
      .finally(() => dispatch(setFollowToggle(false, userId)))
  }
}