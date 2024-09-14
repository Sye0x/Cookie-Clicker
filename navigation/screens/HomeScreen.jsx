import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import CookieScore from "@/component/CookieScore"; // Importing CookieScore component to display the current cookie count.
import Money from "@/component/Money"; // Importing Money component to display the current money count.

// Context for cookies and money states
import { useCookieScore } from "../../component/CookieContext"; // Import the useCookieScore hook to access and manage cookie-related state.
import { useMoneyScore } from "../../component/MoneyContext"; // Import the useMoneyScore hook to access and manage money-related state.

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"; // Utility to handle responsive designs across various screen sizes.

const HomeScreen = ({ navigation }) => {
  // Destructure cookieScore and saveCookieScore from CookieContext
  const { cookieScore, saveCookieScore } = useCookieScore();

  // Destructure moneyScore and saveMoneyScore from MoneyContext
  const { moneyScore, saveMoneyScore } = useMoneyScore();

  // Function to handle cookie selling and update both cookie and money scores
  const sellCookie = () => {
    const cookiesToSell = Math.floor(cookieScore); // Only sell the full cookies (ignore fractions).

    if (cookiesToSell > 0) {
      const cookieDifference = cookieScore - cookiesToSell; // Calculate remaining fraction of cookies after selling.
      saveCookieScore(Math.round(cookieDifference * 100) / 100); // Update cookie score by removing sold cookies.
      saveMoneyScore(moneyScore + Math.round(cookiesToSell * 0.5 * 100) / 100); // Increase the money score (1 cookie = 0.5 dollars).
    }
  };

  // State to track the number of clicks (used for cookie click functionality)
  const [Clicks, setClick] = useState(0);

  // State to toggle visibility of additional information (e.g., conversion rate)
  const [showInfo, setShowInfo] = useState(false);

  // Function to handle cookie click event (toggles between 1 and 0)
  function CookieClick() {
    setClick((prevClick) => (prevClick === 1 ? 0 : 1)); // Toggle Click state when the cookie is pressed.
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Display current cookie count */}
      <CookieScore Click={Clicks} />
      {/* Display current money count */}
      <Money Click={Clicks} />

      {/* Pressable Image that represents the cookie */}
      <Pressable
        onPress={CookieClick} // Handle cookie click event.
        style={({ pressed }) => [
          { flex: 1, justifyContent: "center", alignItems: "center" },
          pressed && { opacity: 0.8 }, // Add visual feedback when the cookie is pressed.
        ]}
      >
        {/* Cookie image */}
        <Image
          style={{ height: hp(40), width: hp(40) }} // Set size of the image.
          source={require("../../assets/images/Cookie3.png")} // Path to the cookie image.
        />
      </Pressable>

      {/* Container for the sell button and info text */}
      <View style={styles.SellContainer}>
        {/* Show conversion info when 'showInfo' state is true */}
        {showInfo && (
          <Text style={styles.infoText}>1 Cookie = 0.5$</Text> // Display the conversion rate: 1 cookie equals 0.5 dollars.
        )}

        {/* Pressable sell button */}
        <Pressable
          style={({ pressed }) => [
            styles.sellButton, // Apply default styles.
            pressed && { opacity: 0.6 }, // Apply pressed style for visual feedback.
          ]}
          onLongPress={() => setShowInfo(true)} // Show info text when the button is long-pressed.
          onPressOut={() => setShowInfo(false)} // Hide info text when the press is released.
          onPress={sellCookie} // Trigger sellCookie function when the button is pressed.
        >
          <Text style={styles.SellText}>$</Text>{" "}
          {/* Dollar sign on the button */}
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen; // Export the HomeScreen component.

const styles = StyleSheet.create({
  SellContainer: {
    marginBottom: hp(2.5), // Margin at the bottom of the container.
    width: wp(90), // Set width to 90% of screen width.
    alignItems: "flex-end", // Align items to the right.
    paddingRight: wp(6), // Padding on the right side.
    flexDirection: "row", // Arrange children horizontally.
    justifyContent: "flex-end", // Push content to the right.
  },
  sellButton: {
    borderWidth: wp(1), // Border width for the button.
    borderRadius: wp(100), // Round button shape.
    borderColor: "#a85f34", // Brownish border color.
    width: wp(17), // Width of the button.
    height: wp(17), // Height of the button.
    justifyContent: "center", // Center text vertically.
    alignItems: "center", // Center text horizontally.
    backgroundColor: "#f3b366", // Button background color.
  },
  SellText: {
    color: "#a85f34", // Text color.
    fontSize: wp(6.5), // Font size for the dollar sign.
  },
  infoText: {
    fontSize: wp(6), // Font size for info text.
    height: hp(6), // Fixed height for info text container.
    color: "#000", // Text color.
    marginBottom: hp(2.5), // Margin at the bottom.
    paddingHorizontal: wp(2), // Horizontal padding inside the text container.
    marginRight: wp(2), // Margin on the right.
    backgroundColor: "#f3b366", // Background color matching the button.
    paddingTop: hp(1), // Padding at the top.
    borderWidth: wp(1), // Border width for the info text.
    borderRadius: wp(100), // Rounded border for the info text.
    borderColor: "#a85f34", // Border color matching the button.
  },
});
