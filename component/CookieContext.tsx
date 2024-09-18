import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create a context for cookie score
const CookieContext = createContext<any>(null);

// Provider component
export const CookieScoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cookieScore, setCookieScore] = useState(0);

  // useEffect to load cookie score from AsyncStorage when the component mounts
  useEffect(() => {
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

    loadCookieScore();
  }, []); // Empty dependency array means this runs once on mount

  // Function to save the cookie score to AsyncStorage
  const saveCookieScore = async (score: number) => {
    try {
      console.log("Saving score to AsyncStorage:", score); // Debugging line
      await AsyncStorage.setItem("@cookieScore", score.toString());
      setCookieScore(score); // Update the state after saving
    } catch (e) {
      console.error("Failed to save cookie score:", e);
    }
  };

  return (
    <CookieContext.Provider value={{ cookieScore, saveCookieScore }}>
      {children}
    </CookieContext.Provider>
  );
};

// Custom hook to use the cookie score context
export const useCookieScore = () => {
  return useContext(CookieContext);
};
