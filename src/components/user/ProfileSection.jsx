import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 24px;
`;

const IconContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: gray;
  margin-bottom: 8px;
`;

const Value = styled.Text`
  margin-left: 8px;
`;

export default function ProfileSection({ icon, value, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <IconContainer>
        {icon}
        <Value>{value}</Value>
      </IconContainer>
    </Container>
  );
}
