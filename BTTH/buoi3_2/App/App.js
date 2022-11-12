import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import book from "./assets/book.png";
export default function App() {
  const [number, setNumber] = useState(1);
  const price = 141800;
  const ascNumberHandle = () => {
    setNumber((number) => number + 1);
  };
  const desNumberHandle = () => {
    if (number == 0) {
      return;
    }
    setNumber((number) => number - 1);
  };
  return (
    <View style={[styles.container, styles.flex1]}>
      <View style={[styles.flex1]}>
        <View style={(styles.flex2, styles.px)}>
          <View style={styles.viewInfo}>
            <Image source={book} style={styles.viewInfoImage} />
            <View style={styles.viewInfoText}>
              <Text style={[styles.textS, styles.bold, styles.my1]}>
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text style={[styles.textS, styles.bold, styles.my1]}>
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text
                style={[styles.textX, styles.bold, styles.my1, styles.textRed]}
              >
                {price} đ
              </Text>
              <Text style={[styles.textS, styles.bold, styles.my1]}>
                {price} đ
              </Text>
              <View style={[styles.viewAction, styles.row]}>
                <View style={[styles.row, styles.center]}>
                  <Button title="-" onPress={desNumberHandle}></Button>
                  <Text style={[styles.mx1]}>{number}</Text>
                  <Button title="+" onPress={ascNumberHandle}></Button>
                </View>
                <Text style={[styles.textS, styles.bold, styles.textBlue]}>
                  Mua sau
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.row, styles.viewAction, styles.my2]}>
            <Text style={[styles.textS, styles.bold, styles.textBlack]}>
              Mã giảm giá đã lưu
            </Text>
            <Text style={[styles.textS, styles.bold, styles.textBlue]}>
              Xem tại đây
            </Text>
          </View>
          <View style={[styles.row, styles.viewAction, styles.my2]}>
            <View style={[styles.viewVoucher, styles.row, styles.center]}>
              <View style={[styles.backgroundVoucher]}></View>
              <Text style={[styles.textX, styles.bold]}>Mã giảm giá</Text>
            </View>
            <Button title={"Áp dụng"} style={styles.buttonVoucher} />
          </View>
        </View>
        <View style={[styles.viewSecondary, styles.flex1]}>
          <View style={[styles.viewSecondaryWrap, styles.row]}>
            <Text style={[styles.textS, styles.bold, styles.viewAction]}>
              Phiếu quà tặng Tiki/Got it?
            </Text>
            <Text
              style={[styles.textS, styles.bold, styles.textBlue, styles.mx1]}
            >
              Nhập tại đây?
            </Text>
          </View>
          <View
            style={[styles.viewSecondaryWrap, styles.row, styles.viewAction]}
          >
            <Text style={[styles.textX, styles.bold, styles.textBlack]}>
              Tạm tính
            </Text>
            <Text style={[styles.textX, styles.bold, styles.textRed]}>
              {price * number}
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.viewEnd, styles.mx1]}>
        <TouchableOpacity style={[styles.btn]}>
          <Text style={[styles.textX, styles.bold, styles.textWhite]}>
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(229, 57, 53, 1)",
    padding: 10,
  },
  textWhite: {
    color: "#fff",
  },
  viewEnd: {
    paddingTop: 20,
  },
  viewSecondaryWrap: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  viewSecondary: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 1)",
  },

  backgroundVoucher: {
    height: 20,
    width: 40,
    marginRight: 10,
    backgroundColor: "rgba(242, 221, 27, 1)",
  },
  viewVoucher: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: "rgba(128, 128, 128, 1)",
  },
  mx1: {
    marginHorizontal: 10,
  },
  center: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  viewAction: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewInfoText: {
    flexBasis: "60%",
    marginLeft: 20,
  },
  viewInfoImage: {
    flexBasis: "40%",
    height: "auto",
    objectFit: "contain",
  },
  my1: {
    marginVertical: 4,
  },
  my2: {
    marginVertical: 20,
  },
  container: {
    paddingVertical: 40,
  },
  bold: {
    fontWeight: "bold",
  },
  textBlack: {
    color: "#000",
  },
  textBlue: {
    color: "rgba(19, 79, 236, 1)",
  },
  textRed: {
    color: "rgba(238, 13, 13, 1)",
  },
  textS: {
    fontSize: 10,
  },
  textX: {
    fontSize: 12,
  },
  px: {
    marginHorizontal: 15,
  },
  viewInfo: {
    flexDirection: "row",
    marginRight: 20,
  },
});
