import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useCallback } from "react";
import { useRoute } from "@react-navigation/core";
import { useProductQuery } from "../../services/productsApi";
import { RouteProp } from "@react-navigation/native";
import QuantitySelector from "../../components/QuantitySelector";
import { scale } from "react-native-size-matters";
import colors from "../../data/colors";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

type ParamList = { Params: { id: string } };

const ProductDetailsScreen = () => {
  const route = useRoute<RouteProp<ParamList, "Params">>();
  const { id } = route.params;
  const { data, isLoading, isSuccess } = useProductQuery(id);
  const [quantity, setQuantity] = useState<any>(1);
  const [showMore, setShowMore] = useState(false);
  const [numOfLines, setNumOfLines] = useState(5);
  const dispatch = useDispatch();

  const onTextLayout = useCallback((e: any) => {
    setShowMore(e.nativeEvent.lines.length > numOfLines);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="small" color={colors.violet} />}
      {isSuccess && (
        <ScrollView>
          <View style={{ alignItems: "center", marginHorizontal: 0 }}>
            <View>
              <View>
                <Text style={styles.title}>{data?.title}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: scale(20),
                  marginHorizontal: scale(20),
                }}
              >
                <Text style={styles.category}>{data?.category}</Text>
                <Text style={styles.rating}> Rating: {data?.rating.rate}</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                style={styles.productImg}
                source={{ uri: `${data?.image}` }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
                width: 250,
                marginTop: 20,
              }}
            >
              <View>
                <Text style={styles.price}> ${data?.price}</Text>
                <Text
                  style={{
                    fontSize: 20,
                    alignContent: "center",
                    color: "green",
                  }}
                >
                  In stock
                </Text>
              </View>
              <View>
                <QuantitySelector
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </View>
            </View>
          </View>
          <View>
            <Text
              numberOfLines={numOfLines}
              style={styles.description}
              onTextLayout={onTextLayout}
            >
              {data?.description}
            </Text>
            {showMore && (
              <TouchableOpacity
                onPress={() => setNumOfLines(numOfLines === 5 ? 0 : 5)}
                style={{ marginRight: 50, marginBottom: 10 }}
              >
                <Text
                  style={{
                    color: colors.violet,
                    margin: 0,
                    textAlign: "right",
                  }}
                >
                  {numOfLines === 5 ? "See more" : "See less"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.addToCartWrapper}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => {
                dispatch(
                  addToCart({
                    ...data,
                    quantity: quantity,
                  })
                );
                Alert.alert("Item Added!");
              }}
            >
              <Text style={styles.addButtonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#dcb688",
  },
  imageContainer: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  productImg: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  title: {
    marginHorizontal: scale(20),
    fontSize: 25,
    fontWeight: "bold",
  },
  category: {
    fontSize: 20,
    textTransform: "capitalize",
  },
  rating: {
    fontSize: 15,
    marginVertical: scale(5),
  },
  price: { fontSize: 20 },
  addToCartWrapper: { paddingBottom: 20 },
  description: {
    marginVertical: scale(20),
    lineHeight: scale(20),
    marginHorizontal: scale(20),
  },
  addButton: {
    marginTop: scale(10),
    height: scale(45),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#8C5674",
    marginHorizontal: 65,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
