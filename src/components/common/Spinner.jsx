import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CustomSpinner = styled.ActivityIndicator``;

export default function Spinner() {
  return (
    <Container>
      <CustomSpinner size="large" color="red" />
    </Container>
  );
}
