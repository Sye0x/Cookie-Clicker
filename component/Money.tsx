import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Money = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: wp(0),
        justifyContent: "flex-end",
        width: wp(88),
        borderWidth: 2,
        borderTopWidth: 0,
        paddingHorizontal: wp(2),
      }}
    >
      <Text style={{ fontSize: 30, paddingTop: wp(1.2) }}>1</Text>
      <Image
        style={{ height: hp(6), width: hp(6) }}
        source={require("../assets/images/Money.png")}
      />
    </View>
  );
};

export default Money;
