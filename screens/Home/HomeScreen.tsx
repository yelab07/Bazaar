import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#dcb688" }}>
      <Text style={styles.title}>Our Products</Text>
      <View style={{ alignItems: "center" }}>
        <View style={styles.firstContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity style={styles.view1}
              onPress={() => navigation.navigate("ProductDetailsScreen" as never)}></TouchableOpacity>
            <TouchableOpacity style={styles.view1}
              onPress={() => navigation.navigate("ProductDetailsScreen" as never)}
            ></TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <TouchableOpacity style={styles.view1}></TouchableOpacity>
            <TouchableOpacity style={styles.view1}></TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView contentContainerStyle={styles.secondViewContainer}>
        <TouchableOpacity style={styles.view2} onPress={() => navigation.navigate("ProductsScreen" as never)}>
          <View style={styles.imageBox}></View>
          <View style={styles.categoryBox}>
            <Text>Women Section</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view2} onPress={() => navigation.navigate("ProductsScreen" as never)}>
          <View style={styles.imageBox}></View>
          <View style={styles.categoryBox}>
            <Text>Men Section</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view2} onPress={() => navigation.navigate("ProductsScreen" as never)}>
          <View style={styles.imageBox}></View>
          <View style={styles.categoryBox}>
            <Text>Jewelery Section</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view2} onPress={() => navigation.navigate("ProductsScreen" as never)}>
          <View style={styles.imageBox}></View>
          <View style={styles.categoryBox}>
            <Text>Electronics Section</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    padding: 15,
  },
  firstContainer: {
    flexDirection: "column",
    width: 300,
    height: 300,
  },
  view1: {
    backgroundColor: "white",
    width: 125,
    height: 135,
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  secondViewContainer: {
    alignItems: "center",
  },
  view2: {
    width: 350,
    height: 100,
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 15,
    flexDirection: "row",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imageBox: {
    width: 120,
    height: 100,
    backgroundColor: "gray",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  categoryBox: {
    paddingLeft: 10,
    width: 175,
    height: 100,
    justifyContent: "center",
  },
});
