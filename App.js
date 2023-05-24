import React, { useState } from "react";
import { View, TextInput, Button, Text, FlatList, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SeatsMap from "./screens/SeatMap/SeatsMap";
import MovieAboutScreen from "./screens/MovieAboutScreen";
import { MoviesContext } from "./Context";
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
      <Stack.Screen
        options={{
          headerShown: true,

          title: "Login",
          headerStyle: {
            backgroundColor: "rgba(31, 41, 61, 0.7)",
          },
          headerTintColor: "#FFFF",
          headerTitleStyle: {
            textAlign: "center",
          },
        }}
        component={LoginScreen}
        name="LoginScreen"
      />
      <Stack.Screen
        options={{
          headerShown: true,

          title: "Set",
          headerStyle: {
            backgroundColor: "rgba(31, 41, 61, 0.7)",
          },
          headerTintColor: "#FFFF",
          headerTitleStyle: {
            textAlign: "center",
          },
        }}
        component={SeatsMap}
        name="SeatsMap"
      />

      <Stack.Screen
        options={{
          headerShown: true,

          title: "Movie About",
          headerStyle: {
            backgroundColor: "rgba(31, 41, 61, 0.7)",
          },
          headerTintColor: "#FFFF",
          headerTitleStyle: {
            textAlign: "center",
          },
        }}
        component={MovieAboutScreen}
        name="MovieAboutScreen"
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
  return (
    <MoviesContext>
      <RootNavigator />
    </MoviesContext>
  );
}
