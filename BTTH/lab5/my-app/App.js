// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cau1 from "./screens/Cau1";
import Cau2 from "./screens/Cau2";
import Cau3 from "./screens/Cau3";
import Cau4 from "./screens/Cau4";
import Cau5 from "./screens/Cau5";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cau1" component={Cau1} />
        <Stack.Screen name="Cau2" component={Cau2} />
        <Stack.Screen name="Cau3" component={Cau3} />
        <Stack.Screen name="Cau4" component={Cau4} />
        <Stack.Screen name="Cau5" component={Cau5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
