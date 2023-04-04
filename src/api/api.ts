import axios from "axios";
import { UserAuthData } from "../redux/auth_reducer";
import { ProfileType } from "../redux/profile_reducer";
import { UserType } from "../redux/users_reducer";


type GetUsersResponseType = {
  error: null | string
  items: UserType[]
  totalCount: number
}

                                                  
type AuthResponseType = {
    data: UserAuthData
    fieldsErrors: any                                //   any
    messages: string[]
    resultCode: number
  }





const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})



export const usersAPI = ({
    getUsers(currentPage: number = 1, pageSize:number = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
                       .then(response => response.data)
    },
    getProfile (userId:number) {
        return instance.get<ProfileType>(`profile/${userId}`)
                       .then(response => response.data)
    },
    unfollow(userId:number) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId:number) {
        return instance.post(`/follow/${userId}`)
    }

})



export const authAPI = ({
    auth() {
        return instance.get<AuthResponseType>(`auth/me`)
    }
})



                     
