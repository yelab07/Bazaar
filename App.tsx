import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

import HomeNavigator from "./screens/Home/HomeNavigator";
import CartNavigator from "./screens/Cart/CartNavigator";
import SearchBar from "./components/SearchBar";
import { Provider } from "react-redux";
import { store } from "./store"
import { View } from "react-native";
import TotalQty from "./screens/Cart/TotalQty"


const Tab = createBottomTabNavigator();
const persistor = persistStore(store)

export default function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={HomeNavigator}
              options={{
                header: () => <SearchBar />,
                tabBarActiveTintColor: "#814e66",
                tabBarInactiveTintColor: "#000",
                tabBarIcon: (tabInfo) => {
                  return (

                    <Ionicons
                      name="md-home"
                      size={24}
                      color={tabInfo.focused ? "#814e66" : "#000"}
                    />
                  );
                },
              }}
            />

            <Tab.Screen
              name="Cart"
              component={CartNavigator}
              options={{
                headerShown: false,
                tabBarActiveTintColor: "#814e66",
                tabBarInactiveTintColor: "#000",
                tabBarIcon: (tabInfo) => {
                  return (

                    <View >
                      <TotalQty />
                      <Ionicons
                        name="cart"
                        size={26}
                        color={tabInfo.focused ? "#814e66" : "#000"}
                        style={{ marginLeft: 15, }}
                      />

                    </View>




                  );
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>

    </Provider>

  );

}
