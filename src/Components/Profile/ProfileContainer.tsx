import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux_store";
import { getUsers, ProfileType, setUserProfile } from "../../redux/profile_reducer";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";



export type MapStateToPropsType = {
  profile: ProfileType | null
  isAuth: boolean
}

type MapDispatchToPropsType = {
  setUserProfile: (profile: any) => void
  getUsers: (userId: number) => void
}

export type ProfilePageType = MapStateToPropsType  & MapDispatchToPropsType

type PathParamsType = {
  userId: string
}

type ProfilePageCommonType = RouteComponentProps<PathParamsType> & ProfilePageType



//----------------------------------------------------------------------------//


class ProfileContainer extends React.Component <ProfilePageCommonType> {                                                                                // 3

  componentDidMount(){
    let userId = this.props.match.params.userId
    if (!userId) { userId = '2' }
    this.props.getUsers(+userId)
  }

  
  render(){ 

    if (!this.props.isAuth) {return <Redirect to={'/login'}/>}

    return (<Profile profile = {this.props.profile}/>)                                                                                                     // 4
  }
}

//----------------------------------------------------------------------------//


const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

const ContainerComponentWithUrlData = withRouter(ProfileContainer)                                                                                         // 2

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {setUserProfile, getUsers})(ContainerComponentWithUrlData);  // 1

