import React, { useEffect, useRef } from "react";
import { Animated, Button, Dimensions, Text, View } from "react-native";

const Cau5 = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const translatemAnim = useRef(new Animated.Value(0)).current;
  const nguocmAnim = useRef(new Animated.Value(width - 40)).current;
  const upmAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fade1Anim = useRef(new Animated.Value(0)).current;
  const fade2Anim = useRef(new Animated.Value(0)).current;
  const GoRight = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(translatemAnim, {
        useNativeDriver: true,
        toValue: width - 40,
        duration: 2000,
      }),
      Animated.timing(fade1Anim, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(nguocmAnim, {
        useNativeDriver: true,
        toValue: 0,
        duration: 2000,
      }),
      Animated.timing(fade2Anim, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1000,
      }),
      Animated.timing(upmAnim, {
        useNativeDriver: true,
        toValue: -(height / 2 - 40),
        duration: 2000,
      }),
    ]).start();
  };
  useEffect(() => {
    GoRight();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#333",
        position: "relative",
      }}
    >
      <Animated.View
        style={[
          {
            transform: [{ translateX: translatemAnim }],
            opacity: fadeAnim,
            position: "absolute",
            top: "50%",
          },
        ]}
      >
        <View
          style={{
            backgroundColor: "red",
            height: 40,
            width: 40,
          }}
        ></View>
      </Animated.View>

      <Animated.View
        style={[
          {
            transform: [{ translateX: nguocmAnim }],
            opacity: fade1Anim,
            position: "absolute",
            top: "50%",
          },
        ]}
      >
        <View
          style={{
            backgroundColor: "green",
            height: 40,
            width: 40,
          }}
        ></View>
      </Animated.View>
      <Animated.View
        style={[
          {
            transform: [{ translateY: upmAnim }],
            opacity: fade2Anim,
            position: "absolute",
            top: "50%",
          },
        ]}
      >
        <View
          style={{
            backgroundColor: "blue",
            height: 40,
            width: 40,
          }}
        ></View>
      </Animated.View>
    </View>
  );
};
export default Cau5;
