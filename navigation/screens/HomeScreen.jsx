import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";

//components
import CookieScore from "@/component/CookieScore";
import Money from "@/component/Money";

//context
import { useCookieScore } from "../../component/CookieContext";
import { useMoneyScore } from "../../component/MoneyContext";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeScreen = ({ navigation }) => {
  const { cookieScore, saveCookieScore } = useCookieScore();
  const { moneyScore, saveMoneyScore } = useMoneyScore();

  const sellCookie = () => {
    const cookiesToSell = Math.floor(cookieScore);

    if (cookiesToSell > 0) {
      const cookieDifference = cookieScore - cookiesToSell;
      saveCookieScore(Math.round(cookieDifference * 100) / 100); // Decrease the cookie score
      saveMoneyScore(moneyScore + Math.round(cookiesToSell * 0.5 * 100) / 100); // Increase the money score
    }
  };

  const [Clicks, setClick] = useState(0);
  const [showInfo, setShowInfo] = useState(false); // State to manage the visibility of text

  function CookieClick() {
    setClick(Clicks + 1);
  }

  return (
    <View style={styles.background}>
      <CookieScore Click={Clicks} />
      <Money Click={Clicks} />
      <Pressable
        onPress={CookieClick}
        style={({ pressed }) => [
          { flex: 1, justifyContent: "center", alignItems: "center" },
          pressed && { opacity: 0.8 },
        ]}
      >
        <Image
          style={{ height: hp(40), width: hp(40) }}
          source={require("../../assets/images/Cookie3.png")}
        />
      </Pressable>
      <View style={styles.SellContainer}>
        {showInfo && ( // Conditionally render the text inside a <Text> component
          <Text style={styles.infoText}>1 Cookie = 0.5$</Text>
        )}
        <Pressable
          style={({ pressed }) => [
            styles.sellButton,
            pressed && { opacity: 0.6 },
          ]}
          onLongPress={() => setShowInfo(true)} // Show text on long press
          onPressOut={() => setShowInfo(false)} // Hide text when the press is released
          onPress={sellCookie}
        >
          <Text style={styles.SellText}>$</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%", // Ensures the width covers the screen width
    height: "100%", // Ensures the height covers the screen height
    justifyContent: "center",
    alignItems: "center",
  },
  SellContainer: {
    marginBottom: hp(2.5),
    width: wp(90),
    alignItems: "flex-end",
    paddingRight: wp(6),
    flexDirection: "row",
    justifyContent: "flex-end",
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
  infoText: {
    fontSize: wp(6),
    height: hp(6),
    color: "#000",
    marginBottom: hp(2.5),
    paddingHorizontal: wp(2),
    marginRight: wp(2),
    color: "#a85f34",
    backgroundColor: "#f3b366",
    paddingTop: hp(1),
    borderWidth: wp(1),
    borderRadius: wp(100),
    borderColor: "#a85f34",
  },
});
