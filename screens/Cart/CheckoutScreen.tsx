import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import StatusBarSpace from "../../components/StatusBarSpace";
import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/core";
import getTaxFromZip from "../../utils/getTaxFromZip";

import colors from "../../data/colors";

const CheckoutScreen = () => {
  const [isChecked, setChecked] = useState(true);
  const [ZipCode, setZipCode] = useState("");
  const [BillZipCode, setBillZipCode] = useState("");
  const [totalTax, setTotalTax] = useState(0);
  const navigation = useNavigation();

  const cart = useSelector((state: { cart: any }) => state.cart.cart);

  const getTotal = () => {
    let totalPrice = 0;
    cart.forEach((item: { price: number; quantity: number }) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  useEffect(() => {
    if (ZipCode.length >= 4 && isChecked) {
      setTotalTax(getTotal() * getTaxFromZip(parseInt(ZipCode)));
      return;
    }

    if (BillZipCode.length >= 4 && !isChecked) {
      setTotalTax(getTotal() * getTaxFromZip(parseInt(BillZipCode)));
      return;
    }

    setTotalTax(0);
    return;
  }, [isChecked]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.tan }}>
      <StatusBarSpace />
      <View style={styles.titleBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            style={{ marginLeft: 10 }}
            name="arrow-left"
            size={24}
            color={colors.violet}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Checkout</Text>
      </View>

      <ScrollView>
        <Text style={styles.subTitle}>Shipping Address</Text>

        <View style={{ alignItems: "center" }}>
          <TextInput placeholder="Name" style={styles.longInput} />
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
              value={ZipCode}
              onChangeText={setZipCode}
              onEndEditing={() => {
                if (ZipCode.length >= 4 && isChecked) {
                  setTotalTax(getTotal() * getTaxFromZip(parseInt(ZipCode)));
                }
              }}
              style={[styles.longInput, { width: 150, marginHorizontal: 10 }]}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.subTitle, { paddingVertical: 10 }]}>
            Same as Shipping Address?
          </Text>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? colors.violet : colors.black}
          />
        </View>

        {!isChecked && (
          <>
            <Text style={styles.subTitle}>Billing Address</Text>
            <View style={{ alignItems: "center" }}>
              <TextInput placeholder="Address 1" style={styles.longInput} />
              <TextInput placeholder="Address 2" style={styles.longInput} />
              <TextInput placeholder="City" style={styles.longInput} />
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  placeholder="State"
                  style={[
                    styles.longInput,
                    { width: 150, marginHorizontal: 10 },
                  ]}
                />
                <TextInput
                  placeholder="Zip Code"
                  keyboardType="numeric"
                  maxLength={5}
                  value={BillZipCode}
                  onChangeText={setBillZipCode}
                  onEndEditing={() => {
                    if (BillZipCode.length >= 4) {
                      setTotalTax(
                        getTotal() * getTaxFromZip(parseInt(BillZipCode))
                      );
                    }
                  }}
                  style={[
                    styles.longInput,
                    { width: 150, marginHorizontal: 10 },
                  ]}
                />
              </View>
            </View>
          </>
        )}

        <Text style={[styles.subTitle, { paddingVertical: 10 }]}>
          Payment Information
        </Text>
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

        <Text style={[styles.subTitle, { paddingVertical: 10 }]}>
          Final Review
        </Text>
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
              <Text style={styles.orderTitle}>${getTotal()}</Text>
              <Text style={styles.orderTitle}>$5.99</Text>
              <Text style={styles.orderTitle}>${totalTax.toFixed(2)}</Text>
              <Text style={styles.orderTitle}>
                ${getTotal() + totalTax + 5.99}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.placeOrderBox}>
          <TouchableOpacity style={styles.placeOrderButton}>
            <Text style={{ color: colors.white }}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    padding: 15,
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 15,
  },
  orderTitle: {
    fontSize: 20,
  },
  titleBox: {
    flexDirection: "row",
    height: 75,
    alignItems: "center",
  },
  placeOrderBox: { flexDirection: "row", justifyContent: "center" },
  placeOrderButton: {
    backgroundColor: colors.violet,
    flexDirection: "row",
    justifyContent: "center",
    width: 200,
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    marginBottom: 20,
  },
  longInput: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    width: 375,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 10,
  },
});
