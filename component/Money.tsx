import { View, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useMoneyScore } from "./MoneyContext";
const Money = (Click: any, Click2: any) => {
  const { moneyScore, saveMoneyScore } = useMoneyScore(); // Use the context
  // useEffect to update cookieScore whenever Click prop changes and save the score

  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: wp(0),
        justifyContent: "flex-end",
        width: wp(88),
        borderWidth: 3.5,
        borderTopWidth: 0,
        paddingHorizontal: wp(2),
        borderColor: "#f3b366",
        borderBottomLeftRadius: wp(5),
        borderBottomRightRadius: wp(5),
      }}
    >
      <Text style={{ fontSize: 30, paddingTop: wp(1.2) }}>{moneyScore}</Text>
      <Image
        style={{ height: hp(6), width: hp(6), marginLeft: wp(2) }}
        source={require("../assets/images/Money.png")}
      />
    </View>
  );
};

export default Money;
