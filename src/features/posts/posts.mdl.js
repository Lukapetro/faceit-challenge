import { fetchComments, fetchInitialData, fetchPosts } from "./posts.actions";

import { fetchUsers } from "../users/users.actions";
import { unwrapResult } from "@reduxjs/toolkit";

export const processFetchInitialData = ({ dispatch }) => next => async action => {
  next(action);

  const { type } = action;

  if (type === fetchInitialData.type) {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }
};

export const processFetchPosts = ({ dispatch }) => next => async action => {
  const { type, payload } = action;


  if (type === fetchPosts.fulfilled.type) {
    const comments = await dispatch(fetchComments()).then(unwrapResult);

    const postsWithComments = payload.map(post => {
      const postComments = comments.filter(
        comment => comment.postId === post.id
      );
      return { ...post, comments: postComments };
    });

    /**
     * why it needs to check the type beforehand?
     * because this middleware wants to modify the payload of fetchPosts action
     *
     * the flow is like this:
     * 1. get posts data from fetchPosts/fulfilled action
     * 2. fetch comments data
     * 3. merge comments with posts data
     * 4. continue the action with modified payload
     *
     * this pattern is known as enrich pattern
     */
    next({ type, payload: postsWithComments });
  } else {
    next(action);
  }
};

const postsMiddleware = [processFetchInitialData, processFetchPosts];

export default postsMiddleware;
