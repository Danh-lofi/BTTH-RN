import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import eye from "../../assets/eye.png";
import iconZalo from "../../assets/iconZalo.png";
import iconGG from "../../assets/iconGG.png";
import iconFB from "../../assets/iconFB.png";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.textCenter, styles.fontBold]}>
        REGISTER
      </Text>
      <View style={styles.flex2}>
        <TextInput
          style={[styles.input, styles.flex1]}
          placeholder={"Name"}
          // onChangeText={onChangeText}
          // value={text}
        />
        <TextInput
          style={[styles.input, styles.flex1]}
          placeholder={"Phone"}
          // onChangeText={onChangeText}
          // value={text}
        />
        <TextInput
          style={[styles.input, styles.flex1]}
          placeholder={"Email"}
          // onChangeText={onChangeText}
          // value={text}
        />

        <TextInput
          style={[styles.input, styles.flex1]}
          placeholder={"Password"}
          textContentType={"password"}
          secureTextEntry={true}
          inlineImageLeft="../../assets/eye.png"
          // onChangeText={onChangeNumber}
          // value={number}
          // placeholder="useless placeholder"
          // keyboardType="numeric"
        />
        <Image source={eye} style={[styles.imgEye]} />
        <TextInput
          style={[styles.input, styles.flex1]}
          placeholder={"Birthday"}
          // onChangeText={onChangeText}
          // value={text}
        />
      </View>
      <View style={styles.flex1}>
        <TouchableOpacity
          style={[styles.btnLogin, styles.flexCenter]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.textLogin, styles.fontBold]}>REGISTER</Text>
        </TouchableOpacity>
        <View style={[styles.pt20]}>
          <Text style={[styles.textCenter, styles.contentLogin, styles.pt5]}>
            When you agree to terms and conditions
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(59, 179, 92, 0.2)",
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flexCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  fontBold: {
    fontWeight: "bold",
  },
  title: {
    color: "#000",
    fontSize: 20,
    paddingVertical: 40,
  },
  input: {
    backgroundColor: "rgba(242, 242, 242, .8)",
    paddingHorizontal: 20,
    // paddingVertical: 30,
    height: 60,
    marginBottom: 30,
    color: "#000",
    fontSize: 14,
  },
  imgEye: {
    position: "absolute",
    bottom: 30,
    right: 20,
  },

  btnLogin: {
    backgroundColor: "rgba(229, 57, 53, 1)",
    paddingVertical: 10,
  },
  textLogin: {
    color: "#fff",
  },
  contentLogin: {
    fontSize: 10,
  },
  pt20: {
    paddingVertical: 20,
  },
  pt5: {
    paddingVertical: 5,
  },
  textLink: {
    color: "rgba(93, 37, 250, 1)",
  },
  containerSocial: {
    height: 60,
  },
  containerSocialFacbook: {
    backgroundColor: "rgba(37, 71, 155, 1)",
  },
  containerSocialZalo: {
    backgroundColor: "rgba(15, 142, 224, 1)",
  },
  containerSocialGoogle: {
    backgroundColor: "transparent",
    borderColor: "blue",
    borderWidth: 2,
  },
  height50: {
    height: 100,
  },
  imgSocials: {},
});
export default RegisterScreen;
