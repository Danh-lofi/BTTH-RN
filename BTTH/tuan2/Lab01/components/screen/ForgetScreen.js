import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native";
const ForgetScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#c4c4c4", "#28F7AC"]}
        style={styles.linearGradient}
      >
        <View style={styles.circleContainer}>
          <View style={styles.circle} />
        </View>
        <View style={styles.sloganContainer}>
          <Text style={styles.slogan}>FORGET {"\n"} PASSWORD</Text>
          <Text style={styles.sloganContent}>
            Provide your account's email for which you want to reset your
            password
          </Text>
        </View>

        <View style={styles.signContainer}>
          <TextInput
            style={[styles.input]}
            placeholder={"Email"}
            // onChangeText={onChangeText}
            // value={text}
          />
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.btnSign}
              onPress={() => navigation.navigate("Verification")}
            >
              <Text style={[styles.textSign]}>NEXT</Text>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    marginTop: 40,
    width: 150,
    height: 150,
    padding: 15,
    borderRadius: 150 / 2,
    backgroundColor: "transparent",
    borderWidth: 15,
    borderColor: "#000",
  },
  sloganContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slogan: {
    marginTop: 40,
    textAlign: "center",
    width: 300,
    lineHeight: 30,
    color: "#000",
    fontWeight: "bold",
    fontSize: 22,
  },
  sloganContent: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    width: 280,
    lineHeight: 15,
    color: "#000",
    fontSize: 10,
  },
  signContainer: {
    flex: 1,
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
    // paddingVertical: 30,
    width: 250,
    height: 60,
    marginBottom: 30,
    color: "#000",
    fontSize: 14,
  },
  flex1: {
    flex: 1,
  },
});
export default ForgetScreen;
