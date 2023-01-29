import userAvatar from "../../../../assets/images/user_avatar.png";
import styles from "./Post.module.css";

type Post = {
  message: string;
  likesCount: string;
  key: string;
}

const Post = (props: Post) => {

  return (

    <li className={styles.postBlock}>

      <img src={userAvatar} className={styles.userAvatar} />
      <span>Name</span>
      <div className={styles.postText}> {props.message}</div>

      <div>
        <span className={styles.likesCount}>{"like " + props.likesCount}</span>
      </div>

    </li>
  );
};

export default Post;
