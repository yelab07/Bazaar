import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#dcb688" }}>
      <Text>ProductsScreen</Text>
      <Button
        title="To Home"
        onPress={() => navigation.navigate("HomeScreen" as never)}
      />
      <Button
        title="To Product Details"
        onPress={() => navigation.navigate("ProductDetailsScreen" as never)}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
