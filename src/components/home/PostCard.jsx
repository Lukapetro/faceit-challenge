import Avatar from "../common/Avatar";
import { connect } from "react-redux";
import { selectUserById } from "../../features/users/users.selector";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #E0E0E0;
  border: 1px solid #BDBDBD
  margin: 10px;
  border-radius: 25px;
  margin: 12px;
  padding: 24px;
`;

const HeaderContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const BodyContainer = styled.Pressable`
  display: flex;
`;

const Author = styled.Text`
  font-size: 18px;
  margin-left: 16px;
  font-weight: bold;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Body = styled.Text`
  font-size: 14px;
`;

function PostCard({ post, isFetchingUser, author, navigation }) {
  return (
    <Container>
      <HeaderContainer
        onPress={() =>
          navigation.navigate("User", {
            user: author,
          })
        }
      >
        {!isFetchingUser && <Avatar name={author.name} />}
        <Author>{isFetchingUser ? "loading" : author.name}</Author>
      </HeaderContainer>
      <BodyContainer
        onPress={() =>
          navigation.navigate("Post", {
            id: post.id,
            author: author,
          })
        }
      >
        <Title>{post.title}</Title>
        <Body>{post.body.substring(0, 50)}...</Body>
      </BodyContainer>
    </Container>
  );
}

const mapStateToProps = (state, { userId }) => ({
  author: selectUserById(state, { id: userId }),
  isFetchingUser: state.users.isFetching,
});

export default connect(mapStateToProps)(PostCard);
