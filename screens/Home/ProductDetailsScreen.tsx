import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { addToCart } from "../../redux/cartSlice";
import { useNavigation, useRoute } from "@react-navigation/core";
import { useProductQuery } from "../../services/productsApi";
import { RouteProp } from "@react-navigation/native";
import QuantitySelector from "../../components/QuantitySelector";
import { scale } from "react-native-size-matters";
import { Product } from '../../models/products.model';
import { useDispatch } from "react-redux";

type ParamList = { Params: { id: string } };
type Props = {
  onPress: () => void;
};

const ProductDetailsScreen = ({ onPress }: Props) => {
  const dispatch = useDispatch()

  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, "Params">>();
  const { id } = route.params;
  const { data } = useProductQuery(id);
  const [quantity, setQuantity] = useState<any>(1);

  const onAddToCart = (product: Product, quantity: number) => {
    dispatch(addToCart({ ...product, quantity }))
  };


  return (
    <View style={styles.container}>
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
              <Text style={styles.rating}> Rating:{data?.rating.rate}</Text>
            </View>
          </View>
          <View>
            <Image
              resizeMode="cover"
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
                style={{ fontSize: 20, alignContent: "center", color: "green" }}
              >
                In stock
              </Text>
            </View>
            <View>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </View>
          </View>
        </View>
        <View>
          <Text numberOfLines={5} style={styles.description}>{data?.description}</Text>
        </View>
        <View style={styles.addToCartWrapper}>
          <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(data as any, quantity)}>
            <Text style={styles.addButtonText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#dcb688",
  },
  productImg: {
    width: 200,
    height: 200,
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
  addToCartWrapper: {},
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
