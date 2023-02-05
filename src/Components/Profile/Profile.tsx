import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from './Profile.module.css'
import { ActionTypes, ProfilePageType } from "../../redux/testState";

export type PostsPropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionTypes) => void;
}

const Profile: React.FC<PostsPropsType> = (props) => {
  return (
    <div className={styles.profileBlock}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} 
               postText = {props.profilePage.postText} 
               dispatch = {props.dispatch}
               />
    </div>
  );
};

export default Profile;
