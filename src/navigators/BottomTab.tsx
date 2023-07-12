import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListScreen from '../screens/ProductList/ProductListScreen';
import CommingSoonScreen from '../screens/CommingSoon/commingSoon';
import ProductDetailScreen from '../screens/ProductDetails/ProductDetailsScreen';
import Navigation from '../navigators/Navigation';

import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator initialRouteName="cance">
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                style={styles.logo}
                source={require('../theme/assets/images/home.png')}
              />
            ),
          }}
          component={CommingSoonScreen}
        />
        <Tab.Screen
          name="more"
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                style={styles.logo}
                source={require('../theme/assets/images/list.png')}
              />
            ),
          }}
          component={CommingSoonScreen}
        />
        <Tab.Screen
          name="cance"
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                style={styles.logo}
                source={require('../theme/assets/images/shopping.png')}
              />
            ),
          }}
          component={Navigation}
        />
        <Tab.Screen
          name="test"
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                style={styles.logo}
                source={require('../theme/assets/images/heart.png')}
              />
            ),
          }}
          component={CommingSoonScreen}
        />

        <Tab.Screen
          name="Settings"
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                style={styles.logo}
                source={require('../theme/assets/images/user.png')}
              />
            ),
          }}
          component={CommingSoonScreen}
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
});

export default BottomTab;
