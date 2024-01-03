import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Map from "./Map";
import Header from "./Header";
import SettingsScreen from "../Settings/SettingsScreen";
import { useNavigation } from "@react-navigation/native";
import QRCodeScreen from "../Account/QR";

function HomeScreen() {
  return (
    <>
      <Header title="Home" />
      <Map />
    </>
  );
}

function AccountScreen() {
  return (
    <>
      <Header title="Account" />
      <QRCodeScreen />
    </>
  );
}

function NotificationScreen() {
  return (
    <View style={styles.screen}>
      <Text>Notification!</Text>
    </View>
  );
}

function SettingScreen() {
  const navigation = useNavigation();
  return (
    <>
      <Header title="Setting" />
      <SettingsScreen navigation={navigation} />
    </>
  );
}

export default function BottomTab() {
  const Tab = createBottomTabNavigator();

  // const linking = {
  //   prefixes: [],
  //   config: {
  //     screens: {
  //       HomeScreen: "Home",
  //       AccountScreen: "Account",
  //       EditProfile: "EditProfile",
  //       EditProfile: {
  //         screens: {
  //           EditProfile: 'EditProfile',
  //         }
  //       },
  //     },
  //   },
  // };

  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home-outline";
            } else if (route.name === "Account") {
              iconName = "person-outline";
            } else if (route.name === "Notification") {
              iconName = "notifications-outline";
            } else if (route.name === "Setting") {
              iconName = "settings-outline";
            }

            return <Icon name={iconName} color={color} size={size} />;
          },
          tabBarLabel: ({ focused, color }) => {
            let label;

            if (route.name === "Home") {
              label = "Home";
            } else if (route.name === "Account") {
              label = "Account";
            } else if (route.name === "Notification") {
              label = "Notification";
            } else if (route.name === "Setting") {
              label = "Setting";
            }

            return <Text style={{ color }}>{label}</Text>;
          },
          tabBarActiveTintColor: "#5EAB07",
          tabBarInactiveBackgroundColor: "#D1F6AB",
          tabBarActiveBackgroundColor: "#D1F6AB",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="notifications-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
