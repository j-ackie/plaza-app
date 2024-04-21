import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { ProgressBar } from 'react-native-paper';
import Color from '@/constants/color';
import PlazaText from '@/components/PlazaText';

const HistoryProduct = ({ item, setSelected, setVisible }) => {
  const product = item.item;
  const progValue = 0.35 * item.item.status
  return (
    <Pressable
      style={styles.cartButton}
      onPress={() => {
        setSelected(item.index);
        setVisible(true);
      }}
    >
      <View style={styles.shoppingCartItemContainer}>
        <Image
          source={{
            uri: product.imageURI,
          }}
          style={styles.shoppingCartItemImage}
          resizeMode="cover"
        />
        <View style={styles.shoppingCartItemTextContainer}>
          <PlazaText style={{ fontWeight: 'bold' }}>{product.name}</PlazaText>
          <View style={{ position: 'relative', height: 20, width: 200 }}>
            <View style={{ height: '100%', justifyContent: 'center' }}>
              <ProgressBar 
                animatedValue={progValue}
                color={Color.BLACK}
              />
            </View>
            <View
              style={{
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
              }}
            >
              <View style={styles.orderHistoryDot} />
              <View style={styles.orderHistoryDot} />
              <View style={styles.orderHistoryDot} />
              <View style={styles.orderHistoryDot} />
            </View>
          </View>
          <PlazaText>Order confirmed</PlazaText>
        </View>
      </View>
    </Pressable>
  );
};

export default HistoryProduct;

const styles = StyleSheet.create({
  cartButton: {},
  shoppingCartItemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 75 / 3,
  },
  shoppingCartItemImage: {
    width: 75,
    height: 75,
    borderRadius: 75 / 3,
    borderRightWidth: 2,
  },
  shoppingCartModalImage: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  shoppingCartItemTextContainer: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: 20,
    marginTop: 10,
  },
  orderHistoryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'black',
  },
});
