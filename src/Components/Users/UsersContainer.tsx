import { connect } from "react-redux"
import { Dispatch } from "redux"
import { RootState } from "../../redux/redux_store"
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UsersPageType, UserType } from "../../redux/users_reducer"
import Users from "./Users"

type MapStateToPropsType = {
  usersPage: UsersPageType
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

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  usersPage:       state.usersPage,
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer