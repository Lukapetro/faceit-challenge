import Avatar from "../components/common/Avatar";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ProfileSection from "../components/user/ProfileSection";
import styled from "styled-components/native";

const Container = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    alignItems: "center",
  },
}))`
  padding: 12px;
  flex: 1;
`;
const Name = styled.Text`
  font-size: 24px;
  margin-top: 12px;
  font-weight: bold;
`;

const Email = styled.Text`
  font-size: 18px;
  margin-top: 8px;
  color: gray;
`;

export default function UserScreen({ route }) {
  const { user } = route.params;

  return (
    <Container>
      <Avatar name={user.name} big />
      <Name>{user.name}</Name>
      <Email>{user.email}</Email>
      <ProfileSection
        icon={<Feather name="home" size={24} color="black" />}
        value={user.address.city + ", " + user.address.street}
        title="Address"
      />
      <ProfileSection
        icon={<Feather name="phone" size={24} color="black" />}
        value={user.phone}
        title="Phone"
      />
      <ProfileSection
        icon={<MaterialIcons name="web-asset" size={24} color="black" />}
        value={user.website}
        title="Website"
      />
      <ProfileSection
        icon={<MaterialIcons name="work-outline" size={24} color="black" />}
        value={user.company.name}
        title="Company"
      />
    </Container>
  );
}
