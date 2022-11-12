import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const HomeScreen = ({ navigation }) => {
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
          <Text style={styles.slogan}>GROW {"\n"} YOUR BUSINESS</Text>
          <Text style={styles.sloganContent}>
            We will help you to grow your business using online server
          </Text>
        </View>
        <View style={styles.signContainer}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.btnSign}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={[styles.textSign]}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnSign, styles.ml2]}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={[styles.textSign]}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textEnd}>HOW WE WORK?</Text>
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
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
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
});
export default HomeScreen;
