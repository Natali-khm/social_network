import React, { KeyboardEvent } from 'react'
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { MyPostsPropsType } from './MyPostsContainer';



const MyPosts: React.FC <MyPostsPropsType> = (props) => {

  let newPostElement = React.createRef<HTMLTextAreaElement>();
  
  const addPost = () => props.addPost()

  const updateNewPostText = () => {
    if (newPostElement.current) {
      props.updateNewPostText(newPostElement.current.value);
    }
  };
  
  const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => props.onEnter(e)

  const postsForRender = props.profilePage.posts
        .map(post => ( <Post message={post.message} likesCount={post.likesCount} key={post.id} /> ))

  const [listRef] = useAutoAnimate<HTMLUListElement>() 


  return (

    <div className={styles.MyPostsBlock}>
      
      <h2>My posts</h2>

      <div className={styles.inputBlock}>

        <textarea ref={newPostElement} 
                  placeholder={'What\'s new?'} 
                  value={props.profilePage.postText} 
                  onChange={updateNewPostText}
                  onKeyDown={onEnter}
                  />

        <button onClick={addPost}>Add post</button>

      </div>

      <ul className={styles.postsBlock} ref={listRef}>
        {postsForRender}
      </ul>
    </div>
  );
};

export default MyPosts;
