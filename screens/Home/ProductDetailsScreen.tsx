import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { useProductQuery } from "../../services/productsApi";
import { RouteProp } from "@react-navigation/native"
type ParamList = { Params: { id: string }; };
type Props = {
  onPress: () => void;
};

const ProductDetailsScreen = ({ onPress }: Props) => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, "Params">>()
  const { id } = route.params
  const { data } = useProductQuery(id);

  // onPress=()=>(Alert.alert("Success","Product has beed added to the cart "))
  return (


    <View style={styles.container}>



      <ScrollView>
        < View style={{ alignItems: 'center', marginHorizontal: 0 }}>

          <View >
            <View >
              <Text style={styles.title}>{data?.title}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 20 }}>
              <Text style={styles.category}>{data?.category}</Text>
              <Text> Rating:{data?.rating.rate}</Text>
            </View>
          </View>
          <View
          >
            <Image resizeMode="cover"
              style={styles.productImg}
              source={{ uri: `${data?.image}` }}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: "space-between", flex: 1, width: 250 }}>
            <View >
              <Text style={styles.price}> ${data?.price}</Text>
              <Text style={{ fontSize: 20, alignContent: 'center' }}>In stock</Text>

            </View>
            <View>
              {/* <Text>Qty</Text> */}
              {/* <QuantitySelector quantity={quantity} setQuantity={setQuantity} /> */}
            </View>
          </View>

        </View>
        <View style={styles.addToCartWrapper}>
          <TouchableOpacity style={styles.addButton}
          // onPress={()=>clickEventListener()}
          >
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
    backgroundColor: "#dcb688"
  },
  productImg: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold'
  },
  category: {
    fontSize: 20,
  },
  price: { fontSize: 20 },
  addToCartWrapper: {

  },
  addButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#8C5674",
    marginHorizontal: 65,

  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  }
});
