import { RefreshControl, ScrollView } from "react-native";
import { connect, useDispatch } from "react-redux";
import {
  selectPosts,
  selectPostsByUserId,
} from "../features/posts/posts.selector";
import { useCallback, useEffect } from "react";

import PostCard from "../components/home/PostCard";
import Spinner from "../components/common/Spinner";
import { fetchInitialData } from "../features/posts/posts.actions";
import { incrementPostPerPage } from "../features/posts/posts.slice";
import isCloseToBottom from "../utils/isCloseToBottom";

function HomeScreen({
  isFetching,
  posts,
  fetchInitialData,
  navigation,
  postPerPage,
}) {
  const currentPost = posts.slice(0, postPerPage);

  const onRefresh = useCallback(() => {
    dispatch(incrementPostPerPage());
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  if (isFetching || !posts) return <Spinner />;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
      }
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          dispatch(incrementPostPerPage());
        }
      }}
      scrollEventThrottle={400}
    >
      {currentPost.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          userId={post.userId}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}

const mapStateToProps = (state, { userId }) => ({
  isFetching: state.posts.isFetching,
  posts: userId ? selectPostsByUserId(state, { userId }) : selectPosts(state),
  postPerPage: state.posts.postPerPage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInitialData: () => dispatch(fetchInitialData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
