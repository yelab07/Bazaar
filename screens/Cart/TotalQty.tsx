import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const TotalQty = () => {
  const cart = useSelector((state: { cart: any }) => state.cart.cart);

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    cart.forEach((item: { quantity: number }) => {
      totalQuantity += item.quantity;
    });

    if (totalQuantity > 99) {
      return "99+";
    } else {
      return totalQuantity;
    }
  };

  return (
    <View style={styles.qtyView}>
      <Text style={styles.totalqty}>{getTotalQuantity() || 0}</Text>
    </View>
  );
};

export default TotalQty;

const styles = StyleSheet.create({
  totalqty: {
    color: "white",
    width: 20,
    height: 20,
    backgroundColor: "#814e66",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 9,
    paddingTop: 3,
  },
  qtyView: {
    marginLeft: 39,
    marginBottom: -15,
  },
});
