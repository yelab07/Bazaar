import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const ProductDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#dcb688" }}>
      <Text>ProductDetailsScreen</Text>
      <Button
        title="To Home"
        onPress={() => navigation.navigate("HomeScreen" as never)}
      />
      <Button
        title="To Products"
        onPress={() => navigation.navigate("ProductsScreen" as never)}
      />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
