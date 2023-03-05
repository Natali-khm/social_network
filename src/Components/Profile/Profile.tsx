import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from './Profile.module.css'
import { ActionTypes, ProfilePageType } from "../../redux/testState";
import MyPostsContainer from "./My posts/MyPostsContainer";

export type PostsPropsType = {

  profilePage: ProfilePageType
  dispatch:    (action: ActionTypes) => void;

}

const Profile: React.FC<PostsPropsType> = (props) => {
  
  return (
    <div className={styles.profileBlock}>
      <ProfileInfo />
      <MyPostsContainer posts={props.profilePage.posts} 
               postText = {props.profilePage.postText} 
               dispatch = {props.dispatch}
               />
    </div>
  );
};

export default Profile;
