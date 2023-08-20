import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductListScreen from "../screens/ProductList/ProductListScreen";
import CommingSoonScreen from "../screens/CommingSoon/commingSoon";
import ProductDetailScreen from "../screens/ProductDetails/ProductDetailsScreen";
import addCartScreen from "../screens/CartScreen/addCartScreen";
import ProfileScreen from "../screens/Profile/profileScreen";

import Navigation from "../navigators/Navigation";

import { createStackNavigator } from "@react-navigation/stack";
import {
  storeData,
  getData,
  storeValue,
  getValue,
} from "../utills/asyncStorage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => {
  const [login, setCartData] = React.useState();

  useEffect(() => {
    getCartDetail();
  });

  const getCartDetail = async () => {
    let userdetails = await getData("cartData");
    setCartData(userdetails.length>0 ? userdetails.length :null);
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Image
                style={styles.logo}
                source={require("../theme/assets/images/home.png")}
              />
            ),
          }}
          component={Navigation}
        />
        <Tab.Screen
          name="more"
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Image
                style={styles.logo}
                source={require("../theme/assets/images/list.png")}
              />
            ),
          }}
          component={CommingSoonScreen}
        />
        <Tab.Screen
          name="cance"
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Image
                style={styles.shopingLogo}
                source={require("../theme/assets/images/shopping.png")}
              />
            ),
            tabBarBadge: login,
          }}
          component={addCartScreen}
        />
        <Tab.Screen
          name="test"
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Image
                style={styles.logo}
                source={require("../theme/assets/images/heart.png")}
              />
            ),
          }}
          component={CommingSoonScreen}
        />

        <Tab.Screen
          name="Settings"
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              <Image
                style={styles.logo}
                source={require("../theme/assets/images/user.png")}
              />
            ),
          }}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 20,
    height: 20,
    marginTop: 20,
  },
  shopingLogo: {
    width: 25,
    height: 25,
    marginTop: 20,
  },
});

export default BottomTab;
