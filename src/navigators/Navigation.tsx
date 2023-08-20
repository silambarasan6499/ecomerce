import React from "react";
import { SafeAreaView } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { ProductDetailScreen, ProductListScreen } from "../screens";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductListScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
