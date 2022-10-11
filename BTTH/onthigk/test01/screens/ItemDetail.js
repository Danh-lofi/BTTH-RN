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
  const [isEdit, setIsEdit] = useState(false);
  const [itemUpdate, setItemUpdate] = useState(route.params.item);
  const refInput = useRef();
  const sendItemDeleteHandle = (item) => {
    navigation.navigate("Home", { content: item });
  };
  const changeElement = () => {
    setIsEdit(!isEdit);
    refInput.current.focus();
  };

  const selectActionHandle = (item) => {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Delete",
        onPress: () => sendItemDeleteHandle(item),
        style: "cancel",
      },
      { text: "Edit", onPress: () => changeElement() },
    ]);
  };
  const setItemUpdateHandle = (text) => {
    setItemUpdate(text);
  };

  const sendItemUpdate = () => {
    navigation.navigate("Home", { itemUpdate, itemPre: route.params.item });
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
        onPress={() => (isEdit ? "" : selectActionHandle(route.params.item))}
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
            {route.params.item}
          </Text>
        ) : (
          <TextInput
            ref={refInput}
            value={itemUpdate}
            onChangeText={(text) => setItemUpdateHandle(text)}
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
