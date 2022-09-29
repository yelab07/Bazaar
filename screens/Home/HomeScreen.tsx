import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
// import { Product } from "../../models/products.model";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { useProductsQuery } from "../../services/productsApi";


const HomeScreen = () => {
  const navigation = useNavigation();
  const { data, error, isLoading, isFetching, isSuccess } = useProductsQuery()

  return (<View style={{ flex: 1, backgroundColor: "#dcb688" }}>
    {isLoading && <Text>...Loading </Text>}
    {isFetching && <Text>...Fetching </Text>}
    {error && <Text>...Somthing went wrong </Text>}
    {isSuccess && (<View>
      <Text style={styles.title}>Our Products</Text>

      {data.map(product => {
        return <View key={product.id}>
          <View style={{ alignItems: "center" }}>
            < View style={styles.firstContainer}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity style={styles.view1}
                  onPress={() => navigation.navigate("ProductDetailsScreen" as never, { id: product.id } as never)}
                >
                  <Image resizeMode="cover"
                    style={{
                      width: '100%',
                      height: undefined,
                      aspectRatio: 1,
                    }}
                    source={{ uri: `${product.image}` }}
                  /></TouchableOpacity>
                <TouchableOpacity style={styles.view1}
                // onPress={() => navigation.navigate("ProductDetailsScreen")}
                ><Image style={{ width: 50, height: 50 }}
                  source={{ uri: `${product.image}` }}
                  /></TouchableOpacity>
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
            <TouchableOpacity style={styles.view2}
            // onPress={() => navigation.navigate("ProductsScreen")}
            >
              <View style={styles.imageBox}></View>
              <View style={styles.categoryBox}>
                <Text>Women Section</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.view2}
            // onPress={() => navigation.navigate("ProductsScreen")}
            >
              <View style={styles.imageBox}></View>
              <View style={styles.categoryBox}>
                <Text>Men Section</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.view2}
            // onPress={() => navigation.navigate("ProductsScreen")}
            >
              <View style={styles.imageBox}></View>
              <View style={styles.categoryBox}>
                <Text>Jewelery Section</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.view2}
            // onPress={() => navigation.navigate("ProductsScreen")}
            >
              <View style={styles.imageBox}></View>
              <View style={styles.categoryBox}>
                <Text>Electronics Section</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

      })}
    </View>)}




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
