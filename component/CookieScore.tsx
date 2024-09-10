import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CookieScore = ({ Click }: any) => {
  const [cookieScore, setCookieScore] = useState(0);

  // Function to save the score in AsyncStorage
  const saveCookieScore = async (score: number) => {
    try {
      await AsyncStorage.setItem("@cookieScore", score.toString());
    } catch (e) {
      console.error("Failed to save cookie score:", e);
    }
  };

  // Function to load the score from AsyncStorage
  const loadCookieScore = async () => {
    try {
      const storedScore = await AsyncStorage.getItem("@cookieScore");
      if (storedScore !== null) {
        setCookieScore(parseFloat(storedScore));
      }
    } catch (e) {
      console.error("Failed to load cookie score:", e);
    }
  };

  // useEffect to load the score when the component mounts
  useEffect(() => {
    loadCookieScore();
  }, []);

  // useEffect to update cookieScore whenever Click prop changes and save the score
  useEffect(() => {
    const newScore = Math.round((cookieScore + 0.01) * 100) / 100;
    setCookieScore(newScore);
    saveCookieScore(newScore); // Save the updated score
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
