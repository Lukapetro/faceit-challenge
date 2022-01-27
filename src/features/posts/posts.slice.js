import { POSTS } from "../features";
import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./posts.actions";

const POST_RANGE = 10;

const initialState = {
  isFetching: true,
  isFetchingMore: true,
  hasLoaded: false,
  posts: [],
  error: "",
  postPerPage: 10
};

const postsSlice = createSlice({
  name: POSTS,
  initialState,
  reducers: {
    incrementPostPerPage(state) {
      state.postPerPage += POST_RANGE
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.hasLoaded = true;
      state.isFetching = false;
      state.error = "";
    },
    [fetchPosts.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.isFetching = false;
      state.error = "unknown error occured";
    }
  }
});

export const { incrementPostPerPage } = postsSlice.actions
export default postsSlice.reducer;
