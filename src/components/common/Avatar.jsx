import getInitials from "../../utils/getInitials";
import getRandomColor from "../../utils/getRandomColor";
import styled from "styled-components/native";

const AvatarContainer = styled.View`
  width: ${(props) => (props.big ? "80px" : "50px")};
  height: ${(props) => (props.big ? "80px" : "50px")};
  background-color: ${(props) => props.randomColor};
  border-radius: ${(props) => (props.big ? "50px" : "25px")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarInitials = styled.Text`
  font-size: ${(props) => (props.big ? "24px" : "16px")};
  font-weight: bold;
`;

export default function Avatar({ name, big }) {
  const randomColor = getRandomColor();

  return (
    <AvatarContainer big={big} randomColor={randomColor}>
      <AvatarInitials big={big}>{getInitials(name)}</AvatarInitials>
    </AvatarContainer>
  );
}
