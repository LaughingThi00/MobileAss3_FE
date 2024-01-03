// Header.js

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header({ title, onMenuPress, onSearchPress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.headerButton}
        onPress={onMenuPress}
        size={25}
      >
        <Icon name="menu-outline" color="#fff" size={25} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      {title === "Home" ? (
        <TouchableOpacity style={styles.headerButton} onPress={onSearchPress}>
          <Icon name="search-outline" color="#fff" size={25} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.headerButton} onPress={onSearchPress}>
          <Icon name="ellipsis-vertical" color="#fff" size={25} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#5EAB07",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#5EAB07",
    padding: 10,
    paddingTop: 50,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerButton: {
    marginRight: 15,
  },
});
