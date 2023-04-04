import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from './Profile.module.css'
import MyPostsContainer from "./My posts/MyPostsContainer";
import { MapStateToPropsType } from "./ProfileContainer";
import { ProfileType } from "../../redux/profile_reducer";


const Profile = (props: {  profile: ProfileType | null }) => {
  
  return (
    <div className={styles.profileBlock}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
