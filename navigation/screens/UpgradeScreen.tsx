import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//components
import CookieScore from "@/component/CookieScore";
import Money from "@/component/Money";
import Entypo from "@expo/vector-icons/Entypo";

const UpgradeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CookieScore />
      <Money />
      <View
        style={{
          flex: 1,
          marginVertical: hp(8),
        }}
      >
        <Pressable style={styles.itembox}>
          <Text style={[styles.TEXT, { paddingTop: hp(1.6) }]}>
            Sell cookie
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/images/Cookie3.png")}
              style={styles.Imagelook}
            />
            <Text
              style={[
                styles.TEXT,
                { paddingTop: hp(1.6), paddingHorizontal: wp(2) },
              ]}
            >
              = 0.5$
            </Text>
          </View>
        </Pressable>

        <View style={styles.headingBox}>
          <Text style={styles.heading}>Upgrades</Text>
          <Entypo
            name="arrow-up"
            size={hp(5)}
            color="#fabf5f"
            style={{ paddingTop: hp(0.5) }}
          />
        </View>
      </View>
    </View>
  );
};

export default UpgradeScreen;

const styles = StyleSheet.create({
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
