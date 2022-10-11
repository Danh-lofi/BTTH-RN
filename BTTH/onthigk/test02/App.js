// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import ItemDetailScreen from "./screens/ItemDetail";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ content: false, itemUpdate: false }}
        />
        <Stack.Screen name="Detail" component={ItemDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
