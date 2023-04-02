import React from "react";
import { connect } from "react-redux";
import { authAPI, profileAPI } from "../../api/api";
import { setAuthUserData, setUserPhoto, UserAuthData } from "../../redux/auth_reducer";
import { RootStateType } from "../../redux/redux_store";
import Header from "./Header";


export type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
  userPhoto: string | null
}

type MapDispatchToPropsType = {
  setAuthUserData: (data:UserAuthData) => void
  setUserPhoto: (photo:string) => void
}

export type HeaderContainerType = MapStateToPropsType  & MapDispatchToPropsType


//----------------------------------------------------------------------------//


class HeaderContainer extends React.Component <HeaderContainerType> {                                                                               

  componentDidMount(){
    authAPI.auth().then(response => {
        if (response.data.resultCode === 0){ 
          this.props.setAuthUserData(response.data.data)

          const userId = response.data.data.id
          userId && profileAPI.getProfile(userId).then(data => this.props.setUserPhoto(data.photos.small)
          )}
  })}

  render(){ 
    return (<Header {...this.props}/>)                                                                                                    
  }
}

//----------------------------------------------------------------------------//


const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.authData.login,
  userPhoto: state.auth.userPhoto
})


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {setAuthUserData, setUserPhoto})(HeaderContainer);  

