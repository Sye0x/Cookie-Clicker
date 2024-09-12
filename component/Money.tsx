import { View, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useMoneyScore } from "./MoneyContext";
const Money = (Click: any) => {
  const { moneyScore, saveMoneyScore } = useMoneyScore(); // Use the context
  // useEffect to update cookieScore whenever Click prop changes and save the score
  useEffect(() => {
    const newScore = Math.round((moneyScore + 0.01) * 100) / 100;
    saveMoneyScore(newScore); // Save the updated score
  }, [Click]);

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
      <Text style={{ fontSize: 30, paddingTop: wp(1.2) }}>{moneyScore}</Text>
      <Image
        style={{ height: hp(6), width: hp(6) }}
        source={require("../assets/images/Money.png")}
      />
    </View>
  );
};

export default Money;
