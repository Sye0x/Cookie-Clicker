import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import CookieScore from "@/component/CookieScore";
import Money from "@/component/Money";
import { useState } from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeScreen = ({ navigation }) => {
  const [Clicks, setClick] = useState(0);

  function CookieClick() {
    if (Clicks === 1) {
      setClick(0);
    } else {
      setClick(1);
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CookieScore Click={Clicks} />
      <Money />
      <Pressable
        onPress={CookieClick}
        style={({ pressed }) => [
          { flex: 1, justifyContent: "center", alignItems: "center" },
          pressed && { opacity: 0.5 },
        ]}
      >
        <Image
          style={{ height: hp(40), width: hp(40) }}
          source={require("../../assets/images/Cookie3.png")}
        />
      </Pressable>
      <View style={styles.SellContainer}>
        <Pressable style={styles.sellButton}>
          <Text style={styles.SellText}>$</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  SellContainer: {
    marginBottom: hp(2.5),
    width: wp(90),
    alignItems: "flex-end",
    paddingRight: wp(6),
  },
  sellButton: {
    borderWidth: wp(1),
    borderRadius: wp(100),
    borderColor: "#a85f34",
    width: wp(17),
    height: wp(17),

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3b366",
  },
  SellText: {
    color: "#a85f34",
    fontSize: wp(6.5),
  },
});
