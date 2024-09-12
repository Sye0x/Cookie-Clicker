import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//icons
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
//screens

import HomeScreen from "./screens/HomeScreen";
import LeaderBoardScreen from "./screens/LeaderBoardScreen";
import UpgradeScreen from "./screens/UpgradeScreen";

//ScreenNames
const HomeName = "Cookie";
const UpgradesName = "Upgrade";
const LeaderBoardName = "Leaderboard";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeName} // Updated here
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let rn = route.name;

          if (rn === HomeName) {
            return (
              <FontAwesome5 name="cookie-bite" size={24} color="#a85f34" />
            );
          } else if (rn === UpgradesName) {
            return <Entypo name="arrow-up" size={24} color="#a85f34" />;
          } else if (rn === LeaderBoardName) {
            return (
              <MaterialIcons name="leaderboard" size={34} color="#a85f34" />
            );
          }
          return null; // Default return
        },
        tabBarStyle: {
          width: wp(90),
          height: hp(8),
          paddingTop: hp(1),
          borderRadius: wp(50),
          marginBottom: hp(1.5),
          backgroundColor: "#f3b366",
        },
        tabBarLabelStyle: {
          marginBottom: 10, // Adds space between the icon and label
          color: "#603928",
        },
        tabBarItemStyle: {
          // Adds space between the icons
          marginHorizontal: 10,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name={HomeName} component={HomeScreen} />
      <Tab.Screen name={UpgradesName} component={UpgradeScreen} />
      <Tab.Screen name={LeaderBoardName} component={LeaderBoardScreen} />
    </Tab.Navigator>
  );
};

export default MainContainer;
