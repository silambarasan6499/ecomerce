import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  storeData,
  getData,
  storeValue,
  getValue,
} from "../../utills/asyncStorage";

const profileScreen = ({ navigation }: any) => {
  const logout = async () => {
    await storeValue("isLogin", "false");
    navigation.navigate("SignupScreen");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => logout()}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default profileScreen;
