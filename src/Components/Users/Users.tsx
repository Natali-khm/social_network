import { UsersPropsType } from "./UsersContainer"
import s from "./Users.module.css"
import userAvatar from "../../assets/images/user_avatar.png";


const Users = (props: UsersPropsType) => {
  if (!props.usersPage.users.length){
    props.setUsers(
      [
        { id: "1", fullName: "Liyana", status: "", location: {country: 'Belarus', city: 'Minsk'}, followed: true, photoUrl: '' },
        { id: "2", fullName: "Marina", status: "hi", location: {country: 'Belarus', city: 'Mogilev'}, followed: true, photoUrl: '' },
        { id: "3", fullName: "Nastya", status: "lets go for a walk", location: {country: 'Russia', city: 'Moskow'}, followed: true, photoUrl: '' },
        { id: "4", fullName: "Alesya", status: "", location: {country: 'Ukraine', city: 'Kiev'}, followed: false, photoUrl: '' },
      ]
    )
  }
  
  return (
    <div>
        {props.usersPage.users.map(u => (
            <div className = {s.userBlock} key={u.id}>
              <div className={s.avatarBlock}>
                <img src={u.photoUrl ? u.photoUrl : userAvatar} className = {s.avatar}/>
                <div>{u.followed 
                      ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> 
                      : <button onClick={() => props.follow(u.id)}>Follow</button> 
                      }</div>
              </div>
              <div>
                <p>{u.fullName}</p>
                <p>{u.status}</p>
                <p>{u.location.country}, {u.location.city}</p>
              </div>
            </div>
        ))}
    </div>
  )
}

export default Users