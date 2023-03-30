import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from './Profile.module.css'
import MyPostsContainer from "./My posts/MyPostsContainer";
import { MapStateToPropsType } from "./ProfileContainer";


const Profile = (props: MapStateToPropsType) => {
  
  return (
    <div className={styles.profileBlock}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
