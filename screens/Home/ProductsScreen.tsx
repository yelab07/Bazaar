import { StyleSheet, Text, View, Button,TouchableOpacity,} from "react-native";
import React from "react";
import { useNavigation, useRoute} from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";
import { RouteProp } from "@react-navigation/native";

type ParamList = { Params: { search: string } };




const ProductsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, "Params">>();
// const { search } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "#dcb688" }}>
      <Text>ProductsScreen</Text>
      <Button
        title="To Home"
        onPress={() => navigation.navigate("HomeScreen" as never)}
      />
      <Button
        title="To Product Details"
        onPress={() => navigation.navigate("ProductDetailsScreen" as never)}
      />
      <View>
        <ScrollView contentContainerStyle={styles.secondViewContainer}>
      <TouchableOpacity style={styles.view2} onPress={() => navigation.navigate("ProductDetailsScreen" as never)}>
         <View style={styles.imageBox}></View>
          <View style={styles.categoryBox}>
            <Text>Polo Shirt</Text>
            <Text> review</Text>
            <Text>$20</Text>

          </View>
        </TouchableOpacity> 
        
        
        </ScrollView>
      </View>

    </View>
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
