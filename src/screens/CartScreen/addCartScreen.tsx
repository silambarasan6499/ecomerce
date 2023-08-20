import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

import {
  storeData,
  getData,
  storeValue,
  getValue,
  removeValue,
} from "../../utills/asyncStorage";
import { TouchableOpacity } from "react-native-gesture-handler";

const addCartScreen = () => {
  const [cartData, setCartData] = React.useState([]);

  useEffect(() => {
    getCartData();
  }, [cartData]);

  const getCartData = async () => {
    let userdetails = await getData("cartData");
    setCartData(userdetails);
  };

  const removeCart = () => {
    removeValue("cartData");
  };
  const renderItem = (item: any) => {
    return (
      <View style={styles.renderItem}>
        <Image
          style={styles.selectedImage}
          source={{
            uri: item.thumbnail,
          }}
        />
        <View>
          <Text style={styles.brandText}>{item.brand}</Text>
          <Text numberOfLines={2} style={styles.descriptionText}>{item.description}</Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={cartData}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={{
          height: 40,
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => removeCart()}
      >
        <Text style={{ color: "white" }}>ClearCart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    resizeMode: "center",
    marginLeft: 10,
  },
  renderItem: {
    height: 60,
    marginTop: 20,
    backgroundColor: "black",
    width: "97%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 7,
  },
  brandText: {
    fontSize: 20,
    color: "white",
  },
  descriptionText: {
    fontSize: 13,
    color: "white",
    marginRight: 70,
  },
});

export default addCartScreen;
