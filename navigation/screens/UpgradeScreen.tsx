import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//components
import CookieScore from "@/component/CookieScore";
import Money from "@/component/Money";
import Entypo from "@expo/vector-icons/Entypo";

const UpgradeScreen = () => {
  const [Clicks2, SetClicks2] = useState(0);
  function CookieClick() {
    SetClicks2(2);
    console.log("here");
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CookieScore Click={1} Click2={Clicks2} />
      <Money />
      <View
        style={{
          flex: 1,
          marginVertical: hp(5),
        }}
      >
        <Pressable style={styles.itembox}>
          <Text
            style={[styles.TEXT, { paddingTop: hp(1.6), color: "#d27d2f" }]}
          >
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
                {
                  paddingTop: hp(1.6),
                  paddingHorizontal: wp(2),
                  color: "#d27d2f",
                },
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

        <View
          style={{
            marginTop: hp(4),
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.boxcontainer}>
            <Image
              source={require("../../assets/images/Cookie3.png")}
              style={styles.Imagelook2}
            />
            <Text style={styles.boxtext}>Per Click +0.1</Text>
          </View>
          <View style={styles.boxcontainer}>
            <Image
              source={require("../../assets/images/Money.png")}
              style={styles.Imagelook3}
            />
            <Text style={styles.boxtext}>Per Cookie +0.1$</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: hp(1),
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            style={({ pressed }) => [
              styles.boxcontainer2,
              pressed && { opacity: 0.8 },
            ]}
          >
            <Text style={styles.buttontext}>0.1$</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.boxcontainer2,
              pressed && { opacity: 0.8 },
            ]}
          >
            <Text style={styles.buttontext}>0.1$</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default UpgradeScreen;

const styles = StyleSheet.create({
  boxcontainer: {
    borderWidth: wp(1),
    borderColor: "#d27d2f",
    backgroundColor: "#f3b366",
    height: wp(42),
    width: wp(42),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(8),
  },
  boxcontainer2: {
    borderWidth: wp(1),
    borderColor: "#d27d2f",
    backgroundColor: "#f3b366",
    height: wp(15),
    width: wp(42),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(8),
  },
  boxtext: {
    fontSize: wp(5),
    color: "#d27d2f",
    fontWeight: "600",
  },
  buttontext: {
    fontSize: wp(6),
    color: "#d27d2f",
    fontWeight: "600",
  },
  itembox: {
    borderWidth: wp(0.8),
    borderColor: "#d27d2f",
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
    borderColor: "#f3b366",
    backgroundColor: "#d27d2f",
    height: hp(7.5),
    flexDirection: "row",
    justifyContent: "center",
  },
});
