import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, setUserPhoto, UserAuthData } from "../../redux/auth_reducer";
import { ProfileType } from "../../redux/profile_reducer";
import { RootStateType } from "../../redux/redux_store";
import Header from "./Header";

type ResponseType = {
  data: UserAuthData
  fieldsErrors: any                                //   any
  messages: string[]
  resultCode: number
}

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
    axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
         .then(response => {
                debugger
                if (response.data.resultCode === 0){ 
                  this.props.setAuthUserData(response.data.data)

                  const userId = response.data.data.id
                  axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                        .then(response => {
                          // debugger
                          this.props.setUserPhoto(response.data.photos.small)
                        })
                }
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

