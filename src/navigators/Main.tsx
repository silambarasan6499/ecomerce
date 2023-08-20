import React, { useEffect } from "react";
import BottomTab from "./BottomTab";
import SignupScreen from "../screens/SignUp/SignupScreen";
import OtpScreen from "../screens/OtpScreen/OtpScreen";
import ForgetPassword from "../screens/ForgetPassword/ForgetPassword";

import { createStackNavigator } from "@react-navigation/stack";
import { getData } from "../utills/asyncStorage";
import { Alert } from "react-native/types";

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"SignupScreen"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
