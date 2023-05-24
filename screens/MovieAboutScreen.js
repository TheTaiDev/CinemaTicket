import { useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function MovieAboutScreen({ navigation }) {
  // Thanh điều hướng navigation
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "left",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              paddingLeft: 10,
            }}
          ></View>
        </View>
      ),
      headerLeft: () => (
        <View style={{ marginLeft: 16, flexDirection: "row", marginRight: 20 }}>
          <Image
            style={{
              height: 48,
              width: 48,
            }}
            source={require("../assets/image/logo.png")}
          />
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 35,
            }}
          >
            <Icon name="location" size={25} color={"#637394"} />
            <Text
              style={{
                paddingLeft: 5,
                fontSize: 14,
                color: "#FFFFFF",
                fontWeight: "bold",
                lineHeight: 17,
              }}
            >
              Nur-Sultan
            </Text>
          </View>
        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", marginRight: 20 }}>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Icon name="language" size={25} color={"#637394"} />
            <Text
              style={{
                paddingRight: 18,
                paddingLeft: 5,

                fontSize: 14,
                color: "#FFFFFF",
                fontWeight: "bold",
                lineHeight: 17,
              }}
            >
              Eng
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={{
              borderRadius: 8,
              width: 70,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255, 128, 54, 1)",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: 17,
                color: "#FFFFFF",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      ),
    });
  });
  //
  const route = useRoute();
  // const { name } = route.params;

  return (
    <View
      style={{
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: "rgba(31, 41, 61, 0.7)",
      }}
    >
      <Text>{route.params.name}</Text>
    </View>
  );
}
