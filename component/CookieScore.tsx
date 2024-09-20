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
  const [cookieperclick, setcookieperclick] = useState(0.01);

  // Use the context
  // useEffect to update cookieScore whenever Click prop changes and save the score
  useEffect(() => {
    if (Click > 0) {
      // Only increment cookie score if a click has occurred
      const newScore = Math.round((cookieScore + cookieperclick) * 100) / 100;
      console.log("New Score:", newScore); // Debugging line
      saveCookieScore(newScore); // Save the updated score
    }
  }, [Click]);

  useEffect(() => {
    if (Click2 > 0) {
      const value = cookieperclick + cookieperclick;
      setcookieperclick(value);
      console.log("here2");
      console.log({ cookieperclick });
    }
  }, [Click2]);

  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: wp(8.5),
        justifyContent: "flex-end",
        width: wp(88),
        borderWidth: 3,
        paddingHorizontal: wp(2),
        borderColor: "#f3b366",
        borderTopLeftRadius: wp(5),
        borderTopRightRadius: wp(5),
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
