import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
const Header = () => {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  console.log(width);
  return (
    <View
      style={{
        height: height * 0.5,
        backgroundColor: "#254441",
        paddingHorizontal: 10,
        borderBottomLeftRadius: 40,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
          marginTop: 30,
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        Attendance Management System
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        NAMTES, FUOYE CHAPTER
      </Text>
      <Feather
        style={{
          alignSelf: "center",
        }}
        name="radio"
        size={150}
        color="white"
      />
    </View>
  );
};

export default Header;
