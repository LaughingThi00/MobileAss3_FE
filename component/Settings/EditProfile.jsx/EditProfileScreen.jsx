// screens/EditProfileScreen.js
import React from "react";
import { View, ScrollView } from "react-native";
import EditProfileItem from './EditProfileItem';

const user = {
  name: "John Doe",
  nickname: "JohnD",
  avatar: "https://placekitten.com/200/200", // Thay đổi URL ảnh avatar thực tế
  gender: "Male",
  birthday: "01/01/1990",
  email: "john@example.com",
  school: "Example University",
  major: "Computer Science",
  location: "City, Country",
  nationality: "Nationality",
  phone: "123456789",
  facebook: "https://www.facebook.com/johndoe",
  instagram: "https://www.instagram.com/johndoe",
  zalo: "ZaloID",
};

export default function EditProfileScreen() {
  const onEditPress = (label) => {
    console.log(`Editing: ${label}`);
  };

  return (
    <ScrollView>
      <EditProfileItem
        label="Name"
        value={user.name}
        icon="person-outline"
        onEditPress={() => onEditPress("Name")}
      />
      <EditProfileItem
        label="Nickname"
        value={user.nickname}
        icon="chatbubble-outline"
        onEditPress={() => onEditPress("Nickname")}
      />
    </ScrollView>
  );
}
