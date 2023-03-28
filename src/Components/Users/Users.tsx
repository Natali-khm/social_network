import s from "./Users.module.css"
import userAvatar from "../../assets/images/user_avatar.png";
import axios from "axios";
import React from "react";
import { UserType } from "../../redux/users_reducer";

type UsersPropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: UserType[]
  getUsers: (page:number) => void
  follow: (id: string) => void
  unfollow: (id: string) => void

}

const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)    

    let pages;

    switch (props.currentPage) {
      case 1:
        pages = [1, 2, 3]
        break;
      case 2:
        pages = [1, 2, 3]
        break;
      case pagesCount:
        pages = [1, pagesCount-1]
        break;
      case pagesCount - 1:
        pages = [props.currentPage - 1, props.currentPage];
        break;
      default:
        pages = [props.currentPage - 1, props.currentPage, props.currentPage + 1];
        break;
    }

    return (
      <div className = {s.container} >

{/* pagination */}
        <div className={s.pageCountBlock}>
          {pages.map(p => 
                <span key = {p}
                      className = {props.currentPage === p ? s.selectedPage : ''}
                      onClick = {() => props.getUsers(p)}
                      >{p} </span>)}

            ... <span className = {props.currentPage === pagesCount ? s.selectedPage : ''}
                      onClick = {() => props.getUsers(pagesCount)}>{pagesCount}</span>
        </div>

{/* users */}
        <div className = {s.usersBlock}>

            {props.users.map(u => (
                <div className = {s.userBlock} key={u.id}>
                  <div className={s.avatarBlock}>
                    <div className={s.imgBlock}>
                      <img src={u.photos.small ? u.photos.small : userAvatar} className = {s.avatar}/>
                      <div>{u.followed 
                            ? <button onClick={() => props.unfollow(u.id)} className = {s.btnFollow}>Unfollow</button> 
                            : <button onClick={() => props.follow(u.id)} className = {s.btnFollow}>Follow</button> 
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






export default Users