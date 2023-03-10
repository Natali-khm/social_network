import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from './Profile.module.css'
import MyPostsContainer from "./My posts/MyPostsContainer";


const Profile = () => {
  
  return (
    <div className={styles.profileBlock}>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
