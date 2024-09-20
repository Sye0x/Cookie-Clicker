import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LeaderBoardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingBox}>
        <Text style={styles.heading}>LeaderBoard</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.rankbox}></View>
        <View style={styles.rankbox}></View>
        <View style={styles.rankbox}></View>
        <View style={styles.rankbox}></View>
        <View style={styles.rankbox}></View>
        <View style={styles.rankbox}></View>
        <View style={styles.rankbox}></View>
      </ScrollView>
    </View>
  );
};

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(2),
    alignItems: "center",
  },
  scrollContainer: {
    alignItems: "center", // Center the content inside the scroll view
    paddingBottom: hp(2), // Optional: some padding at the bottom
  },
  rankbox: {
    borderWidth: wp(1),
    width: wp(85),
    height: hp(10),
    marginTop: hp(1.5),
    borderRadius: wp(3), // Optional: rounding corners for better design
    borderColor: "#fabf5f",
    backgroundColor: "#fff7e6", // Optional: background color for the boxes
  },
  heading: {
    fontSize: hp(5),
    fontWeight: "600",
    color: "#fabf5f",
    textAlign: "center",
  },
  headingBox: {
    marginVertical: hp(4),
    borderWidth: wp(1.5),
    borderRadius: wp(5),
    borderColor: "#f3b366",
    backgroundColor: "#d27d2f",
    height: hp(10.5),
    width: wp(75),
    justifyContent: "center",
    alignItems: "center",
  },
});
