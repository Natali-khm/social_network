import { connect } from "react-redux"
import { Dispatch } from "redux"
import { RootState } from "../../redux/redux_store"
import { followAC, setUsersAC, unfollowAC, UsersPageType } from "../../redux/users_reducer"
import Users from "./Users"

type MapStateToPropsType = {
  usersPage: UsersPageType
}

type MapDispatchToPropsType = {
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: any) => void                             // any
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  usersPage: state.usersPage
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  follow: (id: string) => dispatch(followAC(id)),
  unfollow: (id: string) => dispatch(unfollowAC(id)),
  setUsers: (users: any) => dispatch(setUsersAC(users))                   // any
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer