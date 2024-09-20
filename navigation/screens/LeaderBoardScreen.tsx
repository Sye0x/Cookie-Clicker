import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

// icons
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.rankbox}>
          <Text style={styles.ranktext}>#1 Cookie King </Text>
          <FontAwesome6 name="chess-king" size={32} color="#fabf5f" />
        </View>
        <View style={styles.rankbox}>
          <Text style={styles.ranktext}>#2 Cookie Queen</Text>
          <FontAwesome6 name="chess-queen" size={32} color="#fabf5f" />
        </View>
        <View style={styles.rankbox}>
          <Text style={styles.ranktext}>#3 Cookie Bishop</Text>
          <FontAwesome6 name="chess-bishop" size={32} color="#fabf5f" />
        </View>
        <View style={styles.rankbox}>
          <Text style={styles.ranktext}>#4 Cookie Knight</Text>
          <FontAwesome6 name="chess-knight" size={32} color="#fabf5f" />
        </View>
        <View style={styles.rankbox}>
          <Text style={styles.ranktext}>#5 Cookie Rookie</Text>
          <FontAwesome6 name="chess-rook" size={32} color="#fabf5f" />
        </View>
        <View style={styles.rankbox}>
          <Text style={styles.ranktext}>#6 Cookie Soldier</Text>
          <FontAwesome6 name="chess-pawn" size={32} color="#fabf5f" />
        </View>
        <View style={styles.rankbox}>
          <Text style={styles.ranktext}>#7 Cookie Serpent</Text>
          <FontAwesome6 name="staff-snake" size={32} color="#fabf5f" />
        </View>
        {/* Specific styling for #8 You rank */}
        <View style={[styles.rankbox, styles.userRankbox]}>
          <Text style={styles.ranktext}>#8 You</Text>
          <MaterialCommunityIcons
            name="human-greeting"
            size={32}
            color="#fabf5f"
          />
        </View>
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
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  userRankbox: {
    justifyContent: "space-between", // Specific styling for #8
    paddingHorizontal: wp(5), // Adjust as needed
  },
  ranktext: {
    marginHorizontal: wp(2.5),
    fontSize: wp(7),
    fontWeight: "600",
    color: "#fabf5f",
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
