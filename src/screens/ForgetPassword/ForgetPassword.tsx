import { FontSize } from "ecomerce/src/theme/Variables";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  storeData,
  getData,
  storeValue,
  getValue,
} from "../../utills/asyncStorage";

const ForgetPassword = ({ navigation }: any) => {
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const onChangeText = (data: any, item: any) => {
    if (item == "NewPassword") {
      setPassword(data);
    } else if (item == "ConformPassword") {
      setConformPassword(data);
    }
  };

  const validate = () => {
    if (password == "") {
      return false;
    } else if (conformPassword == "") {
      return false;
    } else {
      return true;
    }
  };

  const onClickConform = () => {
    if (validate()) {
      if (password === conformPassword) {
        storeValue("password", password);
        navigation.goBack();
      } else {
        Alert.alert("", "invalide Password");
      }
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 10,
      }}
    >
      <View style={styles.textView}>
        <Text style={styles.passwordText}>Forget Password</Text>
      </View>
      <Text style={styles.title}> {"NewPassword"}</Text>
      <TextInput
        placeholder="Newpassword"
        onChangeText={(text) => onChangeText(text, "NewPassword")}
        value={password}
        style={styles.input}
      />
      <Text style={styles.title}> {"ConformPassword"}</Text>
      <TextInput
        placeholder="ConformPassword"
        onChangeText={(text) => onChangeText(text, "ConformPassword")}
        value={conformPassword}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => onClickConform()}
        style={styles.conformText}
      >
        <Text style={styles.conform}>Conform</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  title: {
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 5,
    fontSize: 15,
    fontWeight: "500",
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "100%",
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
  },
  loginText: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 20,
  },
  forgetPassword: {
    height: 40,
    marginTop: 20,
  },
  passwordText: {
    height: 40,
    fontWeight: "800",
    marginBottom: 50,
    fontSize: 20,
  },
  textView: {
    alignItems: "center",
    justifyContent: "center",
  },
  conformText: {
    height: 40,
    backgroundColor: "black",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  conform: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
  },
});

export default ForgetPassword;
