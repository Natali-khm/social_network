import { UsersPropsType } from "./UsersContainer"
import s from "./Users.module.css"
import userAvatar from "../../assets/images/user_avatar.png";
import axios from "axios";
import React from "react";

class Users extends React.Component <UsersPropsType>{

  componentDidMount(){
    const currPage = this.props.currentPage
    const pageSize = this.props.pageSize
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currPage}&count=${pageSize}`)
           .then(response => {
             this.props.setUsers(response.data.items)
             this.props.setTotalUsersCount(response.data.totalCount)
           })  
  }

  getUsers = (p: number) => {
    this.props.setCurrentPage(p)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
         .then(response => this.props.setUsers(response.data.items)) 
  }
  
  render(){

    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)    

    let pages;

    switch (this.props.currentPage) {
      case 1:
        pages = [1, 2, 3]
        break;
      case 2:
        pages = [1, 2, 3]
        break;
      case pagesCount:
        pages = [1, pagesCount-1]
        break;
      default:
        pages = [this.props.currentPage - 1, this.props.currentPage, this.props.currentPage + 1];
        break;
    }

    return (
      <div className = {s.container} >
        <div className={s.pageCountBlock}>
          {pages.map(p => 
                <span key = {p}
                      className = {this.props.currentPage === p ? s.selectedPage : ''}
                      onClick = {() => this.getUsers(p)}
                      >{p} </span>)}

            ... <span className = {this.props.currentPage === pagesCount ? s.selectedPage : ''}
                      onClick = {() => this.getUsers(pagesCount)}>{pagesCount}</span>
        </div>

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