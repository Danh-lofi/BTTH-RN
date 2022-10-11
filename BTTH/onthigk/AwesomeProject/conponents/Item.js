import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Item = (props) => {
  const id = props.id;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        // styles.textCenter,
        {
          width: "100%",
          minHeight: 50,
          backgroundColor: "#fff",
          marginVertical: 5,
          borderRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 20,
          flexDirection: "row",
        },
      ]}
    >
      <Text
        style={[
          { fontSize: 10, marginRight: 5, color: "#61dafb", height: "100%" },
          styles.textCenter,
        ]}
      >
        {props.id + 1}
      </Text>
      <Text style={{ fontSize: 10 }}>{props.item}</Text>
    </TouchableOpacity>
  );
};

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

export default Item;
