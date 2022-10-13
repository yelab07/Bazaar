import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

interface CategoryProps {
  category: string;
  image: string;
  index: number;
}

const Category = ({ category, image, index }: CategoryProps) => {
  const navigation = useNavigation();

  const str = category;
  const caps = str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <View>
      <ScrollView contentContainerStyle={styles.secondViewContainer}>
        <TouchableOpacity
          style={styles.categoriesView}
          key={index}
          onPress={() =>
            navigation.navigate(
              "ProductsScreen" as never,
              { query: "category", category: category } as never
            )
          }
        >
          <View style={styles.imageBox}>
            <Image
              resizeMode="contain"
              style={{
                width: 80,
                borderRadius: 15,

                aspectRatio: 1,
              }}
              source={{ uri: `${image}` }}
            />
          </View>
          <View style={styles.categoryBox}>
            <Text>
              <>{caps}</>
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Category;

const styles = StyleSheet.create({
  secondViewContainer: {
    alignItems: "center",
  },
  categoriesView: {
    width: 300,
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
