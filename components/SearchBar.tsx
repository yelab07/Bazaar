import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import StatusBarSpace from "./StatusBarSpace";
import {
  useNavigation,
  useRoute,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";
import colors from "../data/colors";

export default function SearchBar() {
  const navigation = useNavigation();
  const route = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route);
  const [text, setText] = useState("");

  return (
    <View style={{ backgroundColor: "#dcb688" }}>
      <StatusBarSpace />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {(routeName === "ProductsScreen" ||
          routeName === "ProductDetailsScreen") && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              style={{ marginLeft: 10 }}
              name="arrow-left"
              size={24}
              color={colors.violet}
            />
          </TouchableOpacity>
        )}

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
            flex: 1,
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
    </View>
  );
}

const styles = StyleSheet.create({});
