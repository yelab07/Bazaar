import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../data/colors";

const FinalReviewCard = (props: any) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: colors.white,
          width: 350,
          height: 300,
          elevation: 10,
          marginBottom: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            justifyContent: "space-around",
            paddingLeft: 20,
            width: 150,
            flex: 1,
          }}
        >
          <Text style={styles.orderTitle}>Subtotal:</Text>
          <Text style={styles.orderTitle}>Shipping & Handling:</Text>
          <Text style={styles.orderTitle}>Tax:</Text>
          <Text style={styles.orderTitle}>Grand Total:</Text>
        </View>

        <View
          style={{
            justifyContent: "space-around",
            paddingLeft: 20,
            width: 150,
            flex: 1,
          }}
        >
          <Text style={styles.orderTitle}>${(props.getTotal()).toFixed(2)}</Text>
          <Text style={styles.orderTitle}>$5.99</Text>
          <Text style={styles.orderTitle}>${props.totalTax.toFixed(2)}</Text>
          <Text style={styles.orderTitle}>
            ${(props.getTotal() + props.totalTax + 5.99).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FinalReviewCard;

const styles = StyleSheet.create({
  orderTitle: {
    fontSize: 20,
  },
});
