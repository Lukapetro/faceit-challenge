import Avatar from "../common/Avatar";
import jsonEscape from "../../utils/jsonEscape";
import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 12px;
  margin-bottom: 12px;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: flex-start;
  width: 98%;
`;

const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const TitleContainer = styled.View`
  display: flex;
  margin-left: 12px;
  justify-content: center;
  text-align: center;
  width: 0px;
  flex-grow: 1;
  flex: 1;
`;

const Name = styled.Text`
  font-weight: bold;
`;

const Email = styled.Text`
  text-align: left;
  color: gray; ;
`;

const Body = styled.Text`
  text-align: left;
`;

export default function Comment({ name, body, email }) {
  return (
    <Container>
      <UserContainer>
        <Avatar name={name} />
        <TitleContainer>
          <Name>{name}</Name>
          <Email>{email}</Email>
        </TitleContainer>
      </UserContainer>
      <Body>{jsonEscape(body)}</Body>
    </Container>
  );
}
