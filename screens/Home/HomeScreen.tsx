import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import Category from "./Category";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { useProductsQuery } from "../../services/productsApi";
import { Product } from "../../models/products.model";
import colors from "../../data/colors";

const HomeScreen = () => {
  const {
    data: products,
    error,
    isLoading,
    isFetching,
    isSuccess,
  } = useProductsQuery();

  const navigation = useNavigation();

  const sampleFourProducts = products?.slice(3, -5);
  sampleFourProducts?.splice(2, 8);

  const renderCategories = (data: Product[]) => {
    const categories = data.map((product, index) => {
      return (
        <Category
          key={index}
          index={index}
          image={product.image}
          category={product.category}
        />
      );
    });
    return categories;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#dcb688" }}>
      {isLoading && <ActivityIndicator size="small" color={colors.violet} />}
      {error && <Text>...Something went wrong </Text>}
      {isSuccess && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#dcb688", padding: 10 }}
        >
          <Text style={styles.title}>Our Products</Text>
          {products && (
            <View>
              <View style={{ alignItems: "center" }}>
                <View style={styles.firstContainer}>
                  {sampleFourProducts?.map((product, index) => {
                    return (
                      <View key={index}>
                        <TouchableOpacity
                          style={styles.sampleProductsView}
                          onPress={() =>
                            navigation.navigate(
                              "ProductDetailsScreen" as never,
                              { id: product.id } as never
                            )
                          }
                        >
                          <Image
                            resizeMode="contain"
                            style={{
                              width: 100,
                              borderRadius: 15,

                              aspectRatio: 1,
                            }}
                            source={{ uri: `${product.image}` }}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              </View>
              <Text style={styles.title}>Categories</Text>
            </View>
          )}

          {sampleFourProducts && renderCategories(sampleFourProducts)}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    padding: 10,
  },
  firstContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: 300,
    height: 400,
  },
  sampleProductsView: {
    backgroundColor: "white",
    width: 125,
    height: 135,
    borderRadius: 15,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
