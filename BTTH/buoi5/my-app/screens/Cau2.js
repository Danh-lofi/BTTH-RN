import React, { useRef } from "react";
import { Animated, Button, Dimensions, Text, View } from "react-native";

const Cau2 = () => {
  const translatemAnim = useRef(new Animated.Value(0)).current;
  const width = Dimensions.get("window").width;
  const GoRight = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(translatemAnim, {
      useNativeDriver: true,
      toValue: width - 40,
      duration: 2000,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#333",
      }}
    >
      <Animated.View
        style={[
          {
            transform: [{ translateX: translatemAnim }],
          },
        ]}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: 40,
            width: 40,
          }}
        ></View>
      </Animated.View>
      <Button title="Start" onPress={GoRight} />
    </View>
  );
};
export default Cau2;
