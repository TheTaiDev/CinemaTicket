import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Seat = ({ seatData, onPress }) => {
  const { seatNumber, status } = seatData;

  let seatStyle = styles.seat;

  if (status === "occupied") {
    seatStyle = [seatStyle, styles.occupiedSeat];
  } else if (status === "selected") {
    seatStyle = [seatStyle, styles.selectedSeat];
  }

  return (
    <TouchableOpacity style={seatStyle} onPress={onPress}>
      <Text style={styles.seatNumber}>{seatNumber}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default Seat;
