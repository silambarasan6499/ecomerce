import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { useTranslation } from "react-i18next";
// const { t } = useTranslation(["example", "welcome"]);

import { isValidEmail, isValidNumber } from "../utills/Validation";

const RegisterComponent = (props: any) => {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const onChangeText = (text: any, field: any) => {
    if (field == "FirstName") {
      setFirstName(text);
    } else if (field == "LastName") {
      setLastname(text);
    } else if (field == "Date of birth") {
      setDateOfBirth(text);
    } else if (field == "Phone Number") {
      setPhoneNumber(text);
    } else if (field == "Email") {
      setEmail(text);
    } else if (field == "Password") {
      setPassword(text);
    } else if (field == "Conform Password") {
      setConformPassword(text);
    }
  };

  const validation = () => {
    if (firstname === "") {
      Alert.alert("", "Enter valide First Name");
      return false;
    } else if (lastName === "") {
      Alert.alert("", "Enter valide Last Name");
      return false;
    } else if (dateOfBirth === "") {
      Alert.alert("", "Enter valide dateOfBirth");
      return false;
    } else if (phoneNumber === "") {
      Alert.alert("", "Please Enter PhoneNumber");
      return false;
    } else if (email === "") {
      Alert.alert("", "Please Enter the email");
      return false;
    } else if (password === "") {
      Alert.alert("", "Enter valide password");
      return false;
    } else if (conformPassword === "") {
      Alert.alert("", "Enter valide conformPassword");
      return false;
    } else if (conformPassword != password) {
      Alert.alert("", "Entered Password is not matching!!");
      return false;
    } else if (!isValidEmail(email)) {
      Alert.alert("", "Enter valide Email");
    } else if (isValidNumber(phoneNumber)) {
      Alert.alert("", "Enter valide PhoneNumber");
    } else {
      return true;
    }
  };

  const register = () => {
    const userDetail = {
      firstname: firstname,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      conformPassword: conformPassword,
    };
    if (validation()) {
      props.onSignUp(userDetail);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%", marginTop: 20 }}>
        <Text style={styles.title}> {"FirstName"}</Text>

        <TextInput
          placeholder="FirstName"
          onChangeText={(text) => onChangeText(text, "FirstName")}
          value={firstname}
          style={styles.input}
        />
        <Text style={styles.title}> LastName</Text>

        <TextInput
          placeholder="LastName"
          onChangeText={(text) => onChangeText(text, "LastName")}
          value={lastName}
          style={styles.input}
        />
        <Text style={styles.title}> Date of birth</Text>

        <TextInput
          placeholder="Date of birth"
          onChangeText={(text) => onChangeText(text, "Date of birth")}
          value={dateOfBirth}
          style={styles.input}
          inputMode={"numeric"}
        />

        <Text style={styles.title}> Phone Number</Text>

        <TextInput
          placeholder="Phone Number"
          onChangeText={(text) => onChangeText(text, "Phone Number")}
          value={phoneNumber}
          style={styles.input}
          inputMode={"numeric"}
        />
        <Text style={styles.title}> Email</Text>

        <TextInput
          placeholder="Email"
          onChangeText={(text) => onChangeText(text, "Email")}
          value={email}
          style={styles.input}
        />
        <Text style={styles.title}> Password</Text>

        <TextInput
          placeholder="Password"
          // secureTextEntry
          onChangeText={(text) => onChangeText(text, "Password")}
          value={password}
          style={styles.input}
        />
        <Text style={styles.title}> Conform Password</Text>

        <TextInput
          placeholder="Conform Password"
          // secureTextEntry
          onChangeText={(text) => onChangeText(text, "Conform Password")}
          value={conformPassword}
          style={styles.input}
        />
      </ScrollView>

      <TouchableOpacity
        onPress={() => register()}
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 40,
          width: "100%",
          backgroundColor: "black",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 20,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 5,
    fontSize: 15,
    fontWeight: "500",
  },
});

export default RegisterComponent;
