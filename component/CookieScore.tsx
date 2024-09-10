import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// Accept the Click prop
const CookieScore = ({ Click }: any) => {
  const [cookieScore, setCookieScore] = useState(0);

  // useEffect to update cookieScore whenever Click prop changes
  useEffect(() => {
    // Round cookieScore to 1 decimal place and update state
    setCookieScore((prevScore) => Math.round((prevScore + 0.01) * 100) / 100);
  }, [Click]); // Dependency array ensures this runs only when Click changes

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
