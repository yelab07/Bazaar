import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import StatusBarSpace from "./StatusBarSpace";
import { useNavigation, CommonActions } from "@react-navigation/core";

export default function SearchBar() {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#dcb688" }}>
      <StatusBarSpace />
      <TextInput
        placeholder="Search"
        style={{
          margin: 7,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 10,
          backgroundColor: "white",
          elevation: 10,
        }}
        onSubmitEditing={() => {
          navigation.navigate(
            "Home" as never,
            { screen: "ProductsScreen" } as never
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
