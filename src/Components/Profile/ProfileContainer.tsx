import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux_store";
import { ProfileType, setUserProfile } from "../../redux/profile_reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";

export type MapStateToPropsType = {
  profile: ProfileType | null
}

type MapDispatchToPropsType = {
  setUserProfile: (profile: any) => void
}

export type ProfilePageType = MapStateToPropsType  & MapDispatchToPropsType

type PathParamsType = {
  userId: string
}

type ProfilePageCommonType = RouteComponentProps<PathParamsType> & ProfilePageType



//----------------------------------------------------------------------------//


class ProfileContainer extends React.Component <ProfilePageCommonType> {                                                                                // 3

  componentDidMount(){
    debugger
    let userId = this.props.match.params.userId
    if (!userId) {userId = '2'}

    axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
          .then(response => {
            debugger
            this.props.setUserProfile(response.data)
  })
  }

  render(){ 
    return (<Profile profile = {this.props.profile}/>)                                                                                                     // 4
  }
}

//----------------------------------------------------------------------------//


const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
})

const ContainerComponentWithUrlData = withRouter(ProfileContainer)                                                                                         // 2

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {setUserProfile})(ContainerComponentWithUrlData);  // 1

