import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../redux/cartSlice";

const CartItem = ({
  id,
  image,
  title,
  price,
  quantity = 0,
}: {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.itemsContainer}>
      <View style={styles.imageBox}>
        <Image style={styles.img}  source={{ uri: `${image}` }}
 />
      </View>

      <View style={styles.product}>
        <Text style={styles.productName}>{title}</Text>
        <Text style={styles.productPrice}>${price}</Text>
      </View>

      <TouchableOpacity onPress={() => dispatch(decrementQuantity(id))}>
        <Text style={styles.removeItem}>-</Text>
      </TouchableOpacity>

      <View style={styles.quantity}>
        <Text style={{ textAlign: "center" }}>{quantity}</Text>
      </View>

      <TouchableOpacity onPress={() => dispatch(incrementQuantity(id))}>
        <Text style={styles.addItem}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(removeItem(id))}>
        <MaterialIcons
          style={{ alignSelf: "center" }}
          name="delete"
          size={24}
          color="#8C5674"
        />
      </TouchableOpacity>
    </View>
  );
};

const Total = () => {
  const cart = useSelector((state: { cart: any }) => state.cart.cart.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item: { price: number; quantity: number }) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <View style={styles.productPrice}>
      <Text style={styles.productPrice}>$ {getTotal().totalPrice}</Text>
    </View>
  );
};

const CartScreen = () => {
  const cart = useSelector((state: { cart: any }) => state.cart.cart.cart);

  const navigation = useNavigation();

  return (
    <View
      style={{ flex: 1, backgroundColor: "#dcb688", alignItems: "flex-start" }}
    >
      <View style={styles.firstContainer}>
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
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  firstContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  cartTitle: {
    fontSize: 35,
    marginTop: 30,
    marginLeft: 15,
  },
  subtotalContainer: {
    width: 270,
    height: 30,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 30,
  },
  subtotal: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  toCheckoutButton: {
    backgroundColor: "#8C5674",
    width: 200,
    height: 30,
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 30,
  },
  toCheckoutText: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
    paddingTop: 3,
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 350,
    height: 100,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  imageBox: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginLeft: -20,
  },
  product: {
    alignSelf: "center",
    marginLeft: -20,
  },
  productName: {
    alignSelf: "center",
  },
  productPrice: {
    flexDirection: "row",
    marginRight: 15,
    fontSize: 20,
    textAlign: "center",
  },
  quantity: {
    alignSelf: "center",
    marginLeft: -20,
    marginRight: -20,
  },
  removeItem: {
    alignSelf: "center",
  },
  addItem: {
    alignSelf: "center",
  },
  img: {
    width: 80,
    height: 100,
  },
});
