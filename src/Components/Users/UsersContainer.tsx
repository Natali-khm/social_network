import axios from "axios";
import React from "react";
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { RootState } from "../../redux/redux_store"
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UserType } from "../../redux/users_reducer"
import Users from "./Users";

type MapStateToPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

type MapDispatchToPropsType = {
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
  setTotalUsersCount: (count:number) => void
  setCurrentPage: (page:number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


//---------------------------------------------------------------------------------------------------------------------/



class UsersContainer extends React.Component <UsersPropsType>{                                                      // 2

  componentDidMount(){
    const pageSize = this.props.pageSize
    this.props.setCurrentPage(1)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${1}&count=${pageSize}`)
           .then(response => {
             this.props.setUsers(response.data.items)
             this.props.setTotalUsersCount(response.data.totalCount)
           })  
  }

  getUsers = (page: number) => {
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
         .then(response => this.props.setUsers(response.data.items)) 
  }
  
  render(){

    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)    

    let pages;

    switch (this.props.currentPage) {
      case 1:
        pages = [1, 2, 3]
        break;
      case 2:
        pages = [1, 2, 3]
        break;
      case pagesCount:
        pages = [1, pagesCount-1]
        break;
      case pagesCount - 1:
        pages = [this.props.currentPage - 1, this.props.currentPage];
        break;
      default:
        pages = [this.props.currentPage - 1, this.props.currentPage, this.props.currentPage + 1];
        break;
    }

    return <Users totalUsersCount={this.props.totalUsersCount}                                                   //3
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  getUsers={this.getUsers}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
            />
  }
}


//----------------------------------------------------------------------------------------------------------------/

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  users:           state.usersPage.users,
  pageSize:        state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage:     state.usersPage.currentPage
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  follow: (id: string) => dispatch(followAC(id)),
  unfollow: (id: string) => dispatch(unfollowAC(id)),
  setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
  setTotalUsersCount: (count:number) => dispatch(setTotalUsersCountAC(count)),
  setCurrentPage: (page:number) => dispatch(setCurrentPageAC(page))
})



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)                                     // 1