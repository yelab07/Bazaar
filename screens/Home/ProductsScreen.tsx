import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";
import { RouteProp } from "@react-navigation/native";
import {
  useProductsQuery,
  useProductsInCategoryQuery,
} from "../../services/productsApi";

import colors from "../../data/colors";

import { Product } from "../../models/products.model";

type ParamList = {
  Params: { query: string; category: string; search: string };
};

const filteredProducts = (products: Product[], search: string) => {
  function checkAdult(item: any) {
    return item.title.toLowerCase().includes(search.toLowerCase());
  }

  return products.filter(checkAdult);
};

const RenderProducts = (products: Product[], search: string) => {
  const navigation = useNavigation();

  //result depends on whether there is a search term given from the search bar
  const result = search ? filteredProducts(products, search) : products;

  return result?.map((product, index) => {
    return (
      <View key={index}>
        <TouchableOpacity
          style={styles.productsView}
          onPress={() =>
            navigation.navigate(
              "ProductDetailsScreen" as never,
              { id: product.id } as never
            )
          }
        >
          <View style={styles.productsImageBox}>
            <Image
              resizeMode="contain"
              style={{
                width: 80,
                borderRadius: 15,

                aspectRatio: 1,
              }}
              source={{ uri: `${product.image}` }}
            />
          </View>
          <View style={styles.productsBox}>
            <Text numberOfLines={2} ellipsizeMode="tail">
              {product.title}
            </Text>
            <Text>{product.rating.rate}</Text>
            <Text>${product.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  });
};

const ProductsScreen = () => {
  const route = useRoute<RouteProp<ParamList, "Params">>();

  const {
    data: products,
    error,
    isLoading,
    isFetching,
    isSuccess,
  } = route.params.query == "category"
    ? useProductsInCategoryQuery(route.params.category)
    : useProductsQuery();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#dcb688" }}>
      {isLoading && <ActivityIndicator size="small" color={colors.violet} />}
      {error && <Text>...Something went wrong </Text>}
      {isSuccess && !isLoading && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ padding: 10 }}
        >
          {RenderProducts(products, route.params.search)}
        </ScrollView>
      )}
    </SafeAreaView>
  );
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
    justifyContent: "center",
    alignItems: "center",
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
