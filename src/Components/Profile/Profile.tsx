import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from './Profile.module.css'
import { PostType } from "../../redux/testState";

export type postsPropsType = {
  posts: Array<PostType>
  addPostText: (postText: string) => void
}

const Profile = (props: postsPropsType) => {
  return (
    <div className={styles.profileBlock}>
      <ProfileInfo />
      <MyPosts posts={props.posts}  addPostText={props.addPostText}/>
    </div>
  );
};

export default Profile;
