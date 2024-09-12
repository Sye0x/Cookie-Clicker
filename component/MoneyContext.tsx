import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create a context for money score
const MoneyScoreContext = createContext<any>(null);

// Provider component for Money Score
export const MoneyScoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [moneyScore, setMoneyScore] = useState(0);

  // Load money score from AsyncStorage when the component mounts
  useEffect(() => {
    const loadMoneyScore = async () => {
      try {
        const storedScore = await AsyncStorage.getItem("@moneyScore");
        if (storedScore !== null) {
          setMoneyScore(parseFloat(storedScore));
        }
      } catch (e) {
        console.error("Failed to load money score:", e);
      }
    };

    loadMoneyScore();
  }, []);

  // Function to save money score to AsyncStorage
  const saveMoneyScore = async (score: number) => {
    try {
      await AsyncStorage.setItem("@moneyScore", score.toString());
      setMoneyScore(score); // Update the state after saving
    } catch (e) {
      console.error("Failed to save money score:", e);
    }
  };

  return (
    <MoneyScoreContext.Provider value={{ moneyScore, saveMoneyScore }}>
      {children}
    </MoneyScoreContext.Provider>
  );
};

// Custom hook to use the Money Score context
export const useMoneyScore = () => {
  return useContext(MoneyScoreContext);
};
