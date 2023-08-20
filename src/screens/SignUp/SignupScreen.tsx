import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

import {
  storeData,
  getData,
  storeValue,
  getValue,
} from "../../utills/asyncStorage";

import { RegisterComponent, LoginComponent } from "../../components";

const SignupScreen = ({ navigation }: any) => {
  const [login, setLogin] = React.useState<Boolean>(false);

  useEffect(() => {
    initiallLogin();
  });

  const initiallLogin = async () => {
    let userdetails = await getData("isLogin");
    console.log("userdetails------>", userdetails);

    userdetails ? navigation.navigate("BottomTab") : null;
  };

  const onRegisterClick = async (data: any) => {
    await storeData("userDetails", data);
    await storeValue("password", data.password);
    await storeValue("isLogin", "true");

    navigation.navigate("BottomTab");
  };

  const onLoginClick = async (data: any) => {
    let userdetails = await getData("userDetails");
    let password = await getValue("password");
    await storeValue("isLogin", "true");

    if (data.email === userdetails.email && data.password === password) {
      navigation.navigate("BottomTab");
    } else {
      Alert.alert("", "Invalide Email and password");
    }
  };

  const forgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.topView}>
        <TouchableOpacity
          onPress={() => {
            setLogin(false);
          }}
          style={[styles.header, !login ? { backgroundColor: "black" } : null]}
        >
          <Text style={[styles.lognText, !login ? { color: "white" } : null]}>
            {"Register"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.loginButton,
            login ? { backgroundColor: "black" } : null,
          ]}
          onPress={async () => {
            setLogin(true);
          }}
        >
          <Text style={[styles.lognText, login ? { color: "white" } : null]}>
            {"Login"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {login ? (
          <LoginComponent
            forgetPassword={() => forgetPassword()}
            onSignUp={(data: any) => onLoginClick(data)}
          />
        ) : (
          <RegisterComponent onSignUp={(data: any) => onRegisterClick(data)} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    borderColor: "greay",
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  lognText: {
    fontSize: 20,
    fontWeight: "700",
  },
  header: {
    borderColor: "greay",
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  topView: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
});

export default SignupScreen;
