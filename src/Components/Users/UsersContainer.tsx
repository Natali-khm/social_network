import React from "react";
import { connect } from "react-redux"
import { usersAPI } from "../../api/api";
import { RootStateType } from "../../redux/redux_store";
import { follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow, UserType } from "../../redux/users_reducer"
import Users from "./Users";



type MapStateToPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}

type MapDispatchToPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
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
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
              this.props.setUsers(data.items)
              this.props.setTotalUsersCount(data.totalCount)})
            .finally(() => this.props.setIsFetching(false))
  }

  componentWillUnmount(){
    this.props.setCurrentPage(1)
  }

  getUsersWithNewPage = (page: number) => {
    this.props.setIsFetching(true)
    this.props.setCurrentPage(page)

    usersAPI.getUsers(page, this.props.pageSize)
            .then(data => this.props.setUsers(data.items))
            .finally(() => this.props.setIsFetching(false))
  }
  
  
  render(){                                                                                                     
    return <>
          <Users totalUsersCount={this.props.totalUsersCount}                                                           //3
                 pageSize={this.props.pageSize}
                 currentPage={this.props.currentPage}
                 users={this.props.users}
                 getUsers={this.getUsersWithNewPage}
                 follow={this.props.follow}
                 unfollow={this.props.unfollow}
                 isFetching={this.props.isFetching}
                 />    
          </>
  }
}


//----------------------------------------------------------------------------------------------------------------/

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  users:           state.usersPage.users,
  pageSize:        state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage:     state.usersPage.currentPage,
  isFetching:      state.usersPage.isFetching
})



export default connect(mapStateToProps, {follow, 
                                         unfollow, 
                                         setUsers, 
                                         setTotalUsersCount, 
                                         setCurrentPage, 
                                         setIsFetching
                                        })(UsersContainer)                                                            // 1