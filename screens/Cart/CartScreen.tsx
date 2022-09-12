import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StatusBarSpace from "../../components/StatusBarSpace";

const CartScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#dcb688" }}>
      <StatusBarSpace />
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
