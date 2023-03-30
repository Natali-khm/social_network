import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { RootState } from "../../redux/redux_store";
import { ProfileType, setUserProfile } from "../../redux/profile_reducer";

export type MapStateToPropsType = {
  profile: ProfileType | null
}

type MapDispatchToPropsType = {
  setUserProfile: (profile: any) => void
}

export type ProfilePageType = MapStateToPropsType  & MapDispatchToPropsType


//----------------------------------------------------------------------------//


class ProfileContainer extends React.Component <ProfilePageType>{

  componentDidMount(){
    // this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
           .then(response => {
             this.props.setUserProfile(response.data)
            //  this.props.setTotalUsersCount(response.data.totalCount)})
          //  .finally(() => this.props.setIsFetching(false))
  })
}

  render(){
   
    return (<Profile profile = {this.props.profile}/>)
  }
}

//----------------------------------------------------------------------------//

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  profile: state.profilePage.profile,
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);

