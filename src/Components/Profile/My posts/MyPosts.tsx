import React from 'react'
import { ActionTypes, addPostActionCreator, changeNewPostTextActionCreator, PostType } from '../../../redux/testState';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useAutoAnimate } from '@formkit/auto-animate/react';


type MyPostsPropsType = {
  posts: Array<PostType>
  postText: string
  dispatch: (action: ActionTypes) => void;
}




const MyPosts: React.FC <MyPostsPropsType> = (props) => {

  let newPostElement = React.createRef<HTMLTextAreaElement>();
  
  const addPost = () => {
    if (newPostElement.current) {
      props.dispatch(addPostActionCreator())
    }
  };

  const changeNewPostText = () => {
    if (newPostElement.current) {
      props.dispatch(changeNewPostTextActionCreator(newPostElement.current.value));
    }
  };

  const postsForRender = props.posts
        .map(post => ( <Post message={post.message} likesCount={post.likesCount} key={post.id} /> ))
        .reverse();

  const [listRef] = useAutoAnimate<HTMLUListElement>() 

  return (

    <div className={styles.MyPostsBlock}>
      
      <h2>My posts</h2>

      <div className={styles.inputBlock}>

        <textarea ref={newPostElement} 
                  placeholder={'What\'s new?'} 
                  value={props.postText} 
                  onChange={changeNewPostText}/>

        <button onClick={addPost}>Add post</button>

      </div>

      <ul className={styles.postsBlock} ref={listRef}>
        {postsForRender}
      </ul>
    </div>
  );
};

export default MyPosts;
