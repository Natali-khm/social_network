import { addPostAC, profileReducer, updateNewPostTextAC } from "../redux/profile_reducer";

test("should add correct post", () => {
  const startState = {
    posts: [
      { id: "1", message: "Hi", likesCount: "1" },
      { id: "2", message: "Bye", likesCount: "0" },
    ],
    postText: "",
    profile: null
  };

  const endState = profileReducer(startState, addPostAC());
  expect(endState.posts.length).toBe(3);
  expect(endState.posts[0].id).toBe('3');
});

test("should update new post text", () => {
  const startState = {
    posts: [
      { id: "1", message: "Hi", likesCount: "1" },
      { id: "2", message: "Bye", likesCount: "0" },
    ],
    postText: "",
    profile: null
  };

  const endState = profileReducer(startState, updateNewPostTextAC('some text'));
  expect(endState.posts.length).toBe(2);
  expect(endState.postText).toBe('some text');
});
