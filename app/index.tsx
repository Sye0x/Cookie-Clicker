//Game logic need tweaking so does scoreboard will try to complete this as soon as possible

import MainContainer from "@/navigation/MainContainer";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainContainer />
    </View>
  );
}
