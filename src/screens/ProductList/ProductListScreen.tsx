import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { useTheme } from "../../hooks";
import { useLazyFetchOneQuery } from "../../services/modules/users";

const ProductListScreen = ({ navigation }: any) => {
  const { Layout, Images, darkMode: isDark } = useTheme();

  const [productList, setProductList] = useState([]);

  const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
    useLazyFetchOneQuery();

  useEffect(() => {
    console.log("---", data);

    if (data && data.products) {
      setProductList(data.products);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    fetchOne("products");
  }, []);

  const onSelectItem = (item: any) => {
    navigation.navigate("ProductDetailScreen", { id: item.id });
  };

  const renderItem = (item: any) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.theem}
          onPress={() => onSelectItem(item)}
        >
          <View>
            <View style={styles.imageView}>
              <Image
                style={styles.listView}
                source={{
                  uri: item.thumbnail,
                }}
              />
            </View>
            <Text>{item.brand}</Text>
            <Text>{item.stock}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={Layout.fill}>
      <View style={styles.searchView}>
        <Image style={styles.tinyLogo} source={Images.home.search} />
        <Image style={styles.tinyLogo} source={Images.home.notification} />
      </View>
      <View style={styles.lineView}>
        <View style={styles.line} />
      </View>

      <View style={styles.textView}>
        <Text style={styles.text}>ALL</Text>
        <Text style={styles.text}>WOMEN</Text>
        <Text style={styles.text}>KIDS</Text>
      </View>
      <View style={styles.productListView}>
        {productList.length > 0 && (
          <FlatList
            data={productList}
            numColumns={2}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
      {/* {isLoading && (
        <View style={[Layout.fill, Layout.colCenter]}>
          <ActivityIndicator size={'large'} />
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  logo: {
    width: 20,
    height: 20,
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  searchView: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 20,
    marginRight: "7%",
  },
  lineView: {
    height: 25,
    justifyContent: "flex-end",
  },
  line: {
    height: 1.5,
    backgroundColor: "#000000",
    width: "80%",
    marginLeft: "10%",
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
  },
  textView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  productListView: {
    marginTop: 30,
    marginBottom: 100,
  },
  listView: {
    width: "100%",
    height: "70%",
    marginRight: 15,
    resizeMode: "center",
  },
  imageView: {
    alignItems: "center",
    backgroundColor: "#E0DFDF",
    justifyContent: "center",
  },
  theem: {
    height: 150,
    width: 150,
    marginLeft: 40,
    marginTop: 10,
  },
});

export default ProductListScreen;
