import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CartScreen from "./CartScreen";
import CheckoutScreen from "./CheckoutScreen";

const Stack = createStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
