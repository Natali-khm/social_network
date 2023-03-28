export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const followAC = (id: string) => ({type: FOLLOW, userId: id} as const);
export const unfollowAC = (id: string) => ({type: UNFOLLOW, userId: id} as const);
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const);
export const setTotalUsersCountAC = (count: number) => ({type: SET_TOTAL_USERS_COUNT, count} as const);
export const setCurrentPageAC = (page: number) => ({type: SET_CURRENT_PAGE, page} as const);

type UsersPageActionTypes = | ReturnType<typeof followAC>
                            | ReturnType<typeof unfollowAC>
                            | ReturnType<typeof setUsersAC>
                            | ReturnType<typeof setTotalUsersCountAC>
                            | ReturnType<typeof setCurrentPageAC>


export type UserType = {
    id: string
    name: string
    status: string
    location: {country: string, city: string}
    followed: boolean
    photos: {
        small: string
        large: string
    }
};

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
};

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
  }


export const usersReducer = (state: UsersPageType = initialState, action: UsersPageActionTypes): UsersPageType => {

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
        
        default: return state         
    }
}

  