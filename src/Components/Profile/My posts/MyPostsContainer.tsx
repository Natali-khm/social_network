import React, { KeyboardEvent } from 'react'
import { ActionTypes, PostType } from '../../../redux/testState';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { StoreContext } from '../../../StoreContext';


// type MyPostsPropsType = {
//   posts: Array<PostType>
//   postText: string
//   dispatch: (action: ActionTypes) => void
// }


const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        if (store){

            const profilePage = store.getState().profilePage
            const addPost = () => store.dispatch(addPostAC());

            const updateNewPostText = (newPostText: string) =>
              store.dispatch(updateNewPostTextAC(newPostText));

            const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
              if (e.key === "Enter") {
                addPost();
              }
            };

            return (
                <MyPosts
                  postText={profilePage.postText}
                  posts={profilePage.posts}
                  addPost={addPost}
                  onEnter={onEnter}
                  updateNewPostText={updateNewPostText}
                />
            );
          }          
        }
    }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
