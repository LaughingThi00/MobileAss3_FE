// screens/SettingScreen.js
import React from "react";
import { View, Text, ScrollView } from "react-native";
import UserInfo from "./UserInfo";
import SettingsList from "./SettingsList";

const user = {
  name: "Minh Thiện Nguyễn",
  email: "minhthiennguyen1509@gmail.com",
  avatar: "https://placekitten.com/200/200", // Thay đổi URL ảnh avatar thực tế
};

const options = [
  { title: "Notifications", icon: "notifications-outline" },
  { title: "My QR", icon: "qr-code-outline" },
  { title: "Chat", icon: "chatbubble-outline" },
  { title: "Edit Profile", icon: "create-outline" },
  { title: "Log out", icon: "log-out-outline" },
];

export default function SettingsScreen({navigation}) {
  return (
      <ScrollView>
        <UserInfo user={user} />
        <SettingsList options={options}  navigation={navigation} />
      </ScrollView>
  );
}
