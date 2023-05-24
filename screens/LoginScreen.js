import * as React from "react";
import { Button } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, TextInput, Text, FlatList, Image } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(31, 41, 61, 0.7)",
      }}
    >
      <View
        style={{
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            lineHeight: 29,
            fontWeight: 700,
            color: "#FFFFFF",
          }}
        >
          Login
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 20,
            fontWeight: 400,
            color: "#a6afed",
          }}
        >
          Access to purchased tickets
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <TextInput
          placeholderTextColor="#a6afed"
          placeholder="Phone number"
          style={{
            width: 343,
            fontSize: 16,
            lineHeight: 24,
            color: "#a6afed",
            height: 56,
            padding: 14,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "rgba(109, 158, 255, 0.1)",
            borderStyle: "solid",
          }}
        />
        <Button
          title="Continue"
          onPress={() => navigation.navigate("SeatsMap")}
          titleStyle={{ fontWeight: "500" }}
          buttonStyle={{
            backgroundColor: "rgba(255, 128, 54, 1)",
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 10,
          }}
          containerStyle={{
            width: 343,
            height: 56,
          }}
        />
      </View>
    </View>
  );
}
