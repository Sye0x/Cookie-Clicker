// CookieScoreContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create a context for cookie score
const CookieScoreContext = createContext<any>(null);

// Provider component
export const CookieScoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cookieScore, setCookieScore] = useState(0);

  // Load cookie score from AsyncStorage on mount
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
  }, []);

  // Function to save cookie score to AsyncStorage
  const saveCookieScore = async (score: number) => {
    try {
      await AsyncStorage.setItem("@cookieScore", score.toString());
      setCookieScore(score);
    } catch (e) {
      console.error("Failed to save cookie score:", e);
    }
  };

  return (
    <CookieScoreContext.Provider value={{ cookieScore, saveCookieScore }}>
      {children}
    </CookieScoreContext.Provider>
  );
};

// Custom hook to use the cookie score context
export const useCookieScore = () => {
  return useContext(CookieScoreContext);
};
