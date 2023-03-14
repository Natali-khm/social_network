import { KeyboardEvent } from 'react'
import { addPostAC, ProfilePageType, updateNewPostTextAC } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/redux_store';
import { Dispatch } from 'redux';


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