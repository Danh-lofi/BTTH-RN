import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

const Cau1 = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 2000,
    }).start();
  };
  useEffect(() => {
    fadeIn();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#333",
      }}
    >
      <Animated.View
        style={[
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Welcome to Animation React Native!
        </Text>
      </Animated.View>
    </View>
  );
};

export default Cau1;
