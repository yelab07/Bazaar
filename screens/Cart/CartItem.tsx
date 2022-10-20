import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
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
          <Text style={styles.productName} numberOfLines={1}>
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
  
  export default CartItem;

  const styles= StyleSheet.create({
    itemsContainer: {
        flex: 1,
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
        fontSize: 15,
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
        marginLeft: 5,},
        img: {
            width: 80,
            height: 100,
          },
          qty: {
            marginTop: 10,
            marginBottom: 4,
          },
  });