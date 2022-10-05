import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import phoneBlue from "../../assets/phone/vsmart_live_xanh.png";
import phoneBac from "../../assets/phone/vs_bac.png";
import phoneRed from "../../assets/phone/vs_red.png";
import phoneBlack from "../../assets/phone/vsmart_black_star.png";
const COLORS = [phoneBlue, phoneRed, phoneBlack, phoneBac];

const HomeScreen = ({ route, navigation }) => {
  const [color, setColor] = useState(0);
  const changeColorHandle = (id) => {
    setColor(id);
  };
  return (
    <View style={[styles.flex1]}>
      <View style={[styles.flexRow, styles.container, { height: "30%" }]}>
        <Image
          source={COLORS[color]}
          style={{ width: "33%", height: "auto" }}
        ></Image>
        <Text
          style={[
            styles.flexRow,
            styles.fontText,
            styles.fontBold,
            styles.ml1,
            { width: "70%" },
          ]}
        >
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>
      <View
        style={[
          styles.container,
          { height: "70%", backgroundColor: "rgba(196, 196, 196, 1)" },
          styles.spaceBetween,
        ]}
      >
        <Text style={styles.fontBold}>Chọn một màu bên dưới:</Text>
        <View style={styles.flexCenter}>
          <TouchableOpacity
            onPress={() => changeColorHandle(1)}
            style={[
              styles.cpnColor,
              {
                backgroundColor: "rgba(243, 13, 13, 1)",
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => changeColorHandle(2)}
            style={[
              styles.cpnColor,
              {
                backgroundColor: "rgba(0, 0, 0, 1)",
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => changeColorHandle(0)}
            style={[
              styles.cpnColor,
              {
                backgroundColor: "rgba(35, 72, 150, 1)",
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => changeColorHandle(3)}
            style={[
              styles.cpnColor,
              {
                backgroundColor: "rgba(197, 241, 251, 1)",
              },
            ]}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home", { id: color })}
          style={[
            styles.btnContainer,
            styles.flexCenter,
            { backgroundColor: "rgba(25, 82, 226, 0.58)" },
          ]}
        >
          <Text style={(styles.fontBold, styles.textWhite)}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  boxShadow: {
    boxShadow: "0 4 4 0 rgba(0, 0, 0, 0.25)",
  },
  btnLogin: {
    backgroundColor: "rgba(238, 10, 10, 1)",
    paddingVertical: 10,
    borderRadius: 10,
  },
  textWhite: { color: "#fff" },
  my1: {
    marginVertical: 20,
  },
  pt1: {
    paddingVertical: 5,
  },
  iconRight: {
    position: "absolute",
    right: 20,
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.46)",
    borderRadius: 10,
    paddingVertical: 5,
  },
  colorPrimary: {
    color: "rgba(250, 0, 0, 1)",
  },
  fontBold: {
    fontWeight: "bold",
    fontSize: 12,
  },
  fontBoldl: {
    color: "rgba(0, 0, 0, 0.58)",
  },
  mr1: {
    marginRight: 10,
  },
  ml1: {
    marginLeft: 10,
  },
  flexRow: {
    flexDirection: "row",
  },
  fontText: {
    fontSize: 10,
  },
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  flexCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  img: {
    height: "100%",
    width: "80%",
  },
  end: {
    justifyContent: "flex-end",
  },
  cpnColor: {
    height: 60,
    width: 60,
    marginVertical: 10,
  },
});

export default HomeScreen;
