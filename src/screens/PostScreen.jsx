import AuthorCard from "../components/post/AuthorCard";
import Post from "../components/post/Post";
import Spinner from "../components/common/Spinner";
import { connect } from "react-redux";
import { selectPostById } from "../features/posts/posts.selector";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  padding: 12px;
`;

function PostScreen({ post, isFetching, route, navigation }) {
  const { author } = route.params;

  if (isFetching) return <Spinner />;
  if (!post) return <Text>Error...</Text>;

  return (
    <Container>
      <AuthorCard author={author} navigation={navigation} />
      <Post post={post} />
    </Container>
  );
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.route.params;
  return {
    post: selectPostById(state, { id }),
    isFetching: state.posts.isFetching,
  };
}

export default connect(mapStateToProps)(PostScreen);
