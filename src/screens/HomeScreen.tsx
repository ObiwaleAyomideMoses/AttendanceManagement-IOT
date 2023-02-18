import { View, Dimensions, Text } from "react-native";
import Header from "../Components/Header";
import Bottom from "../Components/Bottom";
import React from "react";
import RegisterModal from "../Components/RegisterModal";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = () => {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#F0F7F4",
      }}
    >
      <Header />
      <Bottom />
      <RegisterModal/>
    </View>
  );
};

export default HomeScreen;
