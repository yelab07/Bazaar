import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import StatusBarSpace from "../../components/StatusBarSpace";
import { MaterialIcons } from "@expo/vector-icons";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

const CartScreen = () => {
  const cart = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const ProductsInCart = (props: any) => {
    return (
      <View style={styles.itemsContainer}>
        <View style={styles.imageBox}></View>

        <View style={styles.product}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.productName}
          >
            {props.item.title}
          </Text>
          <Text style={styles.productPrice}>${props.item.price}</Text>
        </View>

        <TouchableOpacity
          onPress={() => dispatch(decrementQuantity(props.item.id))}
          style={styles.removeItem}
        >
          <Text>-</Text>
        </TouchableOpacity>

        <View style={styles.quantity}>
          <Text>Qty</Text>
          <Text style={{ textAlign: "center" }}>{props.item.quantity}</Text>
        </View>

        <TouchableOpacity
          onPress={() => dispatch(incrementQuantity(props.item.id))}
          style={styles.addItem}
        >
          <Text>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={() => dispatch(removeItem(props.item.id))}
        >
          <MaterialIcons name="delete" size={24} color="#8C5674" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#dcb688",
      }}
    >
      <StatusBarSpace />

      <View style={styles.firstContainer}>
        <Text style={styles.cartTitle}>Cart</Text>

        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotal}>Subtotal:</Text>
          <Text style={styles.subtotal}>${getTotalQuantity()}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("CheckoutScreen" as never)}
        style={styles.toCheckoutButton}
      >
        <Text style={styles.toCheckoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>

      <FlatList
        data={cart}
        renderItem={ProductsInCart}
        keyExtractor={(item) => item.id}
      />
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
    justifyContent: "center",
    marginBottom: 30,
  },
  toCheckoutText: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
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
    backgroundColor: "gray",
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
  productPrice: {},
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
});
