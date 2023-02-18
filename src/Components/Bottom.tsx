import { View, Text, Dimensions, Pressable } from "react-native";
import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { updateModalState } from "../redux/modal";
import Entypo from "@expo/vector-icons/Entypo";
import { download } from "../utils/DownloadAttendance";
const Bottom = () => {
  const dispatch=useAppDispatch()
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  return (
    <View
      style={{
        height: height * 0.5,
        
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#254441",
          fontSize: 20,
          flex:1/2,
          marginTop:20
        }}
      >
        Download class Attendance
      </Text>
      <View
        style={{
          alignItems: "center",
          flex:1
        }}
      >
        <Entypo
          name="download"
          size={50}
          color="#254441"
          onPress={()=>download()}
        />
        <Text
          style={{
            color: "#254441",
            fontSize: 15,
            marginTop: 3,
            textAlign: "center",
          }}
        >
          Click to download
        </Text>
      </View>
      <Pressable 
      onPress={()=>{
        dispatch(updateModalState())
      }}
      style={{
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        width:150,
        height:50,
        backgroundColor:"#254441"
      }}>
      <Text style={{
        color: "white",
        fontSize: 15,
      }}>Register Student</Text>
      </Pressable>
      
    </View>
  );
};

export default Bottom;
