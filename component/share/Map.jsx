import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function Map() {
  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 10.880728913262141,
            longitude: 106.80541395862112,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221,
          }}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
    width: "100%",
  },
});
