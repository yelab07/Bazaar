import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import StatusBarSpace from "./StatusBarSpace";
import { useNavigation, useRoute, getFocusedRouteNameFromRoute } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";
import colors from "../data/colors";

export default function SearchBar() {
  const route = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route);
  const navigation = useNavigation();
  const [text, setText] = useState("");
  return (
    <View style={{ backgroundColor: "#dcb688" }}>
      <StatusBarSpace />

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {(routeName === "ProductsScreen" || routeName === "ProductDetailsScreen") &&
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              style={{ marginTop: 15, marginLeft: 10 }}
              name="arrow-left"
              size={24}
              color={colors.violet}
            />

          </TouchableOpacity>
        }
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Search"
          style={{
            width: 300,
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
              { screen: "ProductsScreen", params: { search: text } } as never
            );
            setText("");
          }}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({});
