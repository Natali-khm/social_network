import { UsersPropsType } from "./UsersContainer"
import s from "./Users.module.css"
import userAvatar from "../../assets/images/user_avatar.png";
import axios from "axios";
import React from "react";

class Users extends React.Component <UsersPropsType>{

  componentDidMount(){
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
           .then(response => this.props.setUsers(response.data.items))    
  }
  
  render(){
    return (
      <div className = {s.container} >
        <div className = {s.usersBlock}>

            {this.props.usersPage.users.map(u => (
                <div className = {s.userBlock} key={u.id}>
                  <div className={s.avatarBlock}>
                    <div className={s.imgBlock}>
                      <img src={u.photos.small ? u.photos.small : userAvatar} className = {s.avatar}/>
                      <div>{u.followed 
                            ? <button onClick={() => this.props.unfollow(u.id)} className = {s.btnFollow}>Unfollow</button> 
                            : <button onClick={() => this.props.follow(u.id)} className = {s.btnFollow}>Follow</button> 
                            }</div>
                    </div>
                  </div>
                    <div>
                      <div className={s.userName}>{u.name}</div>
                      <p>{u.status}</p>
                    </div>
                    <div className={s.location}>
                      {/* <div>{u.location.country}</div> */}
                      {/* <div>{u.location.city}</div> */}
                    </div>
                </div>
            ))}

        </div>
      </div>
    )
  }
}



export default Users