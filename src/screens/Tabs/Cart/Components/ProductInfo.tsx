import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './ModalProductStyles';
import useGetProductById from '../useGetProductById';
import PlazaText from '@/components/PlazaText';

const ProductInfo = (props) => {
  const { data, loading, error } = useGetProductById(parseInt(props.productID));

  if (loading || error) {
    return <PlazaText>Loading...</PlazaText>;
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
      <PlazaText style={styles.modalTitle}>
        {product.name + ' - ' + product.quantity}
      </PlazaText>
      <PlazaText style={styles.modalSub}>{'$' + product.price}</PlazaText>
      <PlazaText style={styles.modalText}>{product.description}</PlazaText>
    </View>
  );
};

export default ProductInfo;
