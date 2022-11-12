import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import phoneBlue from "../../assets/phone/vsmart_live_xanh.png";
import phoneBac from "../../assets/phone/vs_bac.png";
import phoneRed from "../../assets/phone/vs_red.png";
import phoneBlack from "../../assets/phone/vsmart_black_star.png";
const COLORS = [phoneBlue, phoneRed, phoneBlack, phoneBac];
const HomeScreen = ({ route, navigation }) => {
  const [color, setColor] = useState(0);
  useEffect(() => {
    if (route.params) {
      setColor(route.params.id);
    }
  });
  return (
    <View style={[styles.flex1, styles.container]}>
      <View style={[styles.flex1, styles.flexCenter]}>
        <Image style={[styles.flex1, styles.img]} source={COLORS[color]} />
      </View>
      <View style={[styles.flex1]}>
        <View style={[styles.flex2]}>
          <Text style={[styles.fontText, styles.pt1]}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
          <View
            style={[
              styles.flexRow,
              styles.flexCenter,
              ,
              styles.spaceBetween,
              styles.pt1,
            ]}
          >
            <View style={[styles.flexRow, styles.mr1]}>
              <Icon name="star" size={30} color="rgba(224, 228, 26, 1)" />
              <Icon name="star" size={30} color="rgba(224, 228, 26, 1)" />
              <Icon name="star" size={30} color="rgba(224, 228, 26, 1)" />
              <Icon name="star" size={30} color="rgba(224, 228, 26, 1)" />
              <Icon name="star" size={30} color="rgba(224, 228, 26, 1)" />
            </View>
            <Text style={[styles.fontText]}>(Xem 828 đánh giá)</Text>
          </View>
          <View
            style={[
              styles.flexRow,
              styles.flexCenter,
              styles.spaceBetween,
              styles.pt1,
            ]}
          >
            <Text style={styles.fontBold}>1.790.000 đ</Text>
            <Text style={[styles.fontBold, styles.fontBoldl]}>1.790.000 đ</Text>
          </View>
          <View
            style={[
              styles.flexRow,
              styles.flexCenter,
              styles.spaceBetween,
              styles.pt1,
            ]}
          >
            <Text
              style={[styles.fontBold, styles.colorPrimary, styles.fontText]}
            >
              Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
            <Icon
              name="question-circle-o"
              size={20}
              color="rgba(0, 0, 0, 0.78)"
              style={styles.mr1}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.flexRow,
              styles.flexCenter,
              styles.btnContainer,
              // styles.pt1,
              styles.my1,
            ]}
            onPress={() =>
              navigation.navigate("PhoneDetail", {
                id: color,
              })
            }
          >
            <Text>4 MÀU-CHỌN MÀU</Text>
            <Icon style={[styles.iconRight]} name="angle-right" size={30} />
          </TouchableOpacity>
        </View>
        <View style={[styles.flex1, styles.end]}>
          <TouchableOpacity
            style={[styles.btnLogin, styles.flexCenter, styles.boxShadow]}
            // onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.textWhite, styles.fontBold]}>CHỌN MUA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default HomeScreen;
