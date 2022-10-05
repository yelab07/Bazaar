import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import colors from "../data/colors";

const BillingAddressInputs = (props: any) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput placeholder="Address 1" style={styles.longInput} />
      <TextInput placeholder="Address 2" style={styles.longInput} />
      <TextInput placeholder="City" style={styles.longInput} />
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="State"
          style={[styles.longInput, { width: 150, marginHorizontal: 10 }]}
        />
        <TextInput
          placeholder="Zip Code"
          keyboardType="numeric"
          maxLength={5}
          value={props.BillZipCode}
          onChangeText={props.setBillZipCode}
          onEndEditing={() => {
            if (props.BillZipCode.length >= 4) {
              props.setTotalTax(
                props.getTotal() *
                  props.getTaxFromZip(parseInt(props.BillZipCode))
              );
            }
          }}
          style={[styles.longInput, { width: 150, marginHorizontal: 10 }]}
        />
      </View>
    </View>
  );
};

export default BillingAddressInputs;

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
