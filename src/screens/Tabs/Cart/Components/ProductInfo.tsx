import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './ModalProductStyles';
import useGetProductById from '../useGetProductById';

const ProductInfo = (props) => {
  const { data, loading, error } = useGetProductById(parseInt(props.productID));

  if (loading || error) {
    return <Text>Loading...</Text>;
  }

  const product = data.product;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product.imageURIs[0],
        }}
        style={styles.shoppingCartModalImage}
        resizeMode="cover"
      />
      <Text style={styles.modalTitle}>
        {product.name + ' - ' + product.quantity}
      </Text>
      <Text style={styles.modalSub}>{'$' + product.price}</Text>
      <Text style={styles.modalText}>{product.description}</Text>
    </View>
  );
};

export default ProductInfo;
