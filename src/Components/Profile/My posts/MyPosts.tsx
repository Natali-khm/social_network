import React from 'react'
import { addPostText } from '../../../redux/testState';
import { postsPropsType } from "../Profile";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props: postsPropsType) => {
  let newPostElement = React.createRef<HTMLTextAreaElement>();
  const getText = () => {
    if (newPostElement.current) {
      addPostText(newPostElement.current.value)
      newPostElement.current.value=''
    }
  };

  return (
    <div className={styles.MyPostsBlock}>
      <h2>My posts</h2>
      <div className={styles.inputBlock}>
        <textarea ref={newPostElement} placeholder={'What\'s new?'}></textarea>
        <button onClick={getText}>Add post</button>
      </div>
      <div className={styles.postsBlock}>
        {props.posts
        .map(post => ( <Post message={post.message} likesCount={post.likesCount} key={post.id} /> ))
        .reverse()}
      </div>
    </div>
  );
};

export default MyPosts;
