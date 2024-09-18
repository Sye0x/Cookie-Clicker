import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Entypo from "@expo/vector-icons/Entypo";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LeaderBoardScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.headingBox}>
        <Text style={styles.heading}>LeaderBoard</Text>
      </View>
    </View>
  );
};

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  boxcontainer: {
    borderWidth: wp(1.5),
    borderColor: "#603928",
    backgroundColor: "#f3b366",
    height: wp(42),
    width: wp(42),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(8),
  },
  boxcontainer2: {
    borderWidth: wp(1.5),
    borderColor: "#603928",
    backgroundColor: "#f3b366",
    height: wp(15),
    width: wp(42),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(8),
  },
  boxtext: {
    fontSize: wp(5),
    color: "#603928",
  },
  itembox: {
    borderWidth: wp(0.8),
    borderColor: "#603928",
    borderRadius: wp(2),
    width: wp(85),
    height: hp(7),

    paddingHorizontal: wp(2),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f3b366",
  },
  TEXT: {
    color: "white",
    fontSize: hp(2.2),
    fontWeight: "bold",
  },
  Imagelook: {
    width: wp(10),
    height: hp(6),
  },
  Imagelook2: {
    width: wp(12),
    height: hp(8),
  },
  Imagelook3: {
    width: wp(22),
    height: hp(8),
  },
  Imagelook4: {
    width: wp(10),
    height: hp(8),
    marginHorizontal: wp(5),
  },
  heading: {
    fontSize: hp(4),
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
    height: hp(7.5),
    flexDirection: "row",
    justifyContent: "center",
  },
});
