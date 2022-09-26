import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native";
const VerificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#c4c4c4", "#28F7AC"]}
        style={styles.linearGradient}
      >
        <View style={[styles.circleContainer, styles.flex1]}>
          {/* <View style={styles.circle} /> */}
          <Text style={styles.title}>CODE</Text>
        </View>
        <View style={[styles.sloganContainer, styles.flex1]}>
          <Text style={styles.slogan}>VERIFICATION</Text>
          <Text style={styles.sloganContent}>
            Enter ontime password sent on {"\n"} ++84909542135
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input]}
              // onChangeText={onChangeText}
              // value={text}
            />
            <TextInput
              style={[styles.input]}
              // onChangeText={onChangeText}
              // value={text}
            />
            <TextInput
              style={[styles.input]}
              // onChangeText={onChangeText}
              // value={text}
            />
            <TextInput
              style={[styles.input]}
              // onChangeText={onChangeText}
              // value={text}
            />
            <TextInput
              style={[styles.input]}
              // onChangeText={onChangeText}
              // value={text}
            />
            <TextInput
              style={[styles.input]}
              // onChangeText={onChangeText}
              // value={text}
            />
          </View>
        </View>

        <View style={[styles.signContainer, styles.flex1]}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.btnSign}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={[styles.textSign]}>VERIFY CODE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  circleContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sloganContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slogan: {
    // marginTop: -60,
    textAlign: "center",
    width: 300,
    lineHeight: 30,
    color: "#000",
    fontWeight: "bold",
    fontSize: 22,
  },
  sloganContent: {
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    width: 280,
    lineHeight: 15,
    color: "#000",
    fontSize: 10,
  },
  signContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  btnSign: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 15,
    paddingTop: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#E3C000",
    marginBottom: 60,
  },
  ml2: {
    marginLeft: 20,
  },
  textSign: {
    fontWeight: "bold",
  },
  textEnd: {
    marginTop: 30,
    fontWeight: "bold",
    color: "#000",
  },
  input: {
    backgroundColor: "rgba(242, 242, 242, .8)",
    paddingHorizontal: 20,
    width: 40,
    height: 40,
    color: "#000",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 50,
  },
  flex1: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#000",
  },
});
export default VerificationScreen;
