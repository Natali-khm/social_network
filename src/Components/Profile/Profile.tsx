import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from './Profile.module.css'
import { ActionTypes } from "../../redux/testState";
import MyPostsContainer from "./My posts/MyPostsContainer";

// export type PostsPropsType = {
//   profilePage: ProfilePageType
//   dispatch:    (action: ActionTypes) => void;
// }

const Profile = () => {
  
  return (
    <div className={styles.profileBlock}>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
