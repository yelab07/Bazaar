import { StyleSheet, TextInput, Text, View } from "react-native";
import React from "react";
import colors from "../data/colors";

const CardPaymentInputs = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        placeholder="Credit/Debt Card #"
        keyboardType="numeric"
        maxLength={16}
        style={styles.longInput}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>Exp.</Text>
        <TextInput
          placeholder="MM"
          maxLength={2}
          keyboardType="numeric"
          style={[styles.longInput, { width: 50, marginHorizontal: 5 }]}
        />
        <TextInput
          placeholder="YY"
          maxLength={2}
          keyboardType="numeric"
          style={[styles.longInput, { width: 50, marginHorizontal: 5 }]}
        />
      </View>
      <TextInput
        placeholder="CVV"
        maxLength={3}
        keyboardType="numeric"
        style={[styles.longInput, { width: 50, marginHorizontal: 5 }]}
      />

      <TextInput placeholder="Name on Card" style={styles.longInput} />
    </View>
  );
};

export default CardPaymentInputs;

const styles = StyleSheet.create({
  longInput: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    width: 375,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 10,
  },
});
