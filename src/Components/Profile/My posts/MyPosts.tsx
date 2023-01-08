import React from 'react'
import store, { PostType } from '../../../redux/testState';
import { postsPropsType } from "../Profile";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


type MyPostsPropsType = {
  posts: Array<PostType>
  postText: string
  addPostText: () => void
  changePostText: (text: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
  let newPostElement = React.createRef<HTMLTextAreaElement>();
  
  const getText = () => {
    if (newPostElement.current) {
      props.addPostText()
    }
  };

  const changePostText = () => {
    if (newPostElement.current) {
      props.changePostText(newPostElement.current.value);
    }
  };

  return (
    <div className={styles.MyPostsBlock}>
      <h2>My posts</h2>
      <div className={styles.inputBlock}>
        <textarea ref={newPostElement} 
                  placeholder={'What\'s new?'} 
                  value={props.postText} 
                  onChange={(event)=>changePostText()}/>
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
