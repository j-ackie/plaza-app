import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

const HistoryProduct = ({ item, setSelected, setVisible }) => {
  const product = item.item;
  return (
    <Pressable
      style={styles.cartButton}
      onPress={() => {
        setSelected(item.index);
        setVisible(true);
      }}
    >
      <SafeAreaView style={styles.shoppingCartItemContainer}>
        <Image
          source={{
            uri: product.imageURI,
          }}
          style={styles.shoppingCartItemImage}
          resizeMode="cover"
        />
        <View style={styles.shoppingCartItemTextContainer}>
          <Text style={{ fontWeight: 'bold' }}>{product.name}</Text>
          <View style={{ position: 'relative', height: 20, width: 200 }}>
            <View style={{ height: '100%', justifyContent: 'center' }}>
              <Progress.Bar
                progress={0.35 * product.status}
                width={200}
                height={4}
                color="rgba(0, 0, 0, 1)"
                unfilledColor="rgba(220, 220, 220, 1)"
                borderWidth={0}
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
          <Text>Order confirmed</Text>
        </View>
      </SafeAreaView>
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
