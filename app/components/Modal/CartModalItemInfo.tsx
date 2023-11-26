import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './CartModal.styles';
import { gql, useQuery } from '@apollo/client';

const productQuery = gql`
  query Query($productId: ID!) {
    product(productID: $productId) {
      id
      sellerID
      name
      description
      quantity
      price
      imageURI
    }
  }
`;

function CartModalItemInfo(props) {
  console.log(props.productID);

  const { loading, error, data } = useQuery(productQuery, {
    variables: {
      productId: props.productID,
    },
  });

  if (loading || error) {
    return <Text></Text>;
  }

  const product = data.product;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product.imageURI,
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
}

export default CartModalItemInfo;
