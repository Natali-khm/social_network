import React from "react";
import { connect } from "react-redux";
import { authAPI, usersAPI } from "../../api/api";
import { getAuthUserData, setAuthUserData, setUserPhoto, UserAuthData } from "../../redux/auth_reducer";
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
  getAuthUserData: () => void
}

export type HeaderContainerType = MapStateToPropsType  & MapDispatchToPropsType


//----------------------------------------------------------------------------//


class HeaderContainer extends React.Component <HeaderContainerType> {                                                                               

  componentDidMount(){
    this.props.getAuthUserData()
  }

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


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {setAuthUserData, setUserPhoto, getAuthUserData})(HeaderContainer);  

