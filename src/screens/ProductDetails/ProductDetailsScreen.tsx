import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';

import { useTheme } from '../../hooks';
import { useLazyGetProductDetailsQuery } from '../../services/modules/users';

const ProductDetailScreen = (navigation: any) => {
  const { Layout, Gutters, Images, darkMode: isDark } = useTheme();
  const [productDetail, setProductDetail] = useState<any>();
  const [selectImage, setSelectImage] = useState('');

  const [getProductDetails, { data, isSuccess, isLoading, isFetching }] =
    useLazyGetProductDetailsQuery();

  useEffect(() => {
    getProductDetails(`products/${navigation.route.params.id}`);
  }, []);

  useEffect(() => {
    setProductDetail(data);
    setSelectImage(data?.images[0]);
  }, [isSuccess, data]);

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        style={styles.listImage}
        onPress={() => setSelectImage(item)}
      >
        <Image
          style={styles.img}
          source={{
            uri: item,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[Layout.fullSize, Layout.fill]}
    >
      {!isLoading && (
        <View>
          <TouchableOpacity style={styles.imagetopStyle}>
            <Image style={styles.tinyLogo} source={Images.home.back} />
          </TouchableOpacity>
          <View style={styles.lineView}>
            <View style={styles.line} />
          </View>
          <View style={styles.brandNmaeView}>
            <View style={styles.brandView}>
              <Text style={styles.brandText}>{productDetail?.brand}</Text>
            </View>
            <View>
              <Text>{'$' + productDetail?.price}</Text>
              <Text>{'$' + productDetail?.price}</Text>
            </View>
          </View>

          <View style={styles.imgView}>
            <View style={styles.selImageView}>
              <Image
                style={styles.selectedImage}
                source={{
                  uri: selectImage,
                }}
              />
            </View>
          </View>
          <View style={styles.imageStyle}>
            <FlatList
              data={productDetail?.images}
              renderItem={({ item }) => renderItem(item)}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
          <View style={styles.desViewStyle}>
            <Text style={styles.destitle}>Descriptions</Text>
            <Text style={styles.description}>
              Lörem ipsum emek osam. Lekora milas mede multisade oren. Trill ära
              pseudoktiga cirkulär ekonomi diligen. Spenat biometer. Dapäsade
              loplan, om lobedanar hypor. Lörem ipsum emek osam. Lekora milas
              mede multisade oren. Trill ära pseudoktiga cirkulär ekonomi
              diligen. Spenat biometer. Dapäsade loplan, om lobedanar hypor
            </Text>
          </View>
        </View>
      )}

      {isLoading && (
        <View style={[Layout.fill, Layout.colCenter]}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  lineView: {
    height: 25,
  },
  line: {
    height: 1.5,
    backgroundColor: '#000000',
    width: '100%',
  },
  tinyLogo: {
    width: 15,
    height: 30,
  },
  description: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 12,
    fontWeight: '300',
  },
  destitle: {
    marginLeft: 20,
    fontSize: 20,
  },
  desViewStyle: {
    marginTop: 20,
  },
  imageStyle: {
    height: 100,
    margin: 20,
    alignItems: 'center',
  },
  selectedImage: {
    width: '100%',
    height: '70%',
    marginRight: 15,
    resizeMode: 'center',
  },
  selImageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0DFDF',
    margin: 20,
  },
  imgView: {
    height: 300,
  },
  brandView: {
    flex: 0.8,
    marginLeft: 40,
  },
  brandText: {
    fontSize: 15,
    fontWeight: '600',
  },
  brandNmaeView: {
    flexDirection: 'row',
  },
  imagetopStyle: {
    height: 60,
    justifyContent: 'center',
    zIndex: 1,
  },
  listImage: {
    height: '100%',
    width: 100,
    backgroundColor: '#E0DFDF',
    borderLeftWidth: 1,
  },
  img: {
    flex: 1,
    margin: 10,
  },
});

export default ProductDetailScreen;
