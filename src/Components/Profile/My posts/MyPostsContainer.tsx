import React, { KeyboardEvent } from 'react'
import { ActionTypes, StoreType } from '../../../redux/testState';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { addPostAC, ProfilePageType, updateNewPostTextAC } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { StoreContext } from '../../../StoreContext';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/redux_store';
import { Dispatch } from 'redux';


// type MyPostsPropsType = {
//   posts: Array<PostType>
//   postText: string
//   dispatch: (action: ActionTypes) => void
// }


// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         if (store){

//             const profilePage = store.getState().profilePage
//             const addPost = () => store.dispatch(addPostAC());

//             const updateNewPostText = (newPostText: string) =>
//               store.dispatch(updateNewPostTextAC(newPostText));

//             const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
//               if (e.key === "Enter") {
//                 addPost();
//               }
//             };

//             return (
//                 <MyPosts
//                   postText={profilePage.postText}
//                   posts={profilePage.posts}
//                   addPost={addPost}
//                   onEnter={onEnter}
//                   updateNewPostText={updateNewPostText}
//                 />
//             );
//           }          
//         }
//     }
//     </StoreContext.Consumer>
//   );
// };

// export default MyPostsContainer;

type MapStateToPropsType = {
  profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
  addPost: () => void,
  updateNewPostText: (newPostText: string) => void,
  onEnter: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  profilePage: state.profilePage
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  addPost: () => dispatch(addPostAC()),
  updateNewPostText: (newPostText: string) => dispatch(updateNewPostTextAC(newPostText)),
  onEnter: (e: KeyboardEvent<HTMLTextAreaElement>) => { if (e.key === "Enter") { dispatch(addPostAC()) }
}})



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer