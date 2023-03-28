import axios from "axios";
import React from "react";
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { RootState } from "../../redux/redux_store"
import { followAC, setCurrentPageAC, setIsFetchingAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UserType } from "../../redux/users_reducer"
import { Preloader } from "../common/Preloader";
import Users from "./Users";

type MapStateToPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

type MapDispatchToPropsType = {
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
  setTotalUsersCount: (count:number) => void
  setCurrentPage: (page:number) => void
  setIsFetching: (isFetching:boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


//-----------------------------------------------------------------------------------------------------------------/



class UsersContainer extends React.Component <UsersPropsType>{                                                  // 2

  componentDidMount(){
    this.props.setIsFetching(true)

    this.props.setCurrentPage(1)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${1}&count=${this.props.pageSize}`)
           .then(response => {
             this.props.setUsers(response.data.items)
             this.props.setTotalUsersCount(response.data.totalCount)})
           .finally(() => this.props.setIsFetching(false))
  }

  getUsers = (page: number) => {
    this.props.setIsFetching(true)
    this.props.setCurrentPage(page)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
         .then(response => this.props.setUsers(response.data.items))
         .finally(() => this.props.setIsFetching(false))
  }
  
  render(){                                                                                                     
    return <>
          <Users totalUsersCount={this.props.totalUsersCount}                                                           //3
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        getUsers={this.getUsers}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        isFetching={this.props.isFetching}
                  />    
          </>
  }
}


//----------------------------------------------------------------------------------------------------------------/

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  users:           state.usersPage.users,
  pageSize:        state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage:     state.usersPage.currentPage,
  isFetching:      state.usersPage.isFetching
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  follow: (id: string) => dispatch(followAC(id)),
  unfollow: (id: string) => dispatch(unfollowAC(id)),
  setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
  setTotalUsersCount: (count:number) => dispatch(setTotalUsersCountAC(count)),
  setCurrentPage: (page:number) => dispatch(setCurrentPageAC(page)),
  setIsFetching: (isFetching:boolean) => dispatch(setIsFetchingAC(isFetching))
})



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)                                     // 1