import { log } from "console";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";

const LoginComponent = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeText = (text: any, field: any) => {
    if (field == "Email") {
      setEmail(text);
    } else if (field == "Password") {
      setPassword(text);
    }
  };

  const validation = () => {
    if (email === "") {
      Alert.alert("", "Enter valide Email");
      return false;
    } else if (password === "") {
      Alert.alert("", "Enter valide Password");
      return false;
    } else {
      return true;
    }
  };

  const login = () => {
    const userDetail = {
      email: email,
      password: password,
    };
    if (validation()) {
      props.onSignUp(userDetail);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {"Email"}</Text>

      <TextInput
        placeholder="Email"
        onChangeText={(text) => onChangeText(text, "Email")}
        value={email}
        style={styles.input}
      />
      <Text style={styles.title}> {"Password"}</Text>
      <TextInput
        placeholder="Password"
        onChangeText={(text) => onChangeText(text, "Password")}
        value={password}
        style={styles.input}
      />

      <TouchableOpacity onPress={() => login()} style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.forgetPassword()}
        style={styles.forgetPassword}
      >
        <Text>Forget password</Text>
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
});

export default LoginComponent;
