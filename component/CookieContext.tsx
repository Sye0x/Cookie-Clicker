import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create a context for cookie score
const cookieContext = createContext<any>(null);

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

  return (
    <cookieContext.Provider value={{ cookieScore, setCookieScore }}>
      {children}
    </cookieContext.Provider>
  );
};

// Custom hook to use the cookie context
export const useCookieScore = () => {
  return useContext(cookieContext);
};
