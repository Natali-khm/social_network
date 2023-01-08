import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from './Profile.module.css'
import { ProfilePageType } from "../../redux/testState";

export type postsPropsType = {
  profilePage: ProfilePageType
  addPostText: () => void
  changePostText: (text: string) => void
}

const Profile = (props: postsPropsType) => {
  return (
    <div className={styles.profileBlock}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} 
               postText = {props.profilePage.postText} 
               addPostText={props.addPostText} 
               changePostText = {props.changePostText}/>
    </div>
  );
};

export default Profile;
