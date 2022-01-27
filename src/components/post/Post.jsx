import Comment from "./Comment";
import jsonEscape from "../../utils/jsonEscape";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  margin-bottom: 48px;
`;

const Body = styled.Text`
  font-size: 16px;
  width: 100%;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 12px;
  align-self: flex-start;
`;

const Divider = styled.View`
  border: 1px solid lightgray;
  margin-bottom: 24px;
  margin-top: 24px;
  flex: 1;
  width: 100%;
`;

export default function Post({ post }) {
  return (
    <Container>
      <Title>{jsonEscape(post.title)}</Title>
      <Body>{jsonEscape(post.body)}</Body>
      <Divider />
      <Title>Comments {`(${post.comments.length})`}</Title>
      {post.comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      ))}
    </Container>
  );
}
