import { useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import malls from "../data/malls";
export default function MovieAboutScreen({ navigation }) {
  //
  const [onSelectedDateChange, setSelectedDate] = useState("");
  const [seatsData, setSeatsData] = useState([]);
  //
  const mallsData = malls;
  const [mall, setMall] = useState([]);
  const [showTimes, setShowTimes] = useState([]);
  console.log(mall, "select");
  // Thanh điều hướng navigation
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
            {route.params.name}
          </Text>
        </View>
      ),
    });
  });
  //
  const route = useRoute();
  // const { name } = route.params;

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: "rgba(31, 41, 61, 0.7)",
      }}
    >
      <View>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date("2023-05-24")}
          endDate={new Date("2023-05-31")}
          initialSelectedDate={new Date("2020-08-22")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />
      </View>
      {mallsData.map((item, index) => {
        return (
          <Pressable
            onPress={() => {
              setMall(item.name);
              setSeatsData(item.tableData);
            }}
            key={index}
            style={{ margin: 10 }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#FFFF",
              }}
            >
              {item.name}
            </Text>
            {mall.includes(item.name) ? (
              <FlatList
                numColumns={3}
                data={item.showtimes}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() =>
                      navigation.navigate("TheatreScreen", {
                        mall: mall,
                        name: route.params.name,
                        timeSelected: item,
                        tableSeats: seatsData,
                      })
                    }
                    style={{
                      borderColor: "gray",
                      padding: 10,
                      borderWidth: 1,
                      margin: 10,
                      padding: 5,
                      width: 90,
                      borderRadius: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#FFFF",
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      {item}
                    </Text>
                  </Pressable>
                )}
              />
            ) : null}
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
