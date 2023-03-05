import React, { KeyboardEvent } from 'react'
import { ActionTypes, PostType } from '../../../redux/testState';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';


type MyPostsPropsType = {
  posts: Array<PostType>
  postText: string
  dispatch: (action: ActionTypes) => void
}


const MyPostsContainer: React.FC <MyPostsPropsType> = (props) => {

  const addPost = () => props.dispatch(addPostAC())

  const updateNewPostText = (newPostText: string) => props.dispatch(updateNewPostTextAC(newPostText))

  const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter'){
      addPost()
    }
  }

  return (
    <MyPosts postText={props.postText} 
             addPost={addPost} 
             posts={props.posts} 
             onEnter={onEnter} 
             updateNewPostText={updateNewPostText}
             />
  );
};

export default MyPostsContainer;
