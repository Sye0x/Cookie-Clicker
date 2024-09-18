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

const CookieScore = ({ Click }: any) => {
  const { cookieScore, saveCookieScore } = useCookieScore(); // Use the context
  // Use the context
  // useEffect to update cookieScore whenever Click prop changes and save the score
  useEffect(() => {
    if (Click > 0) {
      // Only increment cookie score if a click has occurred
      const newScore = Math.round((cookieScore + 0.01) * 100) / 100;
      console.log("New Score:", newScore); // Debugging line
      saveCookieScore(newScore); // Save the updated score
    }
  }, [Click]);

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
