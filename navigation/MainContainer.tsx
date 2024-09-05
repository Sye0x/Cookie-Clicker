import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//icons
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
//screens

import HomeScreen from "./screens/HomeScreen";
import LeaderBoardScreen from "./screens/LeaderBoardScreen";
import UpgradeScreen from "./screens/UpgradeScreen";

//ScreenNames
const HomeName = "home";
const UpgradesName = "upgrade";
const LeaderBoardName = "leaderboard";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeName"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";
            let rn = route.name;

            if (rn === HomeName) {
              return (
                <FontAwesome5 name="cookie-bite" size={24} color="black" />
              );
            } else if (rn === UpgradesName) {
              return <Entypo name="arrow-up" size={24} color="black" />;
            } else if (rn === LeaderBoardName) {
              return (
                <MaterialIcons name="leaderboard" size={24} color="black" />
              );
            }
          },
        })}
      >
        <Tab.Screen name={HomeName} component={HomeScreen} />
        <Tab.Screen name={UpgradesName} component={UpgradeScreen} />
        <Tab.Screen name={LeaderBoardName} component={LeaderBoardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
