import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import StatusBarSpace from "../../components/StatusBarSpace";
import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

import { useNavigation } from "@react-navigation/core";

const CheckoutScreen = () => {
  const [isChecked, setChecked] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#dcb688" }}>
      <StatusBarSpace />
      <View style={styles.titleBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            style={{ marginLeft: 10 }}
            name="arrow-left"
            size={24}
            color="#814e66"
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
            color={isChecked ? "#814e66" : "black"}
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
              backgroundColor: "white",
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
              <Text style={styles.orderTitle}>$60</Text>
              <Text style={styles.orderTitle}>$5</Text>
              <Text style={styles.orderTitle}>$7</Text>
              <Text style={styles.orderTitle}>$72</Text>
            </View>
          </View>
        </View>

        <View style={styles.placeOrderBox}>
          <TouchableOpacity style={styles.placeOrderButton}>
            <Text style={{ color: "white" }}>Place Order</Text>
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
    backgroundColor: "#814e66",
    flexDirection: "row",
    justifyContent: "center",
    width: 200,
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    marginBottom: 20,
  },
  longInput: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    width: 375,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 10,
  },
});
