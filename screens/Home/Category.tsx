import {
    StyleSheet, Text, View, ScrollView,
    Image, TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/core";
import { Product } from "../../models/products.model";

interface CategoryProps {
    category: string,
    image: string,
    index: number,
}

const Category = ({ category, image, index }: CategoryProps) => {
    const navigation = useNavigation();
    // const [filteredData, setFilteredData] = useState<Product[]>([])

    //   const filteredProducts = (cat: string) => {
    //     const sortedList = data?.filter((x) => x.category === cat)
    //     console.log(sortedList)
    //     // setFilteredData(sortedList as any)

    //   }
    //   filteredProducts("women's clothing")

    const str = category;
    const caps = str.charAt(0).toUpperCase() + str.slice(1);
    return (<View >
        <ScrollView contentContainerStyle={styles.secondViewContainer}>

            <TouchableOpacity style={styles.view2} key={index}
                onPress={() => navigation.navigate("ProductsScreen" as never)}
            >
                <View style={styles.imageBox}>
                    <Image resizeMode="cover"
                        style={{
                            width: 145,
                            height: 100,
                            borderRadius: 15,

                            aspectRatio: 1,
                        }}
                        source={{ uri: `${image}` }}
                    />
                </View>
                <View style={styles.categoryBox}>
                    <Text >
                        <>{caps}</>
                    </Text>
                </View>
            </TouchableOpacity>

        </ScrollView>
    </View>
    );
}
export default Category

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        padding: 15,
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
    view1: {


        backgroundColor: "black",
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
        paddingLeft: 30,
        width: 175,
        height: 100,
        justifyContent: "center",
    },
});
