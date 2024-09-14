import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create a context for cookie score
// This context will be used to manage the cookie score throughout the application.
const CookieContext = createContext<any>(null);

// Provider component
// This component provides cookie score and its setter function to all child components.
export const CookieScoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cookieScore, setCookieScore] = useState(0); // State to store the cookie score.

  // useEffect to load cookie score from AsyncStorage when the component mounts
  useEffect(() => {
    const loadCookieScore = async () => {
      try {
        // Attempt to retrieve the saved cookie score from AsyncStorage
        const storedScore = await AsyncStorage.getItem("@cookieScore");

        // If a score exists, parse it as a float and set it in the state
        if (storedScore !== null) {
          setCookieScore(parseFloat(storedScore));
        }
      } catch (e) {
        // Log an error if loading the score fails
        console.error("Failed to load cookie score:", e);
      }
    };

    // Load the cookie score when the component mounts (runs once)
    loadCookieScore();
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to save the cookie score to AsyncStorage
  const saveCookieScore = async (score: number) => {
    try {
      // Save the new cookie score to AsyncStorage as a string
      await AsyncStorage.setItem("@cookieScore", score.toString());

      // Update the cookie score in the local state
      setCookieScore(score);
    } catch (e) {
      // Log an error if saving the score fails
      console.error("Failed to save cookie score:", e);
    }
  };

  return (
    // The context provider passes both the current cookie score and the function to update it
    <CookieContext.Provider value={{ cookieScore, saveCookieScore }}>
      {children} {/* Render children components */}
    </CookieContext.Provider>
  );
};

// Custom hook to use the cookie score context
// This hook provides access to the cookie score and the saveCookieScore function.
export const useCookieScore = () => {
  return useContext(CookieContext); // Access and return the context value
};
