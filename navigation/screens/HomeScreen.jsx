import { View, Text, Image, Pressable } from "react-native";
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
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        onPress={CookieClick}
      >
        <Image
          style={{ height: hp(40), width: hp(40) }}
          source={require("../../assets/images/Cookie3.png")}
        />
      </Pressable>
    </View>
  );
};

export default HomeScreen;
