import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuantitySelector = ({ quantity, setQuantity }: any) => {
    const onSubtract = () => {
        setQuantity(Math.max(0, quantity - 1));
    }
    const onAdd = () => {
        setQuantity(quantity + 1);
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={onSubtract} style={styles.button}>
                <Text style={styles.textButton}>
                    -
                </Text>
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable onPress={onAdd} style={styles.button}>
                <Text style={styles.textButton}>
                    +
                </Text>
            </Pressable>
        </View>
    )
}

export default QuantitySelector

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#dcb688',
        width: 120,
    },
    button: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8C5674',
        borderRadius: 50
    },
    textButton: {
        fontSize: 24,
    },
    quantity: {
        color: '#8C5674',
        fontSize: 20,
    }


})