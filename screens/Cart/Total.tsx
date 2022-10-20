import {
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React from "react";
  import { useSelector } from "react-redux";
  
  
  const Total = () => {
    const cart = useSelector((state: { cart: any }) => state.cart.cart);
  
    const getTotal = () => {
      let totalPrice = 0;
      cart.forEach((item: { price: number; quantity: number }) => {
        totalPrice += item.price * item.quantity;
      });
      return totalPrice.toFixed(2);
    };
  
    return (
      <View style={styles.productPrice}>
        <Text style={styles.productPrice}>${getTotal()}</Text>
      </View>
    );
  };

  export default Total;

const styles = StyleSheet.create({
    productPrice: {
        flexDirection: "row",
        marginRight: 15,
        fontSize: 16,        
      },
})