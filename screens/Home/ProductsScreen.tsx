import { StyleSheet, Text, View, Button, TouchableOpacity, Image, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";
import { RouteProp } from "@react-navigation/native";
import { useProductsQuery } from "../../services/productsApi";

import { Product } from '../../models/products.model';

type ParamList = { Params: { search: string } };

const RenderProducts = (products: Product[], search: string) => {

  const navigation = useNavigation();
  return (
    products?.filter(productItems => productItems.category === search || productItems.title.toLowerCase().includes(search.toLowerCase()) || productItems.description.toLowerCase().includes(search.toLowerCase()) )?.map((product, index) => {
      return (
        <View key={index}
        >
          <TouchableOpacity style={styles.productsView} onPress={() => navigation.navigate("ProductDetailsScreen" as never)}>
            <View style={styles.productsImageBox}>
              <Image
                resizeMode="cover"
                style={{
                  width: 125,
                  height: 100,
                  borderRadius: 15,

                  aspectRatio: 1,
                }}
                source={{ uri: `${product.image}` }}
              />
            </View>
            <View style={styles.productsBox}>

              <Text>{product.title}</Text>
              <Text>{product.rating.rate}</Text>
              <Text>${product.price}</Text>

            </View>
          </TouchableOpacity>

        </View>
      );
    }))
};







const ProductsScreen = () => {
  const { data: products, error, isLoading, isFetching, isSuccess } = useProductsQuery()


  const route = useRoute<RouteProp<ParamList, "Params">>();

  return (
    (<SafeAreaView style={{ flex: 1, backgroundColor: "#dcb688" }}>

      {isLoading && <Text>...Loading </Text>}
      {error && <Text>...Something went wrong </Text>}
      {isSuccess && (<ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#dcb688", padding: 10 }}>
        

        {RenderProducts(products, route.params.search)}

      </ScrollView>)}
    </SafeAreaView>
    ));
};




export default ProductsScreen;

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

  secondViewContainer: {
    alignItems: "center",
  },
  productsView: {
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
  productsImageBox: {
    width: 120,
    height: 100,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  productsBox: {
    paddingLeft: 10,
    width: 175,
    height: 100,
    justifyContent: "center",
  },
});
