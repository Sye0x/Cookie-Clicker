import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Entypo from "@expo/vector-icons/Entypo";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LeaderBoardScreen = () => {
  return (
    <View
      style={{
        marginTop: hp(2),
        alignItems: "center",
      }}
    >
      <View style={styles.headingBox}>
        <Text style={styles.heading}>LeaderBoard</Text>
      </View>
    </View>
  );
};

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: hp(4.5),
    fontWeight: "600",
    color: "#fabf5f",
    textAlign: "center",
    paddingTop: hp(0.5),
  },
  headingBox: {
    marginVertical: hp(4),
    borderWidth: wp(1.2),
    borderRadius: wp(5),
    borderColor: "#603928",
    backgroundColor: "#d27d2f",
    height: hp(9.5),
    width: wp(70),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
