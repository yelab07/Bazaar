import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StatusBarSpace from "../../components/StatusBarSpace";
import { MaterialIcons } from '@expo/vector-icons';

const CartScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#dcb688" }}>
      <StatusBarSpace />
      <Text style={styles.cartTitle}>Cart</Text>

      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotal}>Subtotal</Text>
        <Text style={styles.subtotal}>$60</Text>
      </View>

      <View style={styles.toCheckoutButton}>
        <Text style={styles.toCheckoutText}>Proceed to Checkout</Text>
      </View>

      <View styles={styles.itemsContainer}>
        <View>
          <Image></Image>
          <View>
            <Text>Polo Shirt</Text>
            <Text>$20</Text>
          </View>
          <Text>Qty</Text>
          <Text>-</Text>
          <Text>+</Text>
          <Text>1</Text>
          <MaterialIcons name="delete" size={24} color="purple" />
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
