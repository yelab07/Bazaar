import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import colors from "../../data/colors";

import {useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import CartItem from "../Cart/CartItem"
import Total from "../Cart/Total"



const CartScreen = () => {
  const cart = useSelector((state: { cart: any }) => state.cart.cart);

  const navigation = useNavigation();

  return (
    <View
      style={{ flex: 1, backgroundColor: "#dcb688", alignItems: "flex-start" }}
    >
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            style={{ marginTop: 45, marginLeft: 10 }}
            name="arrow-left"
            size={24}
            color={colors.violet}
          />
        </TouchableOpacity>
        <Text style={styles.cartTitle}>Cart</Text>

        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotal}>Subtotal:</Text>
          <Total />
        </View>
      </View>

      <View style={styles.toCheckoutButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CheckoutScreen" as never)}
        >
          <Text style={styles.toCheckoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.scroll}>
          {cart?.map(
            (item: {
              price: number;
              quantity: number;
              id: number;
              image: string;
              title: string;
            }) => (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  firstContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    marginTop:10,
  },
  cartTitle: {
    fontSize: 35,
    marginTop: 34,
    marginLeft: 5,
    marginRight: -20,
  },
  subtotalContainer: {
    width: 260,
    height: 30,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 30,
    alignItems: "center",
  },
  subtotal: {
    fontSize: 20,
    paddingLeft: 10,
    marginRight: 90,
  },
  toCheckoutButton: {
    backgroundColor: "#8C5674",
    width: 200,
    height: 30,
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 30,
    justifyContent: "center"
  },
  toCheckoutText: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
  },
  
  scroll: {
    marginLeft: 25,
  },
});
