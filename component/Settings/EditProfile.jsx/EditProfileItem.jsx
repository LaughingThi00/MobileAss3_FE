// components/EditProfileItem.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function EditProfileItem({ label, value, icon, onEditPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={25} color="black" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <TouchableOpacity style={styles.editIconContainer} onPress={onEditPress}>
        <Icon name="create-outline" size={25} color="#5EAB07" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  iconContainer: {
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    color: "gray",
  },
  editIconContainer: {},
});
