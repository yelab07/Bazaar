import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import StatusBarSpace from "../../components/StatusBarSpace";
import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/core";
import getTaxFromZip from "../../utils/getTaxFromZip";

import colors from "../../data/colors";
import ShippingAddressInputs from "../../components/ShippingAddressInputs";
import BillingAddressInputs from "../../components/BillingAddressInputs";
import CardPaymentInputs from "../../components/CardPaymentInputs";
import FinalReviewCard from "../../components/FinalReviewCard";

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

        <ShippingAddressInputs
          getTotal={getTotal}
          getTaxFromZip={getTaxFromZip}
          ZipCode={ZipCode}
          setZipCode={setZipCode}
          isChecked={isChecked}
          setTotalTax={setTotalTax}
        />

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
            <BillingAddressInputs
              getTotal={getTotal}
              getTaxFromZip={getTaxFromZip}
              BillZipCode={BillZipCode}
              setBillZipCode={setBillZipCode}
              isChecked={isChecked}
              setTotalTax={setTotalTax}
            />
          </>
        )}

        <Text style={[styles.subTitle, { paddingVertical: 10 }]}>
          Payment Information
        </Text>
        <CardPaymentInputs />

        <Text style={[styles.subTitle, { paddingVertical: 10 }]}>
          Final Review
        </Text>
        <FinalReviewCard getTotal={getTotal} totalTax={totalTax} />

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
});
