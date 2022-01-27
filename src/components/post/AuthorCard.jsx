import Avatar from "../common/Avatar";
import styled from "styled-components/native";

const Container = styled.Pressable`
  display: flex;
  margin-bottom: 16px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
`;

const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 12px;
`;
const Email = styled.Text`
  font-size: 16px;
  color: grey;
  margin-top: 4px;
`;

export default function AuthorCard({ author, navigation }) {
  return (
    <Container
      onPress={() =>
        navigation.navigate("User", {
          user: author,
        })
      }
    >
      <Avatar big name={author.name} />
      <Name>{author.name}</Name>
      <Email>{author.email}</Email>
    </Container>
  );
}
