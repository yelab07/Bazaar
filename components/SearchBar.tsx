import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import StatusBarSpace from "./StatusBarSpace";
import { useNavigation } from "@react-navigation/core";

export default function SearchBar() {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  return (
    <View style={{ backgroundColor: "#dcb688" }}>
      <StatusBarSpace />
      <TextInput
        value={text}
        onChangeText={setText}
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
            {
              screen: "ProductsScreen",
              params: { query: "search", search: text },
            } as never
          );
          setText("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
