import React, { useState } from "react";
import { View, TextInput, Button, Text, FlatList, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
const Stack = createStackNavigator();
function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,

          title: "Home",
          headerStyle: {
            backgroundColor: "rgba(31, 41, 61, 0.7)",
          },
          headerTintColor: "#FFFF",
          headerTitleStyle: {
            textAlign: "center",
          },
        }}
        component={HomeScreen}
        name="HomeScreen"
      />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  );
}
export default function App() {
  return <RootNavigator />;
}
