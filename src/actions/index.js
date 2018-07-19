import { GET_POSTS } from "../constants/index";

export const getPosts = posts => ({
  type: GET_POSTS,
  payload: posts
});
