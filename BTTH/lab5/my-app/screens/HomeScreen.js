import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ marginVertical: 5 }}>
        <Button title="Go to 1" onPress={() => navigation.navigate("Cau1")} />
      </View>
      <View style={{ marginVertical: 5 }}>
        <Button title="Go to 2" onPress={() => navigation.navigate("Cau2")} />
      </View>

      <View style={{ marginVertical: 5 }}>
        <Button
          style={{ marginBottom: 30 }}
          title="Go to 3"
          onPress={() => navigation.navigate("Cau3")}
        />
      </View>
      <View style={{ marginVertical: 5 }}>
        <Button title="Go to 4" onPress={() => navigation.navigate("Cau4")} />
      </View>
      <View style={{ marginVertical: 5 }}>
        <Button title="Go to 5" onPress={() => navigation.navigate("Cau5")} />
      </View>
    </View>
  );
};

export default HomeScreen;
