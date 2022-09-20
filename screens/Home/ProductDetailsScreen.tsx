import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { useProductQuery } from "../../services/productsApi";
import { RouteProp } from "@react-navigation/native"
type ParamList = { Params: { id: string }; };


const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, "Params">>()
  const { id } = route.params
  const { data } = useProductQuery(id);


  return (


    <View style={{ flex: 1, backgroundColor: "#dcb688" }}>


      <Text>ProductDetailsScreen</Text>
      <Text>{data?.title}</Text>

      <Button
        title="To Home"
        onPress={() => navigation.navigate("HomeScreen" as never)}
      />
      <Button
        title="To Products"
        onPress={() => navigation.navigate("ProductsScreen" as never)}
      />
      <View style={{ alignItems: "center" }}>
        < View style={styles.firstContainer}>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >



            <View style={styles.view1}
            >
              <Image resizeMode="cover"
                style={{
                  width: '100%',
                  height: undefined,
                  aspectRatio: 1,
                }}
                source={{ uri: `${data?.image}` }}
              />
            </View>

          </View>


        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

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
    width: 600,
    height: 600,
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 40,
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
