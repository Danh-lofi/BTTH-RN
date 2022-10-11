import React, { useRef, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ItemDetailScreen = ({ route, navigation }) => {
  const item = route.params.item;

  const [isEdit, setIsEdit] = useState(false);
  const [contentUpdate, setContentUpdate] = useState(item.content);

  const refInput = useRef();

  // Truyền id item cần xóa về Home
  const sendItemDeleteHandle = (id) => {
    navigation.navigate("Home", { id });
  };

  const changeElement = () => {
    // Gọi khi click vào edit
    // Set lại để chuyển sáng edit edit
    setIsEdit(!isEdit);
    refInput.current.focus();
  };

  const selectActionHandle = (item) => {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Delete",
        onPress: () => sendItemDeleteHandle(item.id),
        style: "cancel",
      },
      { text: "Edit", onPress: () => changeElement() },
    ]);
  };

  const sendItemUpdate = () => {
    // Gửi lại id và content update về bên Home
    navigation.navigate("Home", { contentUpdate, idUpdate: item.id });
  };

  return (
    <View
      style={[
        styles.container,
        {
          flex: 1,
        },
      ]}
    >
      <TouchableOpacity
        style={[
          {
            height: "100%",
            width: "100%",
          },
        ]}
        onPress={() => (isEdit ? "" : selectActionHandle(item))}
      >
        {!isEdit ? (
          <Text
            style={[
              styles.textWhite,
              {
                height: "100%",
                width: "100%",
              },
            ]}
          >
            {item.content}
          </Text>
        ) : (
          <TextInput
            ref={refInput}
            value={contentUpdate}
            onChangeText={setContentUpdate}
            style={[
              styles.textWhite,
              {
                height: "100%",
                width: "100%",
              },
            ]}
          ></TextInput>
        )}
      </TouchableOpacity>
      {isEdit ? (
        <TouchableOpacity
          onPress={sendItemUpdate}
          style={[
            styles.pd,
            styles.textCenter,
            {
              backgroundColor: "#61dafb",
              width: "100%",
              height: 40,
              borderRadius: 30,
              marginBottom: 20,
            },
          ]}
        >
          <Text style={[styles.textWhite]}>Edit</Text>
        </TouchableOpacity>
      ) : (
        ""
      )}
    </View>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  fontBold: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  textCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  textWhite: {
    color: "#fff",
  },
  pd: {
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
});
