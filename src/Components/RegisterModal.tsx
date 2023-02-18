import {
  View,
  Pressable,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import {
  updateModalState,
  updateName,
  updateMatricNo,
  updateCardDetails,
  updateLevel,
  uploadStudents,
  setTodefault,
} from "../redux/modal";
import { useSelector } from "react-redux";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { Form } from "../models";
const RegisterModal = () => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState(null);
  const studentDetail = useAppSelector((state) => state.modalState.details);
  console.log(studentDetail);
  const loading = useAppSelector((state) => state.modalState.loading);
  const visible = useAppSelector((state) => state.modalState.Registerstate);
  const name = useAppSelector((state) => state.modalState.details.name);
  const cardDet = useAppSelector((state) => state.modalState.details.tagId);
  const matricNo = useAppSelector((state) => state.modalState.details.matricNo);
  const level = useAppSelector((state) => state.modalState.details.level);
  const height = Dimensions.get("window").height;
  const disable = () => {
    if (
      !studentDetail.level ||
      !studentDetail.matricNo ||
      !studentDetail.name ||
      !studentDetail.tagId
    ) {
      console.log("here");
      return true;
    } else {
      console.log("free");
      return false;
    }
  };

  console.log(status);
  return (
    <Modal
      swipeDirection={"down"}
      isVisible={visible}
      onBackButtonPress={() => {
        dispatch(updateModalState());
      }}
      onBackdropPress={() => {
        dispatch(updateModalState());
      }}
      onSwipeComplete={() => {
        dispatch(updateModalState());
      }}
      animationIn="bounceInUp"
      animationOut={"bounceOutDown"}
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      style={styles.modal}
    >
      <KeyboardAvoidingView behavior="position">
        <ScrollView style={styles.modalContent}>
          <View>
            <View style={styles.barIcon} />
            <View
              style={{
                height: height * 0.75,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Enter your name
              </Text>
              <TextInput
                placeholder="Obiwale Ayomide Moses"
                placeholderTextColor={"#FFFFFF70"}
                style={{
                  color: "white",
                  height: 50,
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 10,
                }}
                cursorColor={"white"}
                onChangeText={(text) => {
                  dispatch(updateName(text));
                }}
                value={name}
              />
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                }}
              >
                Enter Card details
              </Text>
              <TextInput
                style={{
                  height: 50,
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 10,
                  color: "white",
                }}
                placeholder="98 BC 87 5E"
                placeholderTextColor={"#FFFFFF70"}
                cursorColor={"white"}
                onChangeText={(text) => {
                  dispatch(updateCardDetails(text));
                }}
                value={cardDet}
              />
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                }}
              >
                Enter Matric No
              </Text>
              <TextInput
                style={{
                  color: "white",
                  height: 50,
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 10,
                }}
                placeholder="MTE/2018/1143"
                placeholderTextColor={"#FFFFFF70"}
                cursorColor={"white"}
                onChangeText={(text) => {
                  dispatch(updateMatricNo(text));
                }}
                value={matricNo}
              />
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                }}
              >
                Enter Level
              </Text>
              <TextInput
                style={{
                  color: "white",
                  height: 50,
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 10,
                }}
                placeholder="400"
                placeholderTextColor={"#FFFFFF70"}
                cursorColor={"white"}
                onChangeText={(text) => {
                  dispatch(updateLevel(text));
                }}
                value={level}
              />
              <TouchableOpacity
                disabled={disable()}
                onPress={async () => {
                  await dispatch(uploadStudents(studentDetail));
                  dispatch(setTodefault());
                  dispatch(updateModalState());
                }}
                style={{
                  top: height * 0.2,
                  height: 40,
                  width: 100,
                  alignSelf: "center",
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                {!loading ? (
                  <Text
                    style={{
                      color: "#254441",
                    }}
                  >
                    Click to Submit
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: "#254441",
                    }}
                  >
                    Loading...
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default RegisterModal;
const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#254441",
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: "45%",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  barIcon: {
    width: 60,
    height: 5,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 3,
  },
});
