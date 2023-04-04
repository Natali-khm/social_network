import { Preloader } from '../../common/Preloader';
import styles from './ProfileInfo.module.css'
import userAvatar from '../../../assets/images/user_avatar.png'
import { ProfileType } from '../../../redux/profile_reducer';


const ProfileInfo = (props: {  profile: ProfileType | null }) => {
  if (!props.profile){
    return <Preloader/>
  }
  return <div className={styles.profileInfoBlock}>
            <img src={props.profile.photos.large ? props.profile.photos.large : userAvatar}/>
            <div>
              <h1>{props.profile.fullName}</h1>
              <div>about me: {props.profile.aboutMe}</div>
              <div>contacts: {props.profile.contacts.instagram}, {props.profile.contacts.github}</div>
              <div>job: {props.profile.lookingForAJobDescription}</div>
            </div> 
         </div>;
};

export default ProfileInfo;
