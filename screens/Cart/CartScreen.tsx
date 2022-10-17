import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import colors from "../../data/colors";

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
        <Image style={styles.img} source={{ uri: `${image}` }} />
      </View>

      <View style={styles.product}>
        <Text style={styles.productName} numberOfLines={2}>
        {title}
      </Text>
        
        <Text style={styles.productPrice}>${price}</Text>
      </View>

      <TouchableOpacity
        onPress={() => dispatch(decrementQuantity(id))}
        style={styles.removeItem}
      >
        <Text>-</Text>
      </TouchableOpacity>

      <View style={styles.quantity}>
        <Text style={styles.qty}>Qty</Text>
        <Text style={{ textAlign: "center" }}>{quantity}</Text>
      </View>

      <TouchableOpacity
        onPress={() => dispatch(incrementQuantity(id))}
        style={styles.addItem}
      >
        <Text>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(removeItem(id))}
        style={{ alignSelf: "center" }}
      >
        <MaterialIcons name="delete" size={24} color="#8C5674" />
      </TouchableOpacity>
    </View>
  );
};

const Total = () => {
  const cart = useSelector((state: { cart: any }) => state.cart.cart.cart);

  const getTotal = () => {
    let totalPrice = 0;
    cart.forEach((item: { price: number; quantity: number }) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <View style={styles.productPrice}>
      <Text style={styles.productPrice}>${getTotal()}</Text>
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            style={{ marginTop: 40, marginLeft: 10 }}
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
  },
  cartTitle: {
    fontSize: 35,
    marginTop: 28,
    marginLeft: 5,
    marginRight: -20,
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
    marginRight: 110,
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
    marginLeft: -6,
  },
  product: {
    alignSelf: "center",
    marginLeft: -20,
    width: 90,
  },
  productName: {
    alignSelf: "center",
    fontSize: 12,
  },
  productPrice: {
    flexDirection: "row",
    marginRight: 15,
    fontSize: 16,
    textAlign: "center",
    alignSelf: "center",
  },
  quantity: {
    alignSelf: "center",
    marginLeft: -20,
    marginRight: -20,
    marginBottom: 10,
  },
  removeItem: {
    alignSelf: "center",
    marginRight: 5,
  },
  addItem: {
    alignSelf: "center",
    marginLeft: 5,
  },
  qty: {
    marginTop: 10,
    marginBottom: 4,
  },

  img: {
    width: 80,
    height: 100,
  },
  scroll: {
    marginLeft: 25,
  },
});
