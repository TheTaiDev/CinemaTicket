import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { Component, useContext, useLayoutEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MoviesCards } from "../Context";
import { useRoute } from "@react-navigation/native";

export default function TheatreScreen({ navigation }) {
  const route = useRoute();
  const { seats, setSeats } = useContext(MoviesCards);
  const showSeate = () => {
    return seats.map((seat, index) => (
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          lineHeight: 17,
          color: "#FFFFFF",
        }}
      >
        {seat}
      </Text>
    ));
  };
  const onSeatSelect = (item) => {
    const seatSeSelected = seats.find((seat) => seat === item);

    if (seatSeSelected) {
      setSeats(seats.filter((seat) => seat !== item));
    } else {
      setSeats([...seats, item]);
    }
  };

  const price = 20;
  const noOfSeats = seats.length;
  const total = seats.length > 0 ? price + noOfSeats * 240 + "$" : 0;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "left",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              lineHeight: 20,
              color: "#FFFFFF",
            }}
          >
            {route.params.mall}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              lineHeight: 20,
              color: "#b9b9b9",
              textAlign: "center",
            }}
          >
            {route.params.name}
          </Text>
        </View>
      ),
    });
  });

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: "rgba(31, 41, 61, 0.7)",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          lineHeight: 20,
          paddingTop: 20,
          color: "#FFFFFF",
        }}
      >
        {" "}
        {route.params.timeSelected}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          fontWeight: "400",
          paddingTop: 10,

          lineHeight: 20,
          color: "#b9b9b9",
        }}
      >
        {" "}
        CLASSIC (240)
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      />
      <FlatList
        numColumns={7}
        data={route.params.tableSeats}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onSeatSelect(item)}
            style={{
              margin: 10,
              borderColor: "gray",
              borderWidth: 1,
              // padding: 6,
              borderRadius: 5,
            }}
          >
            {seats.includes(item) ? (
              <Text
                style={{
                  color: "#FFFF",
                  fontSize: 16,
                  fontWeight: "500",
                  padding: 8,

                  backgroundColor: "#ffc40c",
                }}
              >
                {item}
              </Text>
            ) : (
              <Text
                style={{
                  padding: 8,

                  color: "#FFFF",
                  fontSize: 16,

                  fontWeight: "500",
                }}
              >
                {item}
              </Text>
            )}
          </Pressable>
        )}
      />

      <View
        style={{
          flexDirection: "row",
          gap: 20,
          justifyContent: "space-around",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FontAwesome name="square" size={25} color={"#ffc40c"} />
          <Text
            style={{
              color: "#FFFF",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Selected
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FontAwesome name="square" size={25} color={"#FFFF"} />
          <Text
            style={{
              color: "#FFFF",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Vacant
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FontAwesome name="square" size={25} color={"#989898"} />
          <Text
            style={{
              color: "#FFFF",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Occipied
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              marginBottom: 4,
              fontWeight: "500",
              color: "#FFFF",
            }}
          >
            Show end tine aooriax 6:51
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {seats.length > 0 ? (
              showSeate()
            ) : (
              <Text
                style={{
                  fontSize: 18,
                  color: "gray",
                }}
              >
                No seats selected
              </Text>
            )}
          </View>
        </View>
      </View>
      <Pressable
        style={{
          paddingHorizontal: 20,
          borderRadius: 8,
          width: "100%",
          height: 40,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "rgba(255, 128, 54, 1)",
          marginBottom: 50,
        }}
      >
        {seats.length > 0 ? (
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              lineHeight: 17,
              color: "#FFFFFF",
            }}
          >
            {seats.length} seat's selected
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              lineHeight: 17,
              color: "#FFFFFF",
            }}
          >
            No ticket
          </Text>
        )}
        <Pressable>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              lineHeight: 17,
              color: "#FFFFFF",
            }}
          >
            PAY {total}
          </Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
}
