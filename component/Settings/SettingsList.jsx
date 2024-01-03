// components/SettingsList.js
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfileScreen from "./EditProfile.jsx/EditProfileScreen";
import { useNavigation, useRoute } from "@react-navigation/native";

function OptionScreen({ route }) {
  const { title, icon, onPressOption } = route.params;

  return (
    <View>
      <TouchableOpacity
        style={styles.option}
        onPress={() => onPressOption(title)}
      >
        <Icon name={icon} size={25} color="black" />
        <Text style={styles.optionText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function SettingsList({ options }) {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  const onPressOption = (option) => {
    if (option.title === "Edit Profile") {
      console.log("THIS", navigation.navigate);
      navigation.navigate("EditProfile");
    }
    console.log(`Selected option: ${option.title}`);
  };

  const route = useRoute();

  return (
    // <View>
    //   {/* {options.map((option, index) => (
    //     <TouchableOpacity
    //       key={index}
    //       style={styles.option}
    //       onPress={() => onPressOption(option)}
    //     >
    //       <Icon name={option.icon} size={25} color="black" />
    //       <Text style={styles.optionText}>{option.title}</Text>
    //     </TouchableOpacity>
    //   ))} */}
    //   <Stack.Navigator>
    //     {options.map((option, index) => (
    //       <Stack.Screen
    //         name={option.title}
    //         component={
    //           <View>
    //             <TouchableOpacity
    //               key={index}
    //               style={styles.option}
    //               onPress={() => onPressOption(option)}
    //             >
    //               <Icon name={option.icon} size={25} color="black" />
    //               <Text style={styles.optionText}>{option.title}</Text>
    //             </TouchableOpacity>
    //           </View>
    //         }
    //       ></Stack.Screen>
    //     ))}
    //   </Stack.Navigator>
    // </View>

    <ScrollView>
      <View>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => {
              console.log("PRESS EDITPROFILE:", route);

              const childScreenNames = route?.state?.routes.map(
                (childRoute) => childRoute.name
              );
              console.log("Current Screen Children:", childScreenNames);

              navigation.navigate("EditProfile");
            }}

            // onPress={() => onPressOption(option)}
          >
            <Icon name={option.icon} size={25} color="black" />
            <Text style={styles.optionText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Stack.Navigator>
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
  },
});
