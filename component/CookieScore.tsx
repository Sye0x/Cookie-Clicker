// CookieScore.tsx
import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";

//context
import { CookieScoreProvider, useCookieScore } from "./CookieContext";
import { useMoneyScore } from "./MoneyContext";

// Adjust the import as necessary
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CookieScore = ({ Click }: any, { Click2 }: any) => {
  const { cookieScore, saveCookieScore } = useCookieScore(); // Use the context
  const { MoneyScore, saveMoneyScore } = useMoneyScore(); // Use the context
  // useEffect to update cookieScore whenever Click prop changes and save the score
  useEffect(() => {
    const newScore = Math.round((cookieScore + 0.01) * 100) / 100;
    saveCookieScore(newScore); // Save the updated score
  }, [Click]);
  useEffect(() => {
    const newScore = Math.round(cookieScore);
    saveMoneyScore(MoneyScore + newScore); // Save the updated score
  }, [Click2]);

  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: wp(6.5),
        justifyContent: "flex-end",
        width: wp(88),
        borderWidth: 2,
        paddingHorizontal: wp(2),
      }}
    >
      {/* Display the updated cookieScore value */}
      <Text style={{ fontSize: 30, paddingTop: wp(1.2) }}>{cookieScore}</Text>
      <Image
        style={{ height: hp(6), width: hp(6) }}
        source={require("../assets/images/Cookie3.png")}
      />
    </View>
  );
};

export default CookieScore;
