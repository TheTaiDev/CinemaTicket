import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const SeatMap = () => {
  const [seatsData, setSeatsData] = useState([
    { id: 1, seatNumber: "A1", status: "available" },
    { id: 2, seatNumber: "A2", status: "available" },
    { id: 3, seatNumber: "A3", status: "occupied" },
    { id: 4, seatNumber: "A4", status: "available" },
    { id: 5, seatNumber: "A4", status: "available" },
    { id: 6, seatNumber: "A4", status: "available" },
    { id: 7, seatNumber: "A4", status: "available" },
    { id: 8, seatNumber: "A4", status: "available" },
    { id: 9, seatNumber: "A4", status: "available" },
    { id: 10, seatNumber: "A4", status: "available" },
    { id: 11, seatNumber: "A4", status: "available" },
    { id: 12, seatNumber: "A4", status: "available" },
    { id: 13, seatNumber: "A4", status: "available" },
    { id: 14, seatNumber: "A4", status: "available" },
    { id: 15, seatNumber: "A4", status: "available" },
    { id: 16, seatNumber: "A4", status: "available" },

    // Thêm các dữ liệu chỗ ngồi khác
  ]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatPress = (seatId) => {
    setSeatsData((prevSeatsData) =>
      prevSeatsData.map((seat) =>
        seat.id === seatId
          ? {
              ...seat,
              status: seat.status === "available" ? "selected" : "available",
            }
          : seat
      )
    );

    setSelectedSeats((prevSelectedSeats) => {
      const seatIndex = prevSelectedSeats.findIndex(
        (seat) => seat.id === seatId
      );

      if (seatIndex !== -1) {
        return prevSelectedSeats.filter((seat) => seat.id !== seatId);
      } else {
        const selectedSeat = seatsData.find((seat) => seat.id === seatId);
        return [...prevSelectedSeats, selectedSeat];
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.screenText}>Screen</Text>
      </View>
      <View style={styles.seatMap}>
        {seatsData.map((seat) => (
          <TouchableOpacity
            key={seat.id}
            style={[
              styles.seat,
              seat.status === "occupied" && styles.occupiedSeat,
              seat.status === "selected" && styles.selectedSeat,
            ]}
            onPress={() => handleSeatPress(seat.id)}
            disabled={seat.status === "occupied"}
          >
            <Text style={styles.seatNumber}>{seat.seatNumber}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.cartContainer}>
        <Text style={styles.cartText}>Cart:</Text>
        {selectedSeats.map((seat) => (
          <Text key={seat.id} style={styles.cartSeatNumber}>
            {seat.seatNumber}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    width: "80%",
    height: 40,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  screenText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  seatMap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  seat: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  occupiedSeat: {
    backgroundColor: "red",
  },
  selectedSeat: {
    backgroundColor: "blue",
  },
  seatNumber: {
    color: "white",
    fontWeight: "bold",
  },
  cartContainer: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  cartText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartSeatNumber: {
    marginLeft: 5,
  },
});

export default SeatMap;
