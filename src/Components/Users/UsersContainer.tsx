import React from "react";
import { connect } from "react-redux"
import { RootStateType } from "../../redux/redux_store";
import { follow, setCurrentPage, setFollowToggle, unfollow, UserType, getUsers } from "../../redux/users_reducer"
import Users from "./Users";



type MapStateToPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followToggleProgress: number[]
}

type MapDispatchToPropsType = {
  setCurrentPage: (page:number) => void
  getUsers: (currentPage:number, pageSize:number) => void
  unfollow: (userId:number) => void
  follow: (userId:number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


//-----------------------------------------------------------------------------------------------------------------/



class UsersContainer extends React.Component <UsersPropsType>{                                                  // 2

  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  componentWillUnmount(){
    this.props.setCurrentPage(1)
  }

  getUsersFromNewPage = (page: number) => {
    this.props.getUsers(page, this.props.pageSize)
  }
  
  
  render(){                                                                                                     
    return <>
          <Users totalUsersCount={this.props.totalUsersCount}                                                           //3
                 pageSize={this.props.pageSize}
                 currentPage={this.props.currentPage}
                 users={this.props.users}
                 getUsers={this.getUsersFromNewPage}
                 follow={this.props.follow}
                 unfollow={this.props.unfollow}
                 isFetching={this.props.isFetching}
                 followToggleProgress={this.props.followToggleProgress}
                 />    
          </>
  }
}


//----------------------------------------------------------------------------------------------------------------/

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  users:                state.usersPage.users,
  pageSize:             state.usersPage.pageSize,
  totalUsersCount:      state.usersPage.totalUsersCount,
  currentPage:          state.usersPage.currentPage,
  isFetching:           state.usersPage.isFetching,
  followToggleProgress: state.usersPage.followToggleProgress
})



export default connect(mapStateToProps, {follow, 
                                         unfollow, 
                                         setCurrentPage, 
                                         getUsers,
                                        })(UsersContainer)                                                            // 1
