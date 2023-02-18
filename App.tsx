import { StyleSheet, Text, View, StatusBar } from "react-native";
import {Provider} from 'react-redux'
import HomeScreen from "./src/screens/HomeScreen";
import Bottom from "./src/Components/Bottom";
import { store } from "./src/redux/store";
import {useEffect, useState} from 'react'
import RNFS from 'react-native-fs';
export default function App() {

  return (
    <Provider store={store}>
    <View>
      <HomeScreen />
   
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
