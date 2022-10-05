import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StatusBarSpace from "../../components/StatusBarSpace";
import { MaterialIcons } from '@expo/vector-icons';
import { configureStore } from '@reduxjs/toolkit';


const ProdcutsInCart = (props) => {
return(
  <View style={styles.itemsContainer}>

        <View style={styles.imageBox}>
        </View>

          <View style={styles.product}>
            <Text style={styles.productName}>Polo Shirt</Text>
            <Text style={styles.productPrice}>$20</Text>
          </View>

          <Text style={styles.removeItem}>-</Text>

          <View style={styles.quantity}>
          <Text>Qty</Text>
          <Text style={{textAlign: "center"}}>1</Text>
          </View>
         

          <Text style={styles.addItem}>+</Text>
          
          <MaterialIcons style={{alignSelf: "center"}}name="delete" size={24} color="#8C5674" />
      </View>
)
}
const CartScreen = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#dcb688", alignItems: "flex-start" }}>
      <StatusBarSpace />

      <View style={styles.firstContainer}>
       <Text style={styles.cartTitle}>Cart</Text>

      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotal}>Subtotal:</Text>
        <Text style={styles.subtotal}>$60</Text>
      </View> 
      </View>
      

      <View style={styles.toCheckoutButton}>
        <Text style={styles.toCheckoutText}>Proceed to Checkout</Text>
      </View>

      <ProdcutsInCart />
      <ProdcutsInCart />
      <ProdcutsInCart />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  firstContainer:{
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
    marginBottom:20,
  },
  imageBox: {
    width :80,
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
  productPrice: {
    // alignSelf: "center",


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
});
