import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import HomeNavigator from "./screens/Home/HomeNavigator";
import CartNavigator from "./screens/Cart/CartNavigator";
//import AccountNavigator from "./screens/Account/AccountNavigator";
import SearchBar from "./components/SearchBar";
import { Provider } from "react-redux";
import { store } from "./store"
// import { useProductsQuery } from "./services/productsApi";

const Tab = createBottomTabNavigator();

export default function App() {

  // const {data,error,isLoading,isFetching,isSuccess}=useProductsQuery

  return (
    <Provider store={store}>
      {/* {isLoading && <h2>...Loading </h2>} */}
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
          {/* <Tab.Screen
          name="Account"
          component={AccountNavigator}
          options={{
            headerShown: false,
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="person-circle-outline"
                  size={26}
                  color={tabInfo.focused ? "#814e66" : "#000"}
                />
              );
            },
          }}
        /> */}
          <Tab.Screen
            name="Cart"
            component={CartNavigator}
            options={{
              headerShown: false,
              tabBarActiveTintColor: "#814e66",
              tabBarInactiveTintColor: "#000",
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name="cart"
                    size={26}
                    color={tabInfo.focused ? "#814e66" : "#000"}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  );

}
