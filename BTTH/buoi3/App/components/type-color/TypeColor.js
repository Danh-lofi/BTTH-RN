import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TypeColor = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={{ color: "red" }}>{props.color}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     // width:
  //   },
  //   default: {},
});
export default TypeColor;
